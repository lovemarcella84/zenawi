import Reveal from '../components/Reveal';
import PageHead from '../components/PageHead';
import { waLink } from '../data/properties';

const posts = [
  {
    tag: 'Customer Experience',
    title: '"Zenawi made the entire process so easy."',
    excerpt: 'From my first call to the day I held my title deed, the team walked me through everything patiently. No pressure, no confusion — just clear answers whenever I had a question.',
    name: 'James Kariuki',
  },
  {
    tag: 'Fast Delivery',
    title: '"My title deed was ready faster than I expected."',
    excerpt: 'I was told 30 days and that\'s exactly what happened. No delays, no excuses — just consistent updates until the paperwork was in my hands.',
    name: 'Everlyne Achieng',
  },
  {
    tag: 'Convenience',
    title: '"I did almost everything over WhatsApp."',
    excerpt: 'Between work and family, I barely had time to visit an office. Zenawi\'s team sent me photos, videos and updates on WhatsApp so I could make my decision without disrupting my schedule.',
    name: 'Brian Otieno',
  },
  {
    tag: 'Trust & Transparency',
    title: '"They answered every question honestly."',
    excerpt: 'I asked a lot of questions before committing, and the team never dodged one. That honesty is why I ended up buying two plots instead of one.',
    name: 'Faith Njeri',
  },
  {
    tag: 'Site Visits',
    title: '"The free site visit sealed the deal for me."',
    excerpt: 'Seeing the plot in person, with a Zenawi agent pointing out the boundaries and nearby amenities, gave me total confidence before I paid a deposit.',
    name: 'Peter Mwangi',
  },
  {
    tag: 'After-Sale Support',
    title: '"They didn\'t disappear after I paid."',
    excerpt: 'Even after completing my purchase, the team has continued checking in and helping with small questions about my plot. It really does feel like family.',
    name: 'Sarah Wambui',
  },
];

export default function Blogs() {
  return (
    <>
      <PageHead
        crumb="Home / Blogs"
        title="Insights &amp; Updates"
        lead="Real experiences from clients who've bought land with Zenawi Real Estate."
        image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=70"
      />

      <section>
        <div className="container">
          <div className="grid-3">
            {posts.map((p, i) => (
              <Reveal
                key={p.title}
                delay={0.05 * i}
                as="article"
                style={{
                  background: '#fff', borderRadius: 16, border: '1px solid var(--line)',
                  padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 10,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span
                  style={{
                    alignSelf: 'flex-start', background: 'var(--cream-100)', color: 'var(--navy-800)',
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', padding: '5px 12px',
                    borderRadius: 999, marginBottom: 6,
                  }}
                >
                  {p.tag}
                </span>
                <h4 style={{ margin: 0 }}>{p.title}</h4>
                <p style={{ fontSize: '0.95rem', flex: 1 }}>{p.excerpt}</p>
                <p style={{ margin: 0, fontWeight: 700, color: 'var(--navy-800)' }}>~~~ {p.name}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Have a question about buying land?</h2>
          <p style={{ color: 'rgba(14,35,64,.75)', maxWidth: '52ch', margin: '0 auto 28px' }}>
            Our team is happy to walk you through anything you've read here.
          </p>
          <a className="btn btn-navy" href={waLink('Hello Zenawi! I have a question after reading your blog.')} target="_blank" rel="noopener noreferrer">
            Chat With Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}