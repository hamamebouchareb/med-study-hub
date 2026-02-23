import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Découverte",
    price: "Gratuit",
    period: "",
    description: "Pour explorer la plateforme",
    features: [
      "Accès limité aux QCMs",
      "1 session par jour",
      "Statistiques de base",
      "Support communautaire",
    ],
    highlighted: false,
    cta: "Commencer",
  },
  {
    name: "Premium",
    price: "1500 DA",
    period: "/mois",
    description: "Pour une préparation sérieuse",
    features: [
      "Accès illimité aux QCMs",
      "Sessions illimitées",
      "Statistiques avancées",
      "Commentaires d'experts",
      "Mode examen chronométré",
      "Support prioritaire",
    ],
    highlighted: true,
    cta: "S'abonner maintenant",
  },
  {
    name: "Annuel",
    price: "12000 DA",
    period: "/an",
    description: "Économisez 33% sur l'année",
    features: [
      "Tout le plan Premium",
      "Accès anticipé aux nouveautés",
      "Cas cliniques exclusifs",
      "Groupe d'étude privé",
      "Certificat de complétion",
    ],
    highlighted: false,
    cta: "Choisir l'annuel",
  },
];

const PricingSection = () => {
  return (
    <section id="abonnement" className="py-24 bg-hero-gradient relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Abonnement
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Choisissez votre plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Paiement via BaridiMob, CCP ou codes d'activation disponibles chez nos partenaires à travers l'Algérie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-6 border ${
                plan.highlighted
                  ? "border-primary/50 bg-card-gradient shadow-glow-primary scale-105"
                  : "border-border/50 bg-card-gradient"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Populaire
                  </span>
                </div>
              )}

              <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-heading font-bold text-accent">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
