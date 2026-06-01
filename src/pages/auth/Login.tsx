import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { LogIn, Mail, Lock } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const from = (location.state as { from?: { pathname: string } } | null)?.from?.pathname ?? '/admin';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) {
      toast({
        title: 'Connexion impossible',
        description: error.message,
        variant: 'destructive',
      });
      return;
    }
    toast({ title: 'Bienvenue', description: 'Connexion réussie.' });
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-nexia-primary">Nexia Morocco</h1>
          </Link>
          <p className="text-sm text-gray-600 mt-2">Connexion à l'espace privé</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
            <LogIn className="w-5 h-5 text-nexia-secondary" /> Se connecter
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Collaborateurs et clients enregistrés uniquement.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold">
                <Mail className="w-4 h-4 text-nexia-secondary" /> Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@nexiafiducia.ma"
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2 text-sm font-semibold">
                <Lock className="w-4 h-4 text-nexia-secondary" /> Mot de passe
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11"
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full h-11 bg-nexia-primary hover:bg-nexia-primary/90"
            >
              {submitting ? 'Connexion…' : 'Se connecter'}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <Link to="/auth/forgot" className="text-nexia-secondary hover:underline">
              Mot de passe oublié&nbsp;?
            </Link>
            <span className="mx-2 text-gray-300">|</span>
            <Link to="/auth/signup" className="text-nexia-secondary hover:underline">
              Créer un compte client
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">
          ← <Link to="/" className="hover:underline">Retour au site public</Link>
        </p>
      </div>
    </div>
  );
}
