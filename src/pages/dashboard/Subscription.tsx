import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Gratuit",
    price: "0 DA",
    period: "/mois",
    features: ["Accès limité aux QCM", "5 sessions/mois", "Statistiques de base"],
    current: true,
  },
  {
    name: "Premium",
    price: "1500 DA",
    period: "/mois",
    features: ["QCM illimités", "Tous les modules", "Statistiques avancées", "Mind Maps", "Examens blancs", "Support prioritaire"],
    popular: true,
  },
  {
    name: "Annuel",
    price: "12000 DA",
    period: "/an",
    features: ["Tout le Premium", "2 mois offerts", "Accès anticipé aux nouveautés"],
  },
];

const Subscription = () => {
  const { isSubscribed, setIsSubscribed } = useSubscription();

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Abonnement</h1>
        <p className="text-muted-foreground mb-8">Choisissez la formule qui vous convient.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card border rounded-2xl p-6 ${
                plan.popular ? "border-primary shadow-glow-primary" : "border-border/50"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Populaire
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-foreground">{plan.name}</h3>
              <div className="mt-2 mb-4">
                <span className="font-heading text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full rounded-xl"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => plan.popular && setIsSubscribed(!isSubscribed)}
              >
                {plan.current ? "Plan actuel" : isSubscribed && plan.popular ? "Annuler" : "Choisir"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Subscription;
