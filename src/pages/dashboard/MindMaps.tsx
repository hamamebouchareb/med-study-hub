import DashboardLayout from "@/components/dashboard/DashboardLayout";

const MindMaps = () => (
  <DashboardLayout requiresSubscription>
    <h1 className="font-heading text-2xl font-bold text-foreground">Mind Maps</h1>
    <p className="text-muted-foreground mt-2">Visualisez vos connaissances en cartes mentales.</p>
  </DashboardLayout>
);

export default MindMaps;
