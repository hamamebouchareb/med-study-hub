import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, BookOpen, BarChart3, User } from "lucide-react";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const fullName = user?.user_metadata?.full_name || "Étudiant";

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-heading text-lg font-bold text-primary-foreground">H</span>
            </div>
            <span className="font-heading text-xl font-bold text-foreground">Hamame</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              Bonjour, <span className="text-foreground font-medium">{fullName}</span>
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
          Bienvenue, {fullName} 👋
        </h1>
        <p className="text-muted-foreground mb-8">
          Commencez votre session de révision dès maintenant.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">
              Nouvelle Session
            </h3>
            <p className="text-muted-foreground text-sm">
              Lancez un quiz personnalisé avec les modules de votre choix.
            </p>
          </div>

          <div className="bg-card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">
              Mes Statistiques
            </h3>
            <p className="text-muted-foreground text-sm">
              Consultez vos performances et identifiez vos points faibles.
            </p>
          </div>

          <div className="bg-card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">
              Mon Profil
            </h3>
            <p className="text-muted-foreground text-sm">
              Gérez vos informations personnelles et votre abonnement.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
