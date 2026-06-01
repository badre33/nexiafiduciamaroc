import { useEffect, useState } from 'react';
import BackOfficeLayout from '@/components/back-office/BackOfficeLayout';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { FileText, Download } from 'lucide-react';

interface ClientFile {
  id: string;
  title: string;
  description: string | null;
  file_path: string | null;
  file_type: string | null;
  created_at: string;
}

export default function PortailClient() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [files, setFiles] = useState<ClientFile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      setLoading(true);
      const { data, error } = await (supabase as unknown as {
        from: (t: string) => {
          select: (c: string) => {
            eq: (col: string, val: string) => {
              order: (c: string, o: { ascending: boolean }) => Promise<{
                data: ClientFile[] | null;
                error: { message: string } | null;
              }>;
            };
          };
        };
      })
        .from('client_files')
        .select('*')
        .eq('client_id', user.id)
        .order('created_at', { ascending: false });
      if (error) {
        toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      } else {
        setFiles(data ?? []);
      }
      setLoading(false);
    };
    void load();
  }, [user, toast]);

  return (
    <BackOfficeLayout title="Mes documents">
      <p className="text-sm text-gray-600 mb-6">
        Retrouvez ici les documents que Nexia Morocco partage avec vous (factures, rapports,
        contrats…).
      </p>

      {loading ? (
        <p className="text-gray-500">Chargement…</p>
      ) : files.length === 0 ? (
        <div className="bg-white rounded-xl border border-dashed border-gray-300 p-12 text-center text-gray-500">
          <FileText className="w-10 h-10 mx-auto mb-3 text-gray-300" />
          <p>Aucun document partagé pour le moment.</p>
          <p className="text-xs mt-1">Votre conseiller vous informera dès qu'un nouveau document sera disponible.</p>
        </div>
      ) : (
        <ul className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {files.map((f) => (
            <li key={f.id} className="p-4 flex items-center justify-between gap-4 hover:bg-gray-50">
              <div className="min-w-0">
                <p className="font-medium text-gray-900 truncate">{f.title}</p>
                {f.description && <p className="text-sm text-gray-500 truncate">{f.description}</p>}
                <p className="text-xs text-gray-400 mt-1">
                  {f.file_type && <span className="mr-2">{f.file_type}</span>}
                  {new Date(f.created_at).toLocaleDateString('fr-FR')}
                </p>
              </div>
              {f.file_path && (
                <a
                  href={f.file_path}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-nexia-secondary hover:underline whitespace-nowrap"
                >
                  <Download className="w-4 h-4" /> Télécharger
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </BackOfficeLayout>
  );
}
