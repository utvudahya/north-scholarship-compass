
import React, { useEffect, useRef, useState } from 'react';

interface AdPlaceholderProps {
  adSlot?: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

const AdPlaceholder = ({ adSlot, format = 'auto', className = '' }: AdPlaceholderProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  
  useEffect(() => {
    // Only try to load the ad once and if it hasn't been loaded already
    if (isAdLoaded || !adRef.current) return;
    
    try {
      // Check if AdSense is available and the element doesn't already have an ad
      if ((window as any).adsbygoogle && !adRef.current.hasAttribute('data-adsbygoogle-status')) {
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
        setIsAdLoaded(true);
        console.log('AdSense ad loaded successfully');
      }
    } catch (error) {
      console.error('Error loading AdSense ad:', error);
    }
  }, [isAdLoaded]);

  // Generate a unique key to ensure proper re-mounting when needed
  const uniqueKey = `ad-${adSlot}-${format}`;

  return (
    <div className={`ad-container my-6 overflow-hidden text-center ${className}`} key={uniqueKey}>
      <div className="text-xs text-gray-400 mb-1">Advertisement</div>
      <ins 
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2011394333792523"
        data-ad-slot={adSlot || ''}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdPlaceholder;
