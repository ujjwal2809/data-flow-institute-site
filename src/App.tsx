
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Campus from "./pages/Campus";
import Placements from "./pages/Placements";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MumbaiCourse from "./pages/MumbaiCourse";
import ThaneCourse from "./pages/ThaneCourse";
import NaviMumbaiCourse from "./pages/NaviMumbaiCourse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/mumbai" element={<MumbaiCourse />} />
          <Route path="/courses/thane" element={<ThaneCourse />} />
          <Route path="/courses/navi-mumbai" element={<NaviMumbaiCourse />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
