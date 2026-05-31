import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackOfficeLayout from '@/components/back-office/BackOfficeLayout';
import { supabase } from '@/integrations/supabase/client';
import { Inbox, FolderOpen, Users, Clock } from 'lucide-react';

interface Stats {
  newContacts: number;
  totalContacts: number;
  internalDocs: number;
  totalUsers: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const supa = supabase as unknown as {
        from: (t: string) => {
          select: (cols: string, opts?: { count?: 'exact'; head?: boolean }) => Promise<{
            count: number | null;
          }>;
        };
      };
      try {
        const [newC, totalC, docs, users] = await Promise.all([
          supa.from('contact_requests').select('id', { count: 'exact', head: true }),
          supa.from('contact_requests').select('id', { count: 'exact', head: true }),
          supa.from('internal_documents').select('id', { count: 'exact', head: true }),
          supa.from('profiles').select('id', { count: 'exact', head: true }),
        ]);
        setStats({
          newContacts: newC.count ?? 0,
          totalContacts: totalC.count ?? 0,
          internalDocs: docs.count ?? 0,
          totalUsers: users.count ?? 0,
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('[admin] stats load failed', e);
      } finally {
        setLoading(false);
      }
    };
    void load();
  }, []);

  return (
    <BackOfficeLayout title="Tableau de bord">
      {loading ? (
        <div className="text-gray-500">Chargement…</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Nouvelles demandes"
            value={stats?.newContacts ?? 0}
            icon={<Clock className="w-5 h-5" />}
            to="/admin/contacts"
          />
          <StatCard
            label="Demandes (total)"
            value={stats?.totalContacts ?? 0}
            icon={<Inbox className="w-5 h-5" />}
            to="/admin/contacts"
          />
          <StatCard
            label="Documents internes"
            value={stats?.internalDocs ?? 0}
            icon={<FolderOpen className="w-5 h-5" />}
            to="/collaborateurs"
          />
          <StatCard
            label="Utilisateurs"
            value={stats?.totalUsers ?? 0}
            icon={<Users className="w-5 h-5" />}
            to="/admin/users"
          />
        </div>
      )}

      <div className="mt-10 bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-2">Premiers pas</h3>
        <ol className="text-sm text-gray-700 space-y-2 list-decimal pl-5">
          <li>Promouvoir votre compte au rôle <code className="bg-gray-100 px-1 rounded">admin</code> via Supabase SQL Editor.</li>
          <li>Importer les premiers documents internes (RH, procédures…).</li>
          <li>Créer les comptes clients (ou les laisser s'inscrire eux-mêmes).</li>
          <li>Vérifier les demandes de contact reçues depuis le formulaire public.</li>
        </ol>
      </div>
    </BackOfficeLayout>
  );
}

function StatCard({
  label,
  value,
  icon,
  to,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="bg-white rounded-xl border border-gray-200 p-5 hover:border-nexia-secondary hover:shadow-sm transition-all"
    >
      <div className="flex items-center justify-between text-gray-500 mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold">{label}</span>
        <span className="text-nexia-secondary">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-nexia-primary">{value}</div>
    </Link>
  );
}
