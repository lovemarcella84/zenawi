import { useEffect, useState } from 'react';
import Reveal from '../components/Reveal';
import Typewriter from '../components/Typewriter';
import PageHead from '../components/PageHead';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES, waLink, CONTACT } from '../data/properties';

export default function Properties() {
  const [tab, setTab] = useState<'available' | 'sold'>('available');

  useEffect(() => {
    if (window.location.hash === '#sold-out') setTab('sold');
  }, []);

  const list = PROPERTIES.filter((p) => p.status === tab);

  return (
    <>
      <PageHead
        crumb="Home / Properties"
        title="Available & Sold Out Plots"
        lead="Browse current projects and past sold-out phases — every listing matches our verified Zenawi portfolio."
        image="/img/properties/pendo-gardens.jpg"
      />

      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ display: 'inline-flex', gap: 6, background: '#fff', padding: 6, borderRadius: 999, border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }}>
            {(['available', 'sold'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="btn-sm"
                style={{
                  border: 'none', borderRadius: 999, padding: '10px 22px', fontWeight: 700, cursor: 'pointer',
                  fontSize: '0.95rem', letterSpacing: '0.02em',
                  transition: 'all 0.3s var(--ease)',
                  background: tab === t ? 'var(--navy-800)' : 'transparent',
                  color: tab === t ? '#fff' : 'var(--navy-800)',
                }}
              >
                {t === 'available' ? 'Available Now' : 'Sold Out'}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id={tab === 'sold' ? 'sold-out' : 'available'}>
        <div className="container">
          <Reveal as="div" className="sec-head">
            <div className="eyebrow-line">{tab === 'available' ? 'AVAILABLE NOW' : 'SOLD OUT'}</div>
            <Typewriter
              as="h2"
              text={tab === 'available' ? 'Plots open for booking.' : 'Fully subscribed projects.'}
              key={tab}
            />
          </Reveal>
          <div className="grid-3">
            {list.map((p, i) => (
              <PropertyCard key={p.id} property={p} delay={0.08 + i * 0.1} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <Reveal as="div" className="container">
          <Typewriter as="h2" text="Ready to secure your plot?" />
          <p className="cta-lead">Message us on WhatsApp or email — we reply fast.</p>
          <div className="contact-btns" style={{ justifyContent: 'center' }}>
            <a className="btn-oval btn-wa" href={waLink('Hello Zenawi! I would like to speak about an available plot.')} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="btn-oval btn-mail" href={`mailto:${CONTACT.email}?subject=Property%20Enquiry`}>Email</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
