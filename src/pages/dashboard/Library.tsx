import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Library = () => (
  <DashboardLayout requiresSubscription>
    <h1 className="font-heading text-2xl font-bold text-foreground">Bibliothèque des Cours</h1>
    <p className="text-muted-foreground mt-2">Explorez tous les cours disponibles.</p>
  </DashboardLayout>
);

export default Library;
