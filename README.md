# Nexia Morocco — Site officiel + Back-office

Site web vitrine et back-office privé pour Nexia Morocco, membre du réseau Nexia
International. Migré depuis Lovable vers une stack contrôlée et déployable sur Netlify ou Vercel.

## Stack

| Layer | Technologie |
|-------|-------------|
| Build | Vite 5 + SWC |
| Front | React 18 + TypeScript |
| UI | shadcn/ui + Radix + Tailwind CSS |
| Routing | React Router 6 |
| Data | TanStack Query |
| Backend | Supabase (auth + Postgres + storage) |
| Deploy | Netlify ou Vercel (config fournie) |

## Structure

```
src/
  pages/
    Index.tsx, About.tsx, Services.tsx, Contact.tsx, ...   ← Site public (existant)
    auth/Login.tsx, Signup.tsx, ForgotPassword.tsx         ← Authentification
    admin/AdminDashboard.tsx, ContactRequests.tsx          ← Back-office staff
    collaborateurs/Collaborateurs.tsx                      ← Espace interne
    client/PortailClient.tsx                               ← Portail client
  components/
    auth/ProtectedRoute.tsx                                ← Garde-fou de routes
    back-office/BackOfficeLayout.tsx                       ← Layout sidebar
    ContactForm.tsx, Header.tsx, ...                       ← Composants publics
  contexts/
    AuthContext.tsx                                        ← Session + profil + rôle
    LanguageContext.tsx                                    ← i18n existant
  integrations/supabase/
    client.ts                                              ← Lit VITE_SUPABASE_* env vars
    types.ts                                               ← Types DB (à régénérer)

supabase/
  migrations/
    20260527000000_init_back_office.sql                    ← Schéma DB complet
```

## Premier démarrage local

```bash
# 1. Cloner et installer
git clone https://github.com/badre33/nexiamorocco.git
cd nexiamorocco
npm install

# 2. Configurer l'environnement
cp .env.example .env.local
# → éditer .env.local avec vos clés Supabase

# 3. Lancer
npm run dev          # http://localhost:8080
```

## Configuration Supabase

### Étape 1 — Créer/utiliser le projet
Le projet Supabase existant (`fltpndxdtovgjuqarfsh`) hérité de Lovable peut être conservé, ou
remplacé par un projet neuf. Récupérez sur le dashboard Supabase :

- **Project URL** → `VITE_SUPABASE_URL`
- **anon / public key** → `VITE_SUPABASE_PUBLISHABLE_KEY`
- **Project ID** → `VITE_SUPABASE_PROJECT_ID`

### Étape 2 — Appliquer la migration
Dans le dashboard Supabase → **SQL Editor**, exécutez le contenu de
`supabase/migrations/20260527000000_init_back_office.sql`. Cela crée :

- enum `user_role` (`admin` | `collaborator` | `client`)
- tables `profiles`, `contact_requests`, `internal_documents`, `client_files`
- trigger `on_auth_user_created` qui assigne le rôle selon le domaine email :
  - `*@nexiafiducia.ma` → `collaborator`
  - autres → `client`
- Row-Level Security activée sur toutes les tables
- politiques RLS : staff voit tout, client voit ses propres fichiers, anonyme peut soumettre un
  formulaire de contact

### Étape 3 — Créer le premier admin
Le trigger ne crée jamais d'admin (sécurité). Pour promouvoir votre compte :

```sql
update public.profiles
   set role = 'admin'
 where email = 'votre.email@nexiafiducia.ma';
```

### Étape 4 — Configurer les emails Supabase
Dashboard → **Authentication → Email Templates** : personnalisez l'expéditeur et les modèles
(confirmation d'inscription, reset password). Vérifiez que le **Site URL** dans
**Authentication → URL Configuration** pointe vers `https://nexiafiducia.ma` (ou votre URL
Netlify temporaire) — sinon les liens magiques iront sur `localhost`.

### Étape 5 (optionnel) — Restreindre l'inscription aux emails Nexia
Si vous ne voulez **pas** que les clients s'inscrivent eux-mêmes : dashboard → **Authentication
→ Providers → Email** → désactivez **Enable signups**, et créez les comptes clients à la main
depuis **Authentication → Users → Add user**.

## Déploiement

### Option A — Netlify (recommandé pour ce projet)

1. [app.netlify.com](https://app.netlify.com/) → **Add new site → Import from Git → GitHub**
2. Sélectionner `badre33/nexiamorocco`
3. Netlify détecte automatiquement `netlify.toml` (commande `npm run build`, publish `dist`)
4. **Site settings → Environment variables**, ajouter :
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
   - `VITE_ALLOWED_AUTH_DOMAIN=nexiafiducia.ma`
5. **Deploy** — Netlify build + déploie. Chaque `git push` redéploie automatiquement.
6. **Domains → Add custom domain → `nexiafiducia.ma`** ; suivez les instructions DNS.

### Option B — Vercel

1. [vercel.com/new](https://vercel.com/new) → importer le repo GitHub
2. Framework : **Vite** (détecté via `vercel.json`)
3. **Environment Variables** : mêmes 4 variables que ci-dessus
4. Deploy + ajouter le custom domain

## Comment fonctionne l'accès au back-office

| Rôle | Email | Accès |
|------|-------|-------|
| `admin` | n'importe quel email (promu manuellement) | `/admin/*`, `/collaborateurs`, `/portail-client`, gestion utilisateurs |
| `collaborator` | `*@nexiafiducia.ma` (automatique à l'inscription) | `/admin/*`, `/collaborateurs` |
| `client` | toute autre adresse | `/portail-client` uniquement |

Le formulaire de contact public sauvegarde directement dans la table `contact_requests` (insert
anonyme autorisé par RLS) et apparaît dans `/admin/contacts`.

## Que reste-t-il à faire (suite logique)

- [ ] Régénérer `src/integrations/supabase/types.ts` après la migration :
      `npx supabase gen types typescript --project-id <ID> > src/integrations/supabase/types.ts`
- [ ] Ajouter un lien "Espace privé" dans le `Header.tsx` public
- [ ] Implémenter l'upload de fichiers (Supabase Storage : buckets `internal-documents` et
      `client-files`)
- [ ] Page de gestion des utilisateurs côté admin (`/admin/users`)
- [ ] Notifier les admins par email à chaque nouvelle demande de contact
      (Supabase Edge Function + Resend ou Brevo)
- [ ] Connecter Plausible / GA4 pour les analytics
- [ ] Audit Lighthouse + corrections accessibilité
- [ ] Tests E2E (Playwright) sur les parcours critiques

## Scripts

```bash
npm run dev          # serveur de dev sur :8080
npm run build        # build de production → dist/
npm run build:dev    # build en mode development (pour debug)
npm run preview      # prévisualiser le build local
npm run lint         # linter
```

## Sécurité

- Le fichier `.env` **ne doit jamais** être committé. Le `.gitignore` l'exclut désormais.
  Si vous avez committé `.env` par le passé (c'était le cas !), pensez à régénérer vos clés
  Supabase : dashboard → **Settings → API → Reset anon key**, puis mettre à jour
  l'environnement Netlify et `.env.local`.
- L'ancien fichier `.env` reste dans l'historique git ; pour le purger, utilisez
  [`git filter-repo`](https://github.com/newren/git-filter-repo).
- La RLS Supabase est la **seule** ligne de défense côté DB : ne désactivez jamais une politique
  sans en comprendre l'impact.

---

Projet maintenu par Badre Harkaoui — [github.com/badre33](https://github.com/badre33)
