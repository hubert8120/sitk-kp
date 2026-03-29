import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Realizacje from "./pages/Realizacje";
import Rodo from "./pages/Rodo";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/szkolenia" element={<Training />} />
          <Route path="/aktualnosci" element={<News />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/czlonkostwo" element={<Membership />} />
          <Route path="/realizacje/modernizacja-drog" element={<Realizacje />} />
          <Route path="/rodo" element={<Rodo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
