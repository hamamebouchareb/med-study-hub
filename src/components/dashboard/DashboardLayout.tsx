import { ReactNode, useState } from "react";
import DashboardSidebar, { MobileSidebar } from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionLock from "./SubscriptionLock";

interface DashboardLayoutProps {
  children: ReactNode;
  requiresSubscription?: boolean;
}

const DashboardLayout = ({ children, requiresSubscription = false }: DashboardLayoutProps) => {
  const { isSubscribed } = useSubscription();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <DashboardSidebar />
      {/* Mobile sidebar */}
      <MobileSidebar open={mobileOpen} onOpenChange={setMobileOpen} />

      {/* Main area: no left margin on mobile, offset on md+ */}
      <div className="md:ml-[260px] transition-all duration-300">
        <DashboardTopbar onMenuClick={() => setMobileOpen(true)} />
        <main className="p-4 md:p-6 lg:p-8">
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
