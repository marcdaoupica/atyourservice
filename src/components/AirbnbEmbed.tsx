import { useEffect, useRef, useCallback } from "react";

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
  const scriptLoadedRef = useRef(false);

  const renderEmbeds = useCallback(() => {
    if (window.airbnbEmbed && embedRef.current) {
      try {
        window.airbnbEmbed.renderEmbeds();
      } catch (error) {
        console.log('Airbnb embed render attempt:', error);
        // Fallback: try again after a short delay
        setTimeout(() => {
          if (window.airbnbEmbed) {
            window.airbnbEmbed.renderEmbeds();
          }
        }, 500);
      }
    }
  }, []);

  const loadAirbnbScript = useCallback(() => {
    if (scriptLoadedRef.current) {
      renderEmbeds();
      return;
    }

    const existingScript = document.querySelector('script[src="https://www.airbnb.com/embeddable/airbnb_jssdk"]');
    
    if (existingScript) {
      scriptLoadedRef.current = true;
      renderEmbeds();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk';
    script.async = true;
    
    script.onload = () => {
      scriptLoadedRef.current = true;
      // Wait a bit for the SDK to initialize
      setTimeout(renderEmbeds, 500);
    };
    
    document.body.appendChild(script);
  }, [renderEmbeds]);

  useEffect(() => {
    // Load script and render embeds
    loadAirbnbScript();

    // Set up an interval to periodically try to render embeds
    // This helps with cases where the SDK doesn't initially work
    const interval = setInterval(() => {
      if (window.airbnbEmbed && embedRef.current) {
        const hasContent = embedRef.current.querySelector('iframe');
        if (!hasContent) {
          renderEmbeds();
        }
      }
    }, 1000);

    // Cleanup interval after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [listingId, loadAirbnbScript, renderEmbeds]);

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