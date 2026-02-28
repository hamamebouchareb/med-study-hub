import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Target,
  Flame,
  BookOpen,
  Clock,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  RadialBarChart,
  RadialBar,
} from "recharts";

/* ─── Mock data ─── */
const weeklyProgression = [
  { jour: "Lun", correct: 18, incorrect: 7 },
  { jour: "Mar", correct: 24, incorrect: 6 },
  { jour: "Mer", correct: 15, incorrect: 10 },
  { jour: "Jeu", correct: 30, incorrect: 5 },
  { jour: "Ven", correct: 22, incorrect: 8 },
  { jour: "Sam", correct: 35, incorrect: 4 },
  { jour: "Dim", correct: 28, incorrect: 6 },
];

const modulePerformance = [
  { module: "Anatomie", taux: 82 },
  { module: "Biochimie", taux: 68 },
  { module: "Physiologie", taux: 91 },
  { module: "Histologie", taux: 75 },
  { module: "Pharmacologie", taux: 60 },
  { module: "Microbiologie", taux: 85 },
];

const difficultyBreakdown = [
  { name: "Facile", value: 120, fill: "hsl(var(--primary))" },
  { name: "Moyen", value: 85, fill: "hsl(var(--accent))" },
  { name: "Difficile", value: 45, fill: "hsl(var(--destructive))" },
];

const monthlyTrend = [
  { mois: "Sep", taux: 55 },
  { mois: "Oct", taux: 62 },
  { mois: "Nov", taux: 68 },
  { mois: "Déc", taux: 72 },
  { mois: "Jan", taux: 78 },
  { mois: "Fév", taux: 83 },
];

const summaryCards = [
  {
    label: "QCMs complétés",
    value: "1 248",
    change: "+86 cette semaine",
    icon: BarChart3,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "Taux de réussite",
    value: "76%",
    change: "+4% vs. mois dernier",
    icon: Target,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    label: "Temps d'étude",
    value: "42h",
    change: "6h cette semaine",
    icon: Clock,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "Série en cours",
    value: "12 jours",
    change: "Record : 18 jours",
    icon: Flame,
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

/* ─── Custom tooltip ─── */
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border/50 rounded-xl px-4 py-3 shadow-lg">
      <p className="text-sm font-medium text-foreground mb-1">{label}</p>
      {payload.map((entry: any, i: number) => (
        <p key={i} className="text-xs text-muted-foreground">
          <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: entry.color }} />
          {entry.name}: <span className="font-semibold text-foreground">{entry.value}</span>
        </p>
      ))}
    </div>
  );
};

/* ─── Chart card wrapper ─── */
const ChartCard = ({
  title,
  icon: Icon,
  children,
  className = "",
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={item}
    className={`bg-card border border-border/50 rounded-2xl p-5 md:p-6 ${className}`}
  >
    <div className="flex items-center gap-2 mb-5">
      <Icon className="w-5 h-5 text-primary" />
      <h3 className="font-heading text-sm font-bold text-foreground">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const Statistics = () => (
  <DashboardLayout requiresSubscription>
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-6xl space-y-6"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
          Statistiques
        </h1>
        <p className="text-muted-foreground mt-1">
          Suivez vos performances et identifiez vos axes d'amélioration.
        </p>
      </motion.div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card) => (
          <motion.div
            key={card.label}
            variants={item}
            className="bg-card border border-border/50 rounded-2xl p-4 md:p-5 hover:border-primary/30 transition-colors"
          >
            <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-3`}>
              <card.icon className={`w-5 h-5 ${card.color}`} />
            </div>
            <p className="font-heading text-2xl font-bold text-foreground">
              {card.value}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">{card.label}</p>
            <p className="text-xs text-primary mt-1">{card.change}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts row 1 */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Weekly progression */}
        <ChartCard title="Progression hebdomadaire" icon={TrendingUp} className="lg:col-span-2">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyProgression} barGap={2}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="jour" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="correct" name="Correctes" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                <Bar dataKey="incorrect" name="Incorrectes" fill="hsl(var(--destructive))" radius={[6, 6, 0, 0]} opacity={0.7} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Difficulty distribution */}
        <ChartCard title="Répartition par difficulté" icon={Target}>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={difficultyBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {difficultyBreakdown.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  formatter={(value: string) => (
                    <span className="text-xs text-muted-foreground">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Charts row 2 */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Module performance */}
        <ChartCard title="Performance par module" icon={BookOpen}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modulePerformance} layout="vertical" barSize={18}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} unit="%" />
                <YAxis dataKey="module" type="category" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} width={100} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="taux" name="Taux de réussite" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Monthly trend */}
        <ChartCard title="Évolution mensuelle" icon={TrendingUp}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="mois" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis domain={[40, 100]} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="taux"
                  name="Taux de réussite"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "hsl(var(--primary))", strokeWidth: 2, stroke: "hsl(var(--card))" }}
                  activeDot={{ r: 7, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </motion.div>
  </DashboardLayout>
);

export default Statistics;
