import DashboardLayout from "@/components/dashboard/DashboardLayout";

const CourseTracking = () => (
  <DashboardLayout requiresSubscription>
    <h1 className="font-heading text-2xl font-bold text-foreground">Suivi des Cours</h1>
    <p className="text-muted-foreground mt-2">Suivez votre progression dans chaque module.</p>
  </DashboardLayout>
);

export default CourseTracking;
