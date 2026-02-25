import { ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionLock from "./SubscriptionLock";

interface DashboardLayoutProps {
  children: ReactNode;
  requiresSubscription?: boolean;
}

const DashboardLayout = ({ children, requiresSubscription = false }: DashboardLayoutProps) => {
  const { isSubscribed } = useSubscription();

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      {/* Main area offset by sidebar */}
      <div className="ml-[72px] md:ml-[260px] transition-all duration-300">
        <DashboardTopbar />
        <main className="p-6 lg:p-8">
          {requiresSubscription && !isSubscribed ? (
            <SubscriptionLock />
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
