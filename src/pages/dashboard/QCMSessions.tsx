import DashboardLayout from "@/components/dashboard/DashboardLayout";

const QCMSessions = () => (
  <DashboardLayout requiresSubscription>
    <h1 className="font-heading text-2xl font-bold text-foreground">Sessions QCM</h1>
    <p className="text-muted-foreground mt-2">Lancez un quiz personnalisé.</p>
  </DashboardLayout>
);

export default QCMSessions;
