
import React, { useEffect, useRef } from 'react';

interface AdPlaceholderProps {
  adSlot?: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

const AdPlaceholder = ({ adSlot, format = 'auto', className = '' }: AdPlaceholderProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    try {
      if (adRef.current && (window as any).adsbygoogle) {
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
      }
    } catch (error) {
      console.error('Error loading AdSense ad:', error);
    }
  }, []);

  return (
    <div className={`ad-container my-6 overflow-hidden text-center ${className}`}>
      <div className="text-xs text-gray-400 mb-1">Advertisement</div>
      <ins 
        ref={adRef as any}
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
