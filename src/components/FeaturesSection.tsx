import { motion } from "framer-motion";
import { Settings2, BarChart3, Palette, BookOpen, Clock, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Settings2,
    title: "Sessions Personnalisées",
    description:
      "Choisissez le type de quiz, le nombre de questions, la durée et le mode de répétition selon vos préférences.",
    highlights: ["Filtrage par module", "Durée flexible", "Mode répétition"],
  },
  {
    icon: BarChart3,
    title: "Statistiques Intelligentes",
    description:
      "Évaluez vos performances après chaque session avec des rapports détaillés par module et par cours.",
    highlights: ["Taux de réussite", "Points faibles", "Suivi de progression"],
  },
  {
    icon: BookOpen,
    title: "QCMs Corrigés & Commentés",
    description:
      "Chaque question inclut une correction détaillée et un commentaire d'experts médicaux pour une compréhension approfondie.",
    highlights: ["Corrections détaillées", "Commentaires d'experts", "Cas cliniques"],
  },
  {
    icon: Palette,
    title: "Thèmes & Confort Visuel",
    description:
      "Personnalisez l'interface avec plusieurs thèmes dont le mode sombre pour réduire la fatigue oculaire.",
    highlights: ["Mode sombre", "Thèmes variés", "Interface adaptative"],
  },
  {
    icon: Clock,
    title: "Examens Chronométrés",
    description:
      "Simulez les conditions réelles d'examen avec des sessions chronométrées et des résultats instantanés.",
    highlights: ["Chronomètre intégré", "Conditions réelles", "Résultats instantanés"],
  },
  {
    icon: RefreshCw,
    title: "Multi-Plateforme",
    description:
      "Accédez à Hamame depuis n'importe quel appareil — ordinateur, tablette ou smartphone.",
    highlights: ["Responsive", "Synchronisation", "Accès partout"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const FeaturesSection = () => {
  return (
    <section id="fonctionnalites" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            À la découverte de nouveaux modules !
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Fonctionnalités
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hamame se distingue par son engagement envers l'efficacité de l'apprentissage médical en vous offrant un ensemble de fonctionnalités puissantes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
