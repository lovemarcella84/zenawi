import { useState, type CSSProperties } from 'react';
import type { Property } from '../data/properties';
import { getPropertyGallery } from '../data/properties';
import Reveal from './Reveal';
import SmartImage from './SmartImage';
import Typewriter from './Typewriter';

function GalleryImage({
  src, alt, caption, plotId, sold, compact = false,
}: { src: string; alt: string; caption: string; plotId: string; sold: boolean; compact?: boolean }) {
  if (src.startsWith('http')) {
    return <SmartImage src={src} alt={alt} plotId={plotId} sold={sold} />;
  }
  return <GalleryTile src={src} alt={alt} caption={caption} compact={compact} />;
}

function GalleryTile({ src, alt, caption, compact = false }: { src: string; alt: string; caption: string; compact?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="gallery-placeholder">
        <div className="gallery-placeholder-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z" /></svg>
        </div>
        {!compact && <p className="gallery-placeholder-label">Image coming soon</p>}
        {compact && <small>{caption}</small>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="gallery-img"
    />
  );
}

export default function PropertyGallery({ property }: { property: Property }) {
  const images = getPropertyGallery(property);
  const [active, setActive] = useState(0);
  const sold = property.status === 'sold';

  return (
    <section className="section-alt property-gallery-section">
      <div className="container">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow-line">PROJECT VIEWS</div>
          <Typewriter as="h2" text="See the plot from different angles." />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="gallery-main">
            <GalleryImage
              src={images[active]}
              alt={`${property.name} view ${active + 1}`}
              caption={`View ${active + 1}`}
              plotId={`${property.id}-gallery-${active}`}
              sold={sold}
            />
          </div>
        </Reveal>

        <div className="gallery-thumbs">
          {images.map((src, i) => (
            <Reveal key={src + i} delay={0.08 + i * 0.1} variant="slide" style={{ '--slide-index': i } as CSSProperties}>
              <button
                type="button"
                className={`gallery-thumb${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show view ${i + 1}`}
              >
                <GalleryImage src={src} alt="" caption={`View ${i + 1}`} plotId={`${property.id}-thumb-${i}`} sold={sold} compact />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}