import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

const SubscriptionLock = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative max-w-md w-full mx-4"
      >
        {/* Glow background */}
        <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-3xl" />

        <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-10 text-center shadow-card">
          {/* Lock icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-muted/50 flex items-center justify-center">
            <Lock className="w-10 h-10 text-muted-foreground" />
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
            Vous n'êtes pas encore abonné 😔
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-xs mx-auto">
            Accédez à tous les modules, QCM et outils de révision avec un abonnement premium.
          </p>

          <Button
            size="lg"
            onClick={() => navigate("/dashboard/subscription")}
            className="rounded-xl px-8 font-heading font-bold shadow-glow-primary hover:scale-105 transition-transform"
          >
            Voir les abonnements
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default SubscriptionLock;
