import Reveal from '../components/Reveal';
import PageHead from '../components/PageHead';
import { Link } from 'react-router-dom';
import { waLink } from '../data/properties';

const steps = [
  { title: 'Consultation', text: 'Tell us your budget and preferred location over a WhatsApp or video call.' },
  { title: 'Shortlist', text: 'We send photos, video walkthroughs and pricing for matching plots.' },
  { title: 'Due diligence', text: 'Our team verifies ownership and conducts a full title search.' },
  { title: 'Secure purchase', text: 'We guide you through documentation, including power of attorney where needed.' },
  { title: 'Title transfer', text: 'Your legally verified title deed is processed within 30 days.' },
];

const testimonials = [
  {
    img: '/img/team/qatar.jpg',
    place: 'QATAR',
    name: 'Purity Wangari',
    text: "Zenawi Real Estate made my land investment seamless, even from Toronto! I was served by Faith, who guided me through every step with professionalism. I received my title deed without any hassle, and their communication was excellent — I was updated throughout the process. If you're in the diaspora and looking to invest in Kenya, Zenawi is the trusted partner you need.",
  },
  {
    img: '/img/team/dallas.jpg',
    place: 'DALLAS',
    name: 'Magret Mungai',
    text: 'After a previous bad experience, I was hesitant to buy land through a company again. However, after connecting with Cate from Zenawi Real Estate on Facebook, she provided clear information and guidance. Now, I have my title deed and couldn\'t be happier. I highly recommend Zenawi Real Estate for their professionalism and transparency.',
  },
  {
    img: '/img/team/dubai.jpg',
    place: 'DUBAI',
    name: 'Amina Muhamed',
    text: 'Nilinunua kipande cha ardhi kupitia Zenawi Real Estate na huduma niliyopokea kutoka kwa Peter ilikuwa bora sana. Alihakikisha maswali yangu yote yanajibiwa kwa haraka na alinipa taarifa za kina kuhusu properties zao kunisaidia kufanya uamuzi sahihi. Ninapendekeza Zenawi Real Estate na nampongeza Peter kwa msaada wake mzuri.',
  },
];

export default function Diaspora() {
  return (
    <>
      <PageHead
        crumb="Home / Diaspora"
        title="Zenawi For The Diaspora"
        lead="Buying land in Kenya from abroad, made simple, secure and transparent."
        image="/img/team/diaspora-image.jpg"
      />

      <section>
        <div className="container two-col">
          <Reveal>
            <div className="eyebrow-line">LIVING ABROAD, INVESTING AT HOME</div>
            <h2>Own land in Kenya, wherever you are.</h2>
            <p>Foreigners and Kenyans living abroad can legally acquire land in Kenya, and it's one of the most common questions our team answers. Zenawi walks every diaspora client through the process step by step — from choosing the right location to a fully verified title transfer.</p>
            <p>We handle the on-the-ground due diligence, coordinate virtual site visits over video call, and keep you updated on WhatsApp throughout — so distance never gets in the way of a safe investment.</p>
            <Link to="/properties" className="btn btn-navy" style={{ marginTop: 8 }}>Browse Available Properties</Link>
          </Reveal>
          <Reveal delay={0.08} as="ul" className="list-check">
            <li><CheckIcon /><span>Virtual consultations and video-call site visits, scheduled around your time zone.</span></li>
            <li><CheckIcon /><span>Guidance on power of attorney for a secure remote purchase.</span></li>
            <li><CheckIcon /><span>Full title search and due diligence before you commit a shilling.</span></li>
            <li><CheckIcon /><span>Regular updates and a legally verified title deed within 30 days.</span></li>
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Reveal as="div" className="sec-head">
            <div className="eyebrow-line">HOW IT WORKS</div>
            <h2>Five steps to owning land from abroad.</h2>
          </Reveal>
          <ul className="list-check" style={{ maxWidth: 720, margin: '0 auto' }}>
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={0.04 * i} as="li" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <CheckIcon />
                <span><strong>{s.title}:</strong> {s.text}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="sec-head">
            <h2>What do diaspora clients have to say?</h2>
          </Reveal>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.place}
                delay={0.08 * i}
                variant="slide"
                as="article"
                style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--line)', padding: 20 }}
              >
                <div style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '16/9', marginBottom: 14 }}>
                  <img src={t.img} alt={t.place} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(14,35,64,.8)' }}>{t.text}</p>
                <p style={{ margin: 0, fontWeight: 700 }}>~~~ {t.name}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Ready to invest from abroad?</h2>
          <p style={{ color: 'rgba(14,35,64,.75)', maxWidth: '52ch', margin: '0 auto 28px' }}>
            Message our diaspora desk on WhatsApp to start a conversation, wherever you are in the world.
          </p>
          <a className="btn btn-navy" href={waLink('Hello Zenawi! I would like to speak with your team about a plot.')} target="_blank" rel="noopener noreferrer">
            Chat With Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: 'var(--gold-600)', flexShrink: 0, marginTop: 2 }}><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.8a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" /></svg>;
}