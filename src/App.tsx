import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import AOS from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient();

// small wrapper to refresh AOS on route change
const RouteChangeHandler = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,       // animation duration in ms
      easing: "ease-in-out",
      once: true,          // only animate once per element
      offset: 80,          // how far before element comes into view
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteChangeHandler />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
