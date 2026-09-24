import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroBackground from '../components/HeroBackground';
import Reveal from '../components/Reveal';
import Typewriter from '../components/Typewriter';
import CountUp from '../components/CountUp';
import PropertyCard from '../components/PropertyCard';
import TitleDeedSlideshow from '../components/TitleDeedSlideshow';
import { PROPERTIES, waLink } from '../data/properties';

const featured = PROPERTIES.filter((p) => p.status === 'available').slice(0, 6);

const titleDeedPhotos = [
  { src: '/img/brand/title-deed.jpg', alt: 'Verified Zenawi title deed certificate' },
  { src: '/img/brand/title-deed-2.jpg', alt: 'Zenawi client receiving her title deed' },
  { src: '/img/brand/title-deed-3.jpg', alt: 'Zenawi client receiving her title deed' },
  { src: '/img/brand/title-deed-4.jpg', alt: 'Zenawi client receiving her title deed' },
];

const heroStats = [
  { end: 2020, label: 'Founded' },
  { end: 30, suffix: '+', label: 'Team Members' },
  { end: 6572, label: 'Title Deeds Delivered' },
];

const values = [
  { title: 'Integrity', text: 'We uphold the highest standards of honesty, consistency and truthfulness in every transaction.' },
  { title: 'Efficiency', text: 'A streamlined, expert process that makes acquiring land as smooth and hassle-free as possible.' },
  { title: 'Reliability', text: 'We deliver on our promises with unwavering consistency, so you can trust every commitment.' },
  { title: 'Customer Experience', text: 'Attentive, responsive service that goes beyond the call of duty throughout your journey.' },
];

export default function Home() {
  return (
    <>
      <section className="hero" style={{ padding: '150px 0 90px' }}>
        <img
          src="/img/brand/home.jpg"
          alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', zIndex: 0,
          }}
        />
        <HeroBackground />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(17, 52, 155, 0.9)',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: 0 }}>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="eyebrow-line">EPITOME OF INTEGRITY</div>
            <Typewriter as="h1" text="Prime Affordable Plots For Sale" className="hero-type-title" />
            <p className="hero-locations">
              in Juja, Muthaara, Ruiru Kamakis, Joska Malaa, &amp; Kikuyu
            </p>
            <p className="hero-lead">
              Zenawi Real Estate has sold prime, affordable plots across Nairobi, Kiambu and Machakos counties since 2020 —
              every parcel legally verified, every promise kept.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 28 }}>
              <Link to="/properties" className="btn btn-gold">View Available Plots</Link>
              <a className="btn btn-outline" href={waLink('Hello Zenawi! I would like to book a site visit.')} target="_blank" rel="noopener noreferrer">
                Book a Free Site Visit
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-stats"
          >
            {heroStats.map(({ end, suffix, label }) => (
              <div key={label} className="hero-stat">
                <strong className="stat-number">
                  <CountUp end={end} suffix={suffix} />
                </strong>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="sec-head">
            <div className="eyebrow-line">AVAILABLE NOW</div>
            <Typewriter as="h2" text="Available Properties for Sale" delay={0.1} />
          </Reveal>
          <div className="grid-3">
            {featured.map((p, i) => (
              <PropertyCard key={p.id} property={p} delay={0.08 + i * 0.1} index={i} />
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/properties" className="btn btn-navy">See All Properties</Link>
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="container two-col">
          <Reveal>
            <div className="eyebrow-line">PROOF, NOT PROMISES</div>
            <Typewriter as="h2" text="6,572 title deeds delivered — and counting." />
            <p>
              Every Zenawi plot comes with a legally verified title deed handled from start to finish —
              no ambiguity, no endless waiting. It's the single promise our clients mention most.
            </p>
            <ul className="list-check" style={{ marginTop: 20 }}>
              <li><CheckIcon /><span>Full title search and due diligence before you commit</span></li>
              <li><CheckIcon /><span>Regular updates throughout the process</span></li>
            </ul>
          </Reveal>
          <Reveal delay={0.08} variant="slide" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              background: '#fff', padding: 18, borderRadius: 18, border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-lg)', transform: 'rotate(-2deg)', maxWidth: 300, width: '100%',
            }}>
              <TitleDeedSlideshow slides={titleDeedPhotos} />
              <p style={{ textAlign: 'center', fontSize: '0.95rem', margin: '10px 0 0', color: 'var(--navy-800)', fontWeight: 600 }}>
                Happy clients receiving their title deeds
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="sec-head">
            <div className="eyebrow-line">WHAT GUIDES US</div>
            <Typewriter as="h2" text="Four values behind every transaction." />
          </Reveal>
          <div className="values-row">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i} variant="slide" as="div" className="value-block">
                <h4>{v.title}</h4>
                <p style={{ marginBottom: 0 }}>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <Reveal as="div" className="container">
          <Typewriter as="h2" text="Ready to secure your plot?" />
          <p className="cta-lead">
            Speak with our team today and start your land ownership journey with a company built on integrity.
          </p>
          <a className="btn btn-navy" href={waLink('Hello Zenawi! I would like to speak with your team about a plot.')} target="_blank" rel="noopener noreferrer">
            Chat With Us on WhatsApp
          </a>
        </Reveal>
      </section>
    </>
  );
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" /></svg>;
}