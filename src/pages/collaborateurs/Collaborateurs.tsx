import { useEffect, useState } from 'react';
import BackOfficeLayout from '@/components/back-office/BackOfficeLayout';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { FileText, Plus, ExternalLink } from 'lucide-react';

interface Doc {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  file_path: string | null;
  external_url: string | null;
  created_at: string;
}

export default function Collaborateurs() {
  const { toast } = useToast();
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [externalUrl, setExternalUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data, error } = await (supabase as unknown as {
      from: (t: string) => {
        select: (c: string) => {
          order: (c: string, o: { ascending: boolean }) => Promise<{
            data: Doc[] | null;
            error: { message: string } | null;
          }>;
        };
      };
    })
      .from('internal_documents')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      setDocs(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    void load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await (supabase as unknown as {
      from: (t: string) => { insert: (v: object) => Promise<{ error: { message: string } | null }> };
    })
      .from('internal_documents')
      .insert({
        title,
        description: description || null,
        category: category || null,
        external_url: externalUrl || null,
      });
    setSubmitting(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      return;
    }
    toast({ title: 'Document ajouté' });
    setTitle('');
    setDescription('');
    setCategory('');
    setExternalUrl('');
    setShowForm(false);
    void load();
  };

  return (
    <BackOfficeLayout title="Espace collaborateurs">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-600">
          Documents, procédures et annonces internes — visibles uniquement par les collaborateurs Nexia.
        </p>
        <Button onClick={() => setShowForm((s) => !s)} className="bg-nexia-primary">
          <Plus className="w-4 h-4 mr-2" /> Ajouter
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titre *</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Catégorie</Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="procedures, rh, modeles, annonces…"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="external_url">Lien externe (Drive, SharePoint, etc.)</Label>
            <Input
              id="external_url"
              type="url"
              value={externalUrl}
              onChange={(e) => setExternalUrl(e.target.value)}
              placeholder="https://…"
            />
            <p className="text-xs text-gray-500">
              L'upload de fichier (Supabase Storage) sera ajouté ultérieurement&nbsp;; en attendant,
              collez un lien partagé.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={submitting} className="bg-nexia-primary">
              {submitting ? 'Enregistrement…' : 'Enregistrer'}
            </Button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-gray-500">Chargement…</p>
      ) : docs.length === 0 ? (
        <div className="bg-white rounded-xl border border-dashed border-gray-300 p-12 text-center text-gray-500">
          <FileText className="w-10 h-10 mx-auto mb-3 text-gray-300" />
          <p>Aucun document partagé pour le moment.</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {docs.map((d) => (
            <li key={d.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-gray-900">{d.title}</h3>
                {d.category && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-nexia-secondary/15 text-nexia-primary font-semibold whitespace-nowrap">
                    {d.category}
                  </span>
                )}
              </div>
              {d.description && <p className="text-sm text-gray-600 mb-3">{d.description}</p>}
              {d.external_url && (
                <a
                  href={d.external_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-nexia-secondary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" /> Ouvrir
                </a>
              )}
              <p className="text-xs text-gray-400 mt-3">
                {new Date(d.created_at).toLocaleDateString('fr-FR')}
              </p>
            </li>
          ))}
        </ul>
      )}
    </BackOfficeLayout>
  );
}
