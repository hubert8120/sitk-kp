import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion, useInView } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// SITK Koszalin coordinates: ul. Kupiecka 5, 75-671 Koszalin
const SITK_COORDINATES: [number, number] = [16.1826, 54.1948];

export const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: SITK_COORDINATES,
        zoom: 15,
        pitch: 45,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker for SITK location
      const markerEl = document.createElement('div');
      markerEl.className = 'sitk-marker';
      markerEl.innerHTML = `
        <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-primary-foreground animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      `;

      new mapboxgl.Marker(markerEl)
        .setLngLat(SITK_COORDINATES)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="p-3">
              <h3 class="font-bold text-foreground">SITK RP Oddział Koszalin</h3>
              <p class="text-sm text-muted-foreground">ul. Kupiecka 5<br/>75-671 Koszalin</p>
            </div>
          `)
        )
        .addTo(map.current);

      map.current.on('load', () => {
        setIsMapLoaded(true);
        setShowTokenInput(false);
      });

      map.current.on('error', () => {
        setShowTokenInput(true);
        setIsMapLoaded(false);
      });
    } catch (error) {
      setShowTokenInput(true);
      setIsMapLoaded(false);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      localStorage.setItem('mapbox_token', mapboxToken.trim());
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      initializeMap(savedToken);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${SITK_COORDINATES[1]},${SITK_COORDINATES[0]}`,
      '_blank'
    );
  };

  return (
    <section ref={sectionRef} className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium">
            Lokalizacja
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-4">
            Znajdź nas na mapie
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nasza siedziba znajduje się w centrum Koszalina przy ul. Kupieckiej 5
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {showTokenInput && !isMapLoaded ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2">Konfiguracja mapy</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Aby wyświetlić mapę, wprowadź swój publiczny token Mapbox.
                <br />
                <a 
                  href="https://mapbox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Pobierz token z mapbox.com
                </a>
              </p>
              <form onSubmit={handleTokenSubmit} className="flex gap-2 max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="pk.eyJ1Ijo..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">Załaduj mapę</Button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm mb-4">Lub użyj Google Maps:</p>
                <Button variant="outline" onClick={openGoogleMaps}>
                  <Navigation className="w-4 h-4 mr-2" />
                  Otwórz w Google Maps
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div 
                ref={mapContainer} 
                className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg overflow-hidden"
              />
              <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border max-w-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">SITK RP Oddział Koszalin</h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      ul. Kupiecka 5<br />
                      75-671 Koszalin
                    </p>
                    <Button 
                      variant="link" 
                      size="sm" 
                      className="p-0 h-auto mt-2 text-xs"
                      onClick={openGoogleMaps}
                    >
                      <Navigation className="w-3 h-3 mr-1" />
                      Nawiguj
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};
