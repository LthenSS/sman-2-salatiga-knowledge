import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { MainLayout } from "@/components/layout/MainLayout";

// Pages
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Categories from "@/pages/Categories";
import CategoryDetail from "@/pages/CategoryDetail";
import KnowledgeDetail from "@/pages/KnowledgeDetail";
import SchoolProfile from "@/pages/SchoolProfile";
import UserManagement from "@/pages/UserManagement";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster position="top-right" />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              }
            />
            <Route
              path="/categories"
              element={
                <MainLayout>
                  <Categories />
                </MainLayout>
              }
            />
            <Route
              path="/categories/:categoryId"
              element={
                <MainLayout>
                  <CategoryDetail />
                </MainLayout>
              }
            />
            <Route
              path="/knowledge/:id"
              element={
                <MainLayout>
                  <KnowledgeDetail />
                </MainLayout>
              }
            />
            <Route
              path="/school-profile"
              element={
                <MainLayout>
                  <SchoolProfile />
                </MainLayout>
              }
            />
            <Route
              path="/users"
              element={
                <MainLayout>
                  <UserManagement />
                </MainLayout>
              }
            />
            
            {/* Redirects */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
