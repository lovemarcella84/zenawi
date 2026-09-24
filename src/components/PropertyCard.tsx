import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Property } from '../data/properties';
import { waLink, CONTACT } from '../data/properties';
import SmartImage from './SmartImage';
import Reveal from './Reveal';

export default function PropertyCard({ property, delay = 0, index = 0 }: { property: Property; delay?: number; index?: number }) {
  const sold = property.status === 'sold';
  return (
    <Reveal delay={delay} variant="slide" as="article" className="pcard" style={{ '--slide-index': index } as CSSProperties}>
      <div className="pcard-media">
        <SmartImage src={property.image} alt={property.name} plotId={property.id} sold={sold} className="pcard-media-img" />
        <span className={`pcard-tag${sold ? ' sold' : ''}`}>{sold ? 'SOLD OUT' : 'AVAILABLE'}</span>
      </div>
      <div className="pcard-body">
        <div className="pcard-price">{property.price}</div>
        <div className="pcard-loc">{property.location}</div>
        <h4>{property.name}</h4>
        <p className="pcard-size">{property.size}</p>
        <div className="pcard-contact-row">
          <a
            className="pcard-icon-btn pcard-icon-wa"
            href={waLink(`Hello Zenawi! I would like details on ${property.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp about ${property.name}`}
            title="WhatsApp"
          >
            <svg viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm111.2-163c-5.8-2.9-34.4-17-39.7-18.9-5.3-1.9-9.1-2.9-12.9 2.9-3.8 5.8-14.8 18.9-18.1 22.8-3.3 3.9-6.7 4.4-12.5 1.5-5.8-2.9-24.5-9-46.7-28.8-17.2-15.4-28.9-34.4-32.3-40.2-3.3-5.8-0.3-8.9 2.5-11.8 2.6-2.6 5.8-6.7 8.7-10.1 2.9-3.3 3.9-5.8 5.8-9.6 1.9-3.9 1-7.3-0.5-10.3-1.5-2.9-12.9-31-17.7-42.4-4.7-11.3-9.4-9.8-12.9-10-3.3-0.2-7.2-0.2-11.1-0.2-3.9 0-10.1 1.5-15.4 7.5-5.3 6-20.2 19.7-20.2 48.1 0 28.4 20.6 55.9 23.5 59.7 2.9 3.9 40.7 62.2 98.5 87.2 13.8 5.9 24.5 9.4 32.9 12 13.8 4.4 26.4 3.8 36.3 2.3 11.1-1.7 34.4-14.1 39.3-27.7 4.8-13.6 4.8-25.3 3.3-27.7-1.4-2.4-5.3-3.8-11.1-6.7z" /></svg>
          </a>
          <a
            className="pcard-icon-btn pcard-icon-mail"
            href={`mailto:${CONTACT.email}?subject=Enquiry: ${encodeURIComponent(property.name)}`}
            aria-label={`Email about ${property.name}`}
            title="Email"
          >
            <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" /></svg>
          </a>
        </div>
        <div className="pcard-actions">
          <Link className="btn-oval btn-sm" style={{ background: 'var(--cream-100)' }} to={`/property/${property.id}`}>
            More Details
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
