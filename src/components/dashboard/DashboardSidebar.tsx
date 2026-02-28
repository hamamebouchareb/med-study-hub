import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  BarChart3,
  TrendingUp,
  BookOpen,
  Brain,
  HelpCircle,
  ClipboardList,
  StickyNote,
  Bell,
  CreditCard,
  LifeBuoy,
  UserCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import hamameLogo from "@/assets/hamame-logo.png";

const menuItems = [
  { label: "Accueil", icon: Home, path: "/dashboard" },
  { label: "Statistiques", icon: BarChart3, path: "/dashboard/statistics" },
  { label: "Suivi Cours", icon: TrendingUp, path: "/dashboard/course-tracking" },
  { label: "Bibliothèque", icon: BookOpen, path: "/dashboard/library" },
  { label: "Mind Maps", icon: Brain, path: "/dashboard/mindmaps" },
  { label: "Sessions QCM", icon: HelpCircle, path: "/dashboard/qcm" },
  { label: "Examens", icon: ClipboardList, path: "/dashboard/exams" },
  { label: "Notes", icon: StickyNote, path: "/dashboard/notes" },
  { label: "Notifications", icon: Bell, path: "/dashboard/notifications" },
  { label: "Abonnement", icon: CreditCard, path: "/dashboard/subscription" },
  { label: "Support", icon: LifeBuoy, path: "/dashboard/support" },
  { label: "Profil", icon: UserCircle, path: "/dashboard/profile" },
];

interface SidebarNavProps {
  collapsed?: boolean;
  onNavigate?: () => void;
}

const SidebarNav = ({ collapsed = false, onNavigate }: SidebarNavProps) => {
  const location = useLocation();

  return (
    <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            className={cn(
              "relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute inset-0 rounded-xl bg-primary shadow-glow-primary"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <item.icon className="relative z-10 w-5 h-5 shrink-0" />
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="relative z-10 whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        );
      })}
    </nav>
  );
};

const SidebarLogo = ({ collapsed = false }: { collapsed?: boolean }) => (
  <div className="flex items-center gap-2 h-16 px-4 border-b border-border/50 shrink-0">
    <img src={hamameLogo} alt="Hamame" className="w-9 h-9 rounded-xl object-cover shrink-0" />
    <AnimatePresence>
      {!collapsed && (
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
          className="font-heading text-xl font-bold text-foreground whitespace-nowrap overflow-hidden"
        >
          Hamame
        </motion.span>
      )}
    </AnimatePresence>
  </div>
);

/* ─── Mobile Sidebar (Sheet) ─── */
export const MobileSidebar = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[280px] p-0 bg-card border-r border-border/50">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between pr-2">
            <SidebarLogo />
            <button
              onClick={() => onOpenChange(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <SidebarNav onNavigate={() => onOpenChange(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

/* ─── Desktop Sidebar ─── */
const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="hidden md:flex fixed left-0 top-0 bottom-0 z-40 flex-col bg-card border-r border-border/50 overflow-hidden"
    >
      <SidebarLogo collapsed={collapsed} />
      <SidebarNav collapsed={collapsed} />

      {/* Collapse toggle */}
      <div className="px-2 pb-4 shrink-0">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-full h-10 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
    </motion.aside>
  );
};

export default DashboardSidebar;
