import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useState } from 'react';
import IntroSplash from './components/IntroSplash';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <TooltipProvider>
      <Sonner theme="dark" />
      {showSplash ? (
        <IntroSplash onComplete={() => setShowSplash(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </TooltipProvider>
  );
};

export default App;