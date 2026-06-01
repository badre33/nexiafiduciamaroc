# Audit conformité — Nexia Website Guidelines 2023

**Source de référence** : `Nexia website guidelines.pdf` (16 pages, Nexia International, 2023) + templates HTML officiels (`nexia-html-templates/`).
**Cible auditée** : code du site `nexiamorocco` au commit `db56ce4` (sur main).
**Date** : 2026-05-31.

---

## Synthèse

| Sévérité | Compte | Statut |
|---|---|---|
| 🔴 P0 — Risque légal / identité | 2 | À corriger avant communication officielle |
| 🟠 P1 — Brand alignment majeur | 4 | À corriger rapidement |
| 🟡 P2 — Améliorations qualité | 4 | Bon à faire dans le sprint |
| 🟢 P3 — Nice-to-have | 3 | Quand on aura le temps |

Globalement le site **respecte la palette primaire et la police de fallback**, mais des écarts persistent sur le footer (couleur de fond inversée vs guide), les couleurs secondaires (valeurs imprécises et incomplètes) et le disclaimer (à vérifier mot pour mot).

---

## 🔴 P0 — Risque légal / identité

### 1. Mention de la raison sociale légale complète manquante dans le footer
**Guide p.3** : *"Please include in your footer or homepage disclaimer your **legal firm name in full**, especially if you are using the Nexia brand as your marketing name."*

**État actuel** : le footer affiche "Nexia / Morocco" comme marque, mais aucune mention type *"Nexia Morocco SARL — RC XXXXX, ICE YYYY, Casablanca"*.

**Action** : ajouter en bas de footer la raison sociale légale complète (RC, ICE, capital social, siège social) — à fournir par toi.

---

### 2. Disclaimer Nexia à vérifier mot pour mot
**Guide p.26** (short form, obligatoire sur **chaque** sous-page) :
> "[Insert member firm name] is a member of Nexia, a leading, global network of independent accounting and consulting firms. Please see the 'Member firm disclaimer' for further details."

Avec lien hypertexte vers `https://nexia.com/member-firm-disclaimer/`.

**État actuel** : `src/components/Footer.tsx` utilise `t('footer.description')` (clé i18n). Le texte injecté doit reprendre **exactement** cette formule + lien hypertexte vers le disclaimer Nexia. Le lien existe déjà (✅) mais le texte du disclaimer doit être audité.

**Action** : ouvrir `src/utils/translations.ts`, comparer la valeur de `footer.description` (FR + EN) avec le texte officiel et corriger si écart.

---

## 🟠 P1 — Brand alignment majeur

### 3. Footer — couleur de fond inversée
**Guide p.14** : footer background = **Nexia Light Teal `#00B9B9`** (cyan vif), site map links = blanc, 38px, Effra Medium.

**État actuel** : `bg-nexia-primary` (Dark Teal `#00323C`). C'est l'inverse — le sombre devrait être en header, le clair en footer.

**Impact** : footer visuellement off-brand par rapport aux autres firmes Nexia.

