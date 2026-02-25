import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Statistics from "./pages/dashboard/Statistics";
import CourseTracking from "./pages/dashboard/CourseTracking";
import Library from "./pages/dashboard/Library";
import MindMaps from "./pages/dashboard/MindMaps";
import QCMSessions from "./pages/dashboard/QCMSessions";
import Exams from "./pages/dashboard/Exams";
import Notes from "./pages/dashboard/Notes";
import Notifications from "./pages/dashboard/Notifications";
import Subscription from "./pages/dashboard/Subscription";
import Support from "./pages/dashboard/Support";
import Profile from "./pages/dashboard/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const DashboardRoute = ({ children }: { children: React.ReactNode }) => (
  <ProtectedRoute>{children}</ProtectedRoute>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <SubscriptionProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/dashboard" element={<DashboardRoute><DashboardHome /></DashboardRoute>} />
                <Route path="/dashboard/statistics" element={<DashboardRoute><Statistics /></DashboardRoute>} />
                <Route path="/dashboard/course-tracking" element={<DashboardRoute><CourseTracking /></DashboardRoute>} />
                <Route path="/dashboard/library" element={<DashboardRoute><Library /></DashboardRoute>} />
                <Route path="/dashboard/mindmaps" element={<DashboardRoute><MindMaps /></DashboardRoute>} />
                <Route path="/dashboard/qcm" element={<DashboardRoute><QCMSessions /></DashboardRoute>} />
                <Route path="/dashboard/exams" element={<DashboardRoute><Exams /></DashboardRoute>} />
                <Route path="/dashboard/notes" element={<DashboardRoute><Notes /></DashboardRoute>} />
                <Route path="/dashboard/notifications" element={<DashboardRoute><Notifications /></DashboardRoute>} />
                <Route path="/dashboard/subscription" element={<DashboardRoute><Subscription /></DashboardRoute>} />
                <Route path="/dashboard/support" element={<DashboardRoute><Support /></DashboardRoute>} />
                <Route path="/dashboard/profile" element={<DashboardRoute><Profile /></DashboardRoute>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </SubscriptionProvider>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
