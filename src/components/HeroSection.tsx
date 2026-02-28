import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";
import StatsCounter from "./StatsCounter";

const disciplines = ["Médecine", "Ingénierie", "Sciences", "Business", "Technologie"];

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-16">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Plateforme éducative algérienne propulsée par l'IA</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Votre écosystème{" "}
              <span className="text-gradient-primary">d'apprentissage</span>{" "}
              intelligent
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-6 leading-relaxed">
              Hamame vous accompagne dans toutes les disciplines avec des QCMs corrigés, des analyses de performance et des outils d'apprentissage adaptatifs.
            </p>

            {/* Discipline tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {disciplines.map((d, i) => (
                <motion.span
                  key={d}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary border border-border/50 text-secondary-foreground"
                >
                  {d}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary text-base px-8"
                >
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary text-base px-8"
                >
                  Se connecter
                </Button>
              </Link>
            </div>

            <StatsCounter />
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75" />
              <img
                src={heroImage}
                alt="Hamame - Écosystème éducatif intelligent"
                className="relative w-full max-w-xl animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
