import { useState } from 'react';
import Reveal from '../components/Reveal';
import Typewriter from '../components/Typewriter';
import CountUp from '../components/CountUp';
import PageHead from '../components/PageHead';
import { waLink } from '../data/properties';

const values = [
  { title: 'Integrity', text: 'We uphold the highest standards of honesty, consistency and truthfulness in every transaction we conduct.' },
  { title: 'Efficiency', text: 'A streamlined, expert process that makes acquiring land as smooth and hassle-free as possible.' },
  { title: 'Reliability', text: 'We deliver on our promises with unwavering consistency, so you can trust every commitment we make.' },
  { title: 'Customer Experience', text: 'Attentive, responsive service that goes beyond the call of duty throughout your land-buying journey.' },
];

const teamImages = [
  '/img/team/team-one.jpg',
  '/img/team/team-group.jpg',
  '/img/team/team-two.jpg',
  '/img/team/agent-1.jpg',
  '/img/team/agent-2.jpg',
  '/img/team/agent-3.jpg',
];

function TeamGallery() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % teamImages.length);
  const prev = () => setIndex((i) => (i - 1 + teamImages.length) % teamImages.length);

  const visible = [teamImages[index], teamImages[(index + 1) % teamImages.length]];

  return (
    <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 8, borderRadius: 16, overflow: 'hidden' }}>
        {visible.map((src, i) => (
          <div key={src + i} style={{ flex: 1, aspectRatio: '4/3', overflow: 'hidden' }}>
            <img
              src={src}
              alt="Zenawi Real Estate team"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        style={{
          position: 'absolute', left: -18, top: '50%', transform: 'translateY(-50%)',
          width: 36, height: 36, borderRadius: '50%', border: 'none', background: '#fff',
          boxShadow: 'var(--shadow-sm)', cursor: 'pointer', fontSize: '1.1rem',
        }}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        style={{
          position: 'absolute', right: -18, top: '50%', transform: 'translateY(-50%)',
          width: 36, height: 36, borderRadius: '50%', border: 'none', background: '#fff',
          boxShadow: 'var(--shadow-sm)', cursor: 'pointer', fontSize: '1.1rem',
        }}
      >
        ›
      </button>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
        {teamImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: 8, height: 8, borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer',
              background: i === index ? 'var(--navy-800)' : 'var(--line)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHead
        title="About Zenawi Real Estate"
        lead="A premier real estate company founded in 2020, built on integrity, efficiency, reliability and outstanding customer experience."
        image="https://images.unsplash.com/photo-1600270074098-f51a52d71a37?auto=format&fit=crop&w=1400&q=70"
      />

      <section>
        <div className="container two-col">
          <Reveal>
            <div className="eyebrow-line">OUR STORY</div>
            <Typewriter as="h2" text="Founded on one word: integrity." />
            <p>Zenawi Real Estate is a premier real estate company founded in 2020. We specialise in providing prime, affordable plots across Juja, Muthaara, Ruiru Kamakis, Juja Farm and Kangundo Road, ensuring a smooth and transparent land acquisition process from start to finish.</p>
            <p>With a team of over 30 dedicated professionals, we offer flexible land financing options and place a strong emphasis on personalised service and client education. Our legally verified residential and commercial plots come complete with title deeds, supporting your investment with integrity and expertise.</p>
          </Reveal>
          <Reveal delay={0.08} variant="slide">
            <div className="tag-pill">OUR PROCESS</div>
            <p>Regular updates throughout the process — from title search to final transfer, our team keeps you informed at every step. Your investment is safe with us.</p>
            <div className="tag-pill">AWARDS</div>
            <ul className="list-check" style={{ marginTop: 4 }}>
              <li><CheckIcon /><span>Awarded as the Most Professional Real Estate Company in 2024</span></li>
              <li><CheckIcon /><span>2025 — Our CEO was awarded among the Top 50 CEOs</span></li>
              <li><CheckIcon /><span>Awarded as the Leading Property Investment Company of the Year 2026</span></li>
            </ul>
            <img
              src="/img/brand/awards.jpg"
              alt="Zenawi Real Estate awards"
              style={{
                width: '100%', borderRadius: 'var(--radius-sm)', marginTop: 16,
                border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)',
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Reveal as="div" className="sec-head">
            <div className="eyebrow-line">OUR CORE VALUES</div>
            <Typewriter as="h2" text="What guides every transaction." />
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

      <section>
        <div className="container two-col">
          <Reveal>
            <h3>Our Vision</h3>
            <p className="quote-block">To become the premier and most reliable real estate company in Kenya &amp; beyond.</p>
          </Reveal>
          <Reveal delay={0.08} variant="slide">
            <h3>Our Mission</h3>
            <p className="quote-block">To make land ownership a seamless, exciting and fun process.</p>
          </Reveal>
        </div>
      </section>

      <section className="stats-band">
        <div className="stats-grid">
          {[
            { end: 2020, label: 'Year Zenawi Was Founded' },
            { end: 30, suffix: '+', label: 'Dedicated Team Members' },
            { end: 2024, label: 'Most Professional Real Estate Award' },
            { end: 6572, label: 'Title Deeds Delivered' },
          ].map(({ end, suffix, label }) => (
            <Reveal key={label} as="div" className="stat-block">
              <strong className="stat-number"><CountUp end={end} suffix={suffix} /></strong>
              <span className="stat-label">{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="sec-head">
            <Typewriter as="h2" text="The Team" />
          </Reveal>
          <TeamGallery />
        </div>
      </section>

      <section className="cta-band">
        <Reveal as="div" className="container">
          <Typewriter as="h2" text="Curious about our available plots?" />
          <p className="cta-lead">
            Chat with our team on WhatsApp or book a site visit to see our projects for yourself.
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
