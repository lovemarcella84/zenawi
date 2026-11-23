import Reveal from '../components/Reveal';
import PageHead from '../components/PageHead';
import { waLink } from '../data/properties';

const leaders = [
  {
    key: 'gm',
    name: 'Stanley Macharia',
    role: 'General Manager',
    tagline: 'Driving Growth. Building Trust. Delivering Results.',
    image: '/img/team/stanley-macharia.jpg',
    paragraphs: [
      'As General Manager, Stanley provides strategic leadership and oversees the day-to-day operations of Zenawi Real Estate, ensuring that the company continues to deliver exceptional service and value to every client.',
      'With a strong focus on operational excellence, customer satisfaction and sustainable growth, Stanley works closely with the team to turn the company’s vision into measurable results. His leadership brings together sales, client service, operations and business development to create a seamless property investment experience.',
      'At Zenawi Real Estate, leadership goes beyond business — it is about building lasting relationships and creating confidence in every investment.',
    ],
    quote:
      '“We are committed to making property ownership simple, transparent and accessible while building a company our clients can trust for generations.”',
  },
  {
    key: 'brand',
    name: 'Nyambura Kabi',
    role: 'Brand Manager / HR',
    tagline: 'Building the Brand. Growing the People. Shaping the Culture.',
    image: '/img/team/nyambura-kabi.jpg',
    paragraphs: [
      'As Brand Manager and Human Resources lead, Nyambura Kabi oversees the growth and positioning of the Zenawi Real Estate brand while championing the people and culture behind the business.',
      'Her role brings together brand strategy, digital marketing, communications, employee engagement and people development, ensuring that Zenawi’s presence in the market reflects the same values that define the company internally: professionalism, integrity, excellence and customer focus.',
      'With a strong passion for storytelling and digital marketing, she continues to strengthen Zenawi’s connection with its audience, helping translate the company’s property solutions into a brand that people can understand, trust and connect with.',
      'Beyond the brand, she believes that a great company is built by great people. Through people-focused initiatives, team engagement and a culture of accountability and growth, she works to create an environment where every member of the Zenawi team can perform, grow and thrive.',
    ],
    quote:
      '“A strong brand is built by strong people. At Zenawi, we are building both with purpose, consistency and a commitment to excellence.”',
  },
];

export default function Management() {
  return (
    <>
      <PageHead
        crumb="Home / Our Management"
        title="Our Management"
        lead="The people leading Zenawi Real Estate with integrity, focus and care."
        image="/img/team/team-group.jpg"
      />

      {leaders.map((p, i) => (
        <section key={p.key} className={i % 2 === 1 ? 'section-alt' : undefined}>
          <div className="container" style={{ maxWidth: 1040 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 48,
                alignItems: 'start',
              }}
            >
              <Reveal
                style={{
                  order: i % 2 === 1 ? 2 : 0,
                  borderRadius: 20,
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  aspectRatio: '4/5',
                  }}
              >
                <img
                  src={p.image}
                  alt={`${p.name}, ${p.role} at Zenawi Real Estate`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
              </Reveal>

              <Reveal delay={0.08}>
                <div className="eyebrow-line">{p.role.toUpperCase()} - {p.name.toUpperCase()}</div>
                <h2>{p.tagline}</h2>
                {p.paragraphs.map((text, n) => (
                  <p key={n}>{text}</p>
                ))}
                <p className="quote-block" style={{ marginTop: 24 }}>
                  {p.quote}
                  <br />
                  <strong style={{ fontSize: '.9em' }}>— {p.name}</strong>
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-band">
        <div className="container">
          <h2>Ready to secure your plot?</h2>
          <p style={{ color: 'rgba(14,35,64,.75)', maxWidth: '52ch', margin: '0 auto 28px' }}>
            Speak with our team today and start your land ownership journey with a company built on integrity.
          </p>
          <a
            className="btn btn-navy"
            href={waLink('Hello Zenawi! I would like to speak with your team about a plot.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat With Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
