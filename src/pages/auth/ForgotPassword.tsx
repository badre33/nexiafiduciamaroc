import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { KeyRound } from 'lucide-react';

export default function ForgotPassword() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/login`,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      return;
    }
    toast({
      title: 'Email envoyé',
      description: 'Vérifiez votre boîte de réception pour réinitialiser votre mot de passe.',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <KeyRound className="w-5 h-5 text-nexia-secondary" /> Mot de passe oublié
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Entrez votre email&nbsp;; nous vous enverrons un lien de réinitialisation.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full h-11 bg-nexia-primary hover:bg-nexia-primary/90"
          >
            {submitting ? 'Envoi…' : 'Envoyer le lien'}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm">
          <Link to="/auth/login" className="text-nexia-secondary hover:underline">
            ← Retour à la connexion
          </Link>
        </p>
      </div>
    </div>
  );
}