**Action** : dans `Footer.tsx`, remplacer `bg-nexia-primary text-white` par `bg-nexia-secondary text-white`. Vérifier le contraste des liens (les passer en `text-nexia-primary` ou `text-white` selon ce qui ressort le mieux à l'œil).

**⚠️ Accessibilité** : blanc sur `#00B9B9` a un ratio de contraste **2.43** (échoue AA, guide p.18). Pour rester accessible tout en respectant la couleur de fond, utiliser **Nexia Dark Teal `#00323C` sur Nexia Light Teal** (ratio 5.67, passe AA).

---

### 4. Couleur `nexia-blue` non conforme
**Guide p.16-17** : Nexia Blue officiel = **`#479DCF`** (light blue), ou Nexia Dark Blue = **`#5775B3`**.

**État actuel** (`src/index.css`) : `--nexia-blue: 220 57% 40%; /* #2E53A1 */` — bleu purplish trop saturé, ne correspond à aucune des deux valeurs officielles.

**Action** : choisir entre `#479DCF` ou `#5775B3` selon l'usage souhaité, mettre à jour la variable CSS.

---

### 5. Couleur `nexia-pink` non conforme
**Guide p.17** : Nexia Pink = **`#D44984`**.
**État actuel** : `#CA1C66` — rose trop foncé/saturé.
**Action** : mettre à jour la variable CSS à `#D44984`.

---

### 6. Couleurs secondaires manquantes
**Guide p.16-17** : palette secondaire complète = 6 couleurs (Blue, Dark Blue, Purple, Pink, Orange, Yellow).

**État actuel** : Tailwind config n'expose que `blue`, `yellow`, `pink`. Manquent **Purple `#9C4181`** et **Orange `#F0A65C`**, plus la distinction Blue/Dark Blue.

**Action** : étendre `tailwind.config.ts` :
```ts
nexia: {
  primary: '...',           // existant
  secondary: '...',         // existant
  blue: '#479DCF',          // corrigé (light blue)
  darkBlue: '#5775B3',      // nouveau
  purple: '#9C4181',        // nouveau
  pink: '#D44984',          // corrigé
  orange: '#F0A65C',        // nouveau
  yellow: '#FBCF40',        // corrigé (était #FBC311)
}
```

> ⚠️ **Règle d'usage (guide p.16)** : *"Never use more than one secondary colour within a single layout."*

---

## 🟡 P2 — Améliorations qualité

### 7. Logo footer trop petit
**Guide p.13** : one-line logo height **47.25px**.
**État actuel** : `Footer.tsx` → `className="h-6"` = **24px**, soit la moitié du minimum recommandé.
**Action** : passer à `h-12` (48px) au minimum.

---

### 8. Navigation principale : 6 items > recommandation de 5
**Guide p.13** : *"It is recommended that **up to five options** are displayed in the main navigation."*
**État actuel** : Accueil, Domaines d'expertise, Équipe Dirigeante, Insights (dropdown), À propos, Contact = **6 items**.
**Action** : envisager de regrouper "Équipe Dirigeante" dans un dropdown "À propos" (À propos → Notre histoire / Équipe dirigeante / Études de cas), ce qui ramène à 5 items principaux.

---

### 9. Variantes/tints de couleurs absentes
**Guide p.16-17** : chaque couleur secondaire a 5 tints (100/80/60/40/20%) utilisables pour ajouter de la variété visuelle.
**État actuel** : aucun tint défini. Conséquence : moins de subtilité dans les fonds, hovers, états.
**Action** : ajouter dans Tailwind config les déclinaisons pour au moins primary/secondary :
```ts
nexia: {
  primary: { DEFAULT: '#00323C', 80: '#33555C', 60: '#66787C', ... }
  secondary: { DEFAULT: '#00B9B9', 80: '#33C7C7', 60: '#66D5D5', ... }
  ...
}
```

---

### 10. Hiérarchie typographique du Hero
**Guide p.4** : Title H2 homepage = **Effra Bold 78px, Nexia Dark Teal `#00323C`**, sur fond **clair**.

**État actuel** : `HomeHero.tsx` → `text-5xl lg:text-7xl` (48px → 72px) en **blanc sur fond sombre**. Le design Lovable a inversé la convention "texte sombre sur fond clair" du template officiel.

**Action** : c'est un choix esthétique défendable (hero immersif sur image), mais à valider explicitement avec toi. Si on veut être strictement conforme : refactor du hero vers fond blanc + titre sombre, comme dans `nexia-html-templates/index.html`.

---

## 🟢 P3 — Nice-to-have

### 11. Fallback Tahoma pour Microsoft Office
**Guide p.20** : *"Tahoma is the Nexia secondary typeface for use in Microsoft Office documents."*
**Action** : ajouter `Tahoma` dans la chaîne de fallback CSS `font-family` après Poppins. Pas critique pour le rendu web mais utile pour les exports HTML→PDF→Word.

---

### 12. Audit accessibilité couleurs systémique
**Guide p.18** : tableau de combinaisons AA passantes.
**Action** : lancer un audit Lighthouse + axe-core sur toutes les pages déployées, corriger toutes les combinaisons qui échouent AA.

---

### 13. Polices Effra (commerciales)
**Guide p.19** : Effra est la police primaire officielle, payante chez daltonmaag.com (~£32/poids).
**État actuel** : Poppins (gratuit, autorisé comme fallback par le guide).
**Action** : si budget alloué, acheter les 3 poids d'Effra (Light, Regular, Bold) et les self-host. Sinon, rester sur Poppins.

---

## ✅ Conforme

- Palette primaire correcte : `#00323C` (primary) + `#00B9B9` (secondary)
- Police Poppins utilisée (fallback explicitement autorisé par le guide p.4)
- Lien vers `nexia.com/member-firm-disclaimer/` présent dans le footer
- Lien LinkedIn entreprise dans le footer (icône blanche sur fond cercle)
- Section dropdown pour les sous-rubriques (Insights)
- Bouton "Contact" présent dans la navigation principale
- Header avec `bg-nexia-primary` (dark teal — bon contraste avec blanc texte)
- Logo Nexia + qualifier "Morocco" présent

---

## Plan de correction proposé

**Sprint 1 — Conformité légale (1h)**
- Vérifier + corriger `footer.description` dans `translations.ts` (FR + EN)
- Ajouter raison sociale complète au footer (tu me fournis le texte)

**Sprint 2 — Couleurs (2h)**
- Mettre à jour les 3 variables CSS (`--nexia-blue`, `--nexia-pink`, `--nexia-yellow`)
- Ajouter `--nexia-purple` et `--nexia-orange`
- Étendre Tailwind config pour exposer les nouvelles couleurs
- Mettre à jour le footer : `bg-nexia-secondary` + texte `text-nexia-primary` (accessible)

**Sprint 3 — Layout / typo (2-3h)**
- Refactor logo footer (h-6 → h-12)
- Réorganiser nav (6 → 5 items via regroupement "À propos")
- Ajouter tints 80/60/40/20% en Tailwind config

**Sprint 4 — Brochure téléchargeable** (cf. section suivante)

---

## Brochure téléchargeable depuis le formulaire de contact

**État** : la brochure (`Nexia Morocco - Brochure 2026.pdf`, 7.4 MB) et la présentation (`Présentation Nexia Morocco 2026.pdf`, 5.9 MB) existent dans le dossier `Nexia Morocco/` mais ne sont **pas encore finalisées** (à confirmer côté toi).

**Approches recommandées** (à choisir) :

**Option A — Public direct (le plus simple)**
- Déposer le PDF final dans `public/brochures/nexia-morocco-2026.pdf`
- Bouton "Télécharger notre brochure" sur la page Contact (et possiblement Home)
- Pro : zéro friction utilisateur, indexable par Google
- Con : pas de lead capture, pas de stats

**Option B — Téléchargement après remplissage formulaire (lead magnet, recommandé)**
- Le PDF est dans Supabase Storage (bucket `marketing-assets`, public read)
- Le formulaire de contact, après submit réussi, déclenche un toast "Téléchargement de la brochure"
- Toast contient un lien direct → trigger le download
- Pro : capture le lead avant le download, on sait qui a téléchargé
- Con : un peu plus de friction

**Option C — Lien envoyé par email après formulaire**
- Le user remplit le formulaire
- Edge function Supabase envoie un email (Resend/Brevo) avec lien signé temporaire (24h)
- Pro : valide l'email du lead, traçabilité maximale
- Con : nécessite intégration email (Resend ou Brevo), plus complexe

**Ma recommandation** : commencer par **Option B**, ajouter l'email automatique plus tard si conversion intéressante.

**Une fois la brochure finale prête, prévenez-moi avec :**
1. Le PDF (idéalement < 10 MB, sinon on optimise)
2. Le choix de l'option (A/B/C)

Je l'intègre en 30 min.
