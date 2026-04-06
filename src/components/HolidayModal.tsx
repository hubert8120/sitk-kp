import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import easterImage from "@/assets/wielkanoc.jpg";
import { X } from "lucide-react";

export const HolidayModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the modal has already been shown in this session
    const hasBeenShown = sessionStorage.getItem("easterModalShown");
    
    if (!hasBeenShown) {
      // Small delay for better UX and ensuring the page has loaded
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("easterModalShown", "true");
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[90vw] md:max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
        {/* Title is required for accessibility but hidden visually if not needed */}
        <DialogTitle className="sr-only">Życzenia Wielkanocne SITK RP Koszalin</DialogTitle>
        
        <div className="relative group w-full">
          {/* Premium Glow Effect */}
          <div className="absolute -inset-4 bg-gold/20 rounded-[2.5rem] blur-2xl opacity-50 transition-opacity duration-1000 group-hover:opacity-75" />
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-navy/90 backdrop-blur-sm">
            <img 
              src={easterImage} 
              alt="Życzenia Wielkanocne" 
              className="w-full h-auto max-h-[85vh] object-contain block mx-auto"
            />
            
            {/* Custom Close Button for easier mobile access */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-300 backdrop-blur-md border border-white/10 z-50"
              aria-label="Zamknij"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
