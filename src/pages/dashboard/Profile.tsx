import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  const fullName = user?.user_metadata?.full_name || "Étudiant";

  return (
    <DashboardLayout>
      <div className="max-w-2xl">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-6">Mon Profil</h1>
        <div className="bg-card border border-border/50 rounded-2xl p-6 space-y-4">
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Nom complet</label>
            <p className="text-foreground font-medium">{fullName}</p>
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
            <p className="text-foreground font-medium">{user?.email}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
