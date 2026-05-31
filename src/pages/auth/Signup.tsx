import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase, ALLOWED_AUTH_DOMAIN } from '@/integrations/supabase/client';
import { UserPlus } from 'lucide-react';

/**
 * Self-service account creation. Two paths:
 *   - Email ends with @<ALLOWED_AUTH_DOMAIN> → assigned 'collaborator' (DB trigger)
 *   - Any other email → assigned 'client'
 * Admins are created/promoted manually in Supabase.
 */
export default function Signup() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    setSubmitting(false);
    if (error) {
      toast({ title: 'Inscription impossible', description: error.message, variant: 'destructive' });
      return;
    }
    toast({
      title: 'Compte créé',
      description:
        'Un email de confirmation vous a été envoyé. Vérifiez votre boîte de réception.',
    });
    navigate('/auth/login', { replace: true });
  };

  const isInternal = email.toLowerCase().endsWith(`@${ALLOWED_AUTH_DOMAIN}`);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-nexia-primary">Nexia Fiducia Maroc</h1>
          </Link>
          <p className="text-sm text-gray-600 mt-2">Créer un compte</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-nexia-secondary" /> Inscription
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Les emails <strong>@{ALLOWED_AUTH_DOMAIN}</strong> obtiennent automatiquement un accès
            collaborateur.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nom complet</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11"
              />
              {email && (
                <p className="text-xs text-gray-500">
                  Type de compte détecté&nbsp;:{' '}
                  <strong className="text-nexia-primary">
                    {isInternal ? 'Collaborateur Nexia' : 'Client'}
                  </strong>
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="h-11"
              />
              <p className="text-xs text-gray-500">8 caractères minimum.</p>
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full h-11 bg-nexia-primary hover:bg-nexia-primary/90"
            >
              {submitting ? 'Création…' : 'Créer mon compte'}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm">
            Déjà inscrit&nbsp;?{' '}
            <Link to="/auth/login" className="text-nexia-secondary hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
