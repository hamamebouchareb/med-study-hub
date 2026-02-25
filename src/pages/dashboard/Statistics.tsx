import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Statistics = () => (
  <DashboardLayout requiresSubscription>
    <h1 className="font-heading text-2xl font-bold text-foreground">Statistiques</h1>
    <p className="text-muted-foreground mt-2">Vos performances et analyses détaillées.</p>
  </DashboardLayout>
);

export default Statistics;
