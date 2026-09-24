import { useState } from 'react';
import PlotArt from './PlotArt';

interface SmartImageProps {
  src?: string;
  alt: string;
  plotId?: string;
  sold?: boolean;
  className?: string;
}

export default function SmartImage({ src, alt, plotId, sold, className }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  if (!src) {
    return <PlotArt id={plotId || alt} sold={sold} className={className} />;
  }

  return (
    <>
      {!loaded && <div className={`skel ${className || ''}`} style={{ position: 'absolute', inset: 0 }} />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={className}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
      />
    </>
  );
}
