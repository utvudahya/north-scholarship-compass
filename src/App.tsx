
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Index from "./pages/Index";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import CollegesPage from "./pages/CollegesPage";
import CalculatorPage from "./pages/CalculatorPage";
import NotFound from "./pages/NotFound";

// Create a new query client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Add an AdSense component to handle initialization
const AdSenseInitializer = () => {
  useEffect(() => {
    try {
      // Wait for AdSense to be loaded
      if ((window as any).adsbygoogle) {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      }
    } catch (error) {
      console.error("Error initializing AdSense:", error);
    }
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <AdSenseInitializer />
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/scholarships" element={<ScholarshipsPage />} />
            <Route path="/colleges" element={<CollegesPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
