import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, ArrowLeft } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().trim().email("Adresse e-mail invalide").max(255);

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(result.data, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      toast.error(error.message);
    } else {
      setSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-heading text-xl font-bold text-primary-foreground">H</span>
          </div>
          <span className="font-heading text-2xl font-bold text-foreground">Hamame</span>
        </Link>

        <div className="bg-card-gradient border border-border/50 rounded-2xl p-8 shadow-card">
          {sent ? (
            <div className="text-center">
              <h1 className="font-heading text-2xl font-bold text-foreground mb-2">E-mail envoyé !</h1>
              <p className="text-muted-foreground text-sm mb-6">
                Consultez votre boîte de réception pour réinitialiser votre mot de passe.
              </p>
              <Link to="/login">
                <Button variant="outline" className="border-border text-foreground">
                  <ArrowLeft className="mr-2 w-4 h-4" /> Retour à la connexion
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <h1 className="font-heading text-2xl font-bold text-foreground text-center mb-2">
                Mot de passe oublié
              </h1>
              <p className="text-muted-foreground text-center text-sm mb-6">
                Entrez votre e-mail pour recevoir un lien de réinitialisation.
              </p>
              <form onSubmit={handleReset} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                      required
                      maxLength={255}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {loading ? "Envoi..." : "Envoyer le lien"}
                </Button>
              </form>
              <p className="text-center text-sm text-muted-foreground mt-6">
                <Link to="/login" className="text-primary hover:underline font-medium">
                  <ArrowLeft className="inline w-3 h-3 mr-1" />Retour à la connexion
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
