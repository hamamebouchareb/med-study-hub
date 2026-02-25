import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { BookOpen, BarChart3, Brain, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const quickActions = [
  { label: "Nouvelle Session QCM", icon: HelpCircle, path: "/dashboard/qcm", color: "bg-primary/10 text-primary" },
  { label: "Bibliothèque", icon: BookOpen, path: "/dashboard/library", color: "bg-accent/10 text-accent" },
  { label: "Statistiques", icon: BarChart3, path: "/dashboard/statistics", color: "bg-primary/10 text-primary" },
  { label: "Mind Maps", icon: Brain, path: "/dashboard/mindmaps", color: "bg-accent/10 text-accent" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <div className="max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-1">
            Bienvenue 👋
          </h1>
          <p className="text-muted-foreground mb-8">
            Commencez votre session de révision dès maintenant.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {quickActions.map((action) => (
            <motion.div key={action.path} variants={item}>
              <Link
                to={action.path}
                className="group block bg-card border border-border/50 rounded-2xl p-5 hover:border-primary/30 hover:shadow-glow-primary transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground">
                  {action.label}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
