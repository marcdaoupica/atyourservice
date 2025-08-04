import { useEffect, useRef } from "react";

interface AirbnbEmbedProps {
  listingId: string;
  width?: number;
  height?: number;
  hidePrice?: boolean;
}

export const AirbnbEmbed = ({ 
  listingId, 
  width = 450, 
  height = 300, 
  hidePrice = true 
}: AirbnbEmbedProps) => {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Airbnb SDK script if not already loaded
    const existingScript = document.querySelector('script[src="https://www.airbnb.com/embeddable/airbnb_jssdk"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk';
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize embed after script loads
    const initEmbed = () => {
      if (window.airbnbEmbed && embedRef.current) {
        window.airbnbEmbed.renderEmbeds();
      }
    };

    if (existingScript) {
      initEmbed();
    } else {
      const timer = setTimeout(initEmbed, 1000);
      return () => clearTimeout(timer);
    }
  }, [listingId]);

  const airbnbUrl = `https://www.airbnb.com/rooms/${listingId}?guests=1&adults=1&s=66&source=embed_widget`;

  return (
    <div
      ref={embedRef}
      className="airbnb-embed-frame"
      data-id={listingId}
      data-view="home"
      data-hide-price={hidePrice}
      style={{ width: `${width}px`, height: `${height}px`, margin: 'auto' }}
    >
      <a href={airbnbUrl}>View On Airbnb</a>
      <a href={airbnbUrl} rel="nofollow">
        View this listing on Airbnb
      </a>
    </div>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    airbnbEmbed?: {
      renderEmbeds: () => void;
    };
  }
}