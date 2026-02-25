import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Timer, CalendarDays, Target } from "lucide-react";

type StudyTask = {
  id: string;
  title: string;
  module: "Cardio" | "Neuro" | "Pneumo" | "Pharma";
  minutes: number;
  completed: boolean;
};

const initialTasks: StudyTask[] = [
  { id: "1", title: "QCM - Insuffisance cardiaque", module: "Cardio", minutes: 35, completed: true },
  { id: "2", title: "Mind map - AVC ischémique", module: "Neuro", minutes: 30, completed: false },
  { id: "3", title: "Révision flashcards - Antibiotiques", module: "Pharma", minutes: 20, completed: false },
  { id: "4", title: "Cas clinique - Asthme aigu", module: "Pneumo", minutes: 25, completed: false },
];

const upcomingDeadlines = [
  { title: "Examen blanc Cardio", date: "Jeudi 14 Mars", module: "Cardio" },
  { title: "Contrôle continu Neuro", date: "Lundi 18 Mars", module: "Neuro" },
  { title: "Session Pharmaco", date: "Mercredi 20 Mars", module: "Pharma" },
];

const moduleOptions = ["Tous", "Cardio", "Neuro", "Pneumo", "Pharma"] as const;

const StudyPlanner = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [moduleFilter, setModuleFilter] = useState<(typeof moduleOptions)[number]>("Tous");
  const [selectedFocus, setSelectedFocus] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(selectedFocus * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setSecondsLeft(selectedFocus * 60);
    setIsRunning(false);
  }, [selectedFocus]);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          setIsRunning(false);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const filteredTasks = useMemo(
    () => tasks.filter((task) => moduleFilter === "Tous" || task.module === moduleFilter),
    [moduleFilter, tasks]
  );

  const stats = useMemo(() => {
    const completedCount = filteredTasks.filter((task) => task.completed).length;
    const totalMinutes = filteredTasks.reduce((sum, task) => sum + task.minutes, 0);
    const completedMinutes = filteredTasks
      .filter((task) => task.completed)
      .reduce((sum, task) => sum + task.minutes, 0);

    const completionRate = filteredTasks.length
      ? Math.round((completedCount / filteredTasks.length) * 100)
      : 0;

    return { completedCount, totalMinutes, completedMinutes, completionRate };
  }, [filteredTasks]);

  const toggleTask = (id: string) => {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl space-y-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-1">Planificateur d'étude</h1>
          <p className="text-muted-foreground">
            Organisez vos sessions, suivez vos objectifs journaliers et gardez le rythme.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <Card className="bg-card border-border/60">
            <CardHeader className="pb-3">
              <CardDescription>Progression du jour</CardDescription>
              <CardTitle>{stats.completionRate}% terminé</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Progress value={stats.completionRate} className="h-2" />
              <p className="text-sm text-muted-foreground">
                {stats.completedCount}/{filteredTasks.length} tâches validées
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/60">
            <CardHeader className="pb-3">
              <CardDescription>Temps d'étude</CardDescription>
              <CardTitle>{stats.completedMinutes} min</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                sur {stats.totalMinutes} min planifiées aujourd'hui.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/60">
            <CardHeader className="pb-3">
              <CardDescription>Filtrer par module</CardDescription>
              <CardTitle className="text-lg">Priorité de révision</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={moduleFilter} onValueChange={(value) => setModuleFilter(value as (typeof moduleOptions)[number])}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un module" />
                </SelectTrigger>
                <SelectContent>
                  {moduleOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Checklist intelligente
              </CardTitle>
              <CardDescription>Cochez vos tâches pour mettre à jour votre progression.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between rounded-xl border border-border/60 p-3"
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`task-${task.id}`}
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <label htmlFor={`task-${task.id}`} className="text-sm font-medium cursor-pointer">
                      {task.title}
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{task.module}</Badge>
                    <span className="text-xs text-muted-foreground">{task.minutes} min</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-primary" />
                  Focus Timer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-heading font-bold text-center">{formatTime(secondsLeft)}</div>
                <div className="grid grid-cols-3 gap-2">
                  {[25, 45, 60].map((preset) => (
                    <Button
                      key={preset}
                      variant={selectedFocus === preset ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFocus(preset)}
                    >
                      {preset}m
                    </Button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button onClick={() => setIsRunning((current) => !current)}>
                    {isRunning ? "Pause" : "Démarrer"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSecondsLeft(selectedFocus * 60);
                      setIsRunning(false);
                    }}
                  >
                    Réinitialiser
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  Prochaines échéances
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingDeadlines.map((deadline) => (
                  <div key={deadline.title} className="rounded-xl border border-border/60 p-3">
                    <p className="font-medium text-sm">{deadline.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{deadline.date}</p>
                    <Badge variant="outline" className="mt-2">
                      {deadline.module}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudyPlanner;
