import Reveal from '../components/Reveal';
import PageHead from '../components/PageHead';
import { waLink } from '../data/properties';

export default function Ceo() {
  return (
    <>
      <PageHead
        crumb="Home / Know Our CEO"
        title="Know Our CEO, Robert Muichua"
        lead="The vision and drive behind Zenawi Real Estate."
        image="/img/team/team-group.jpg"
      />

      <section>
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal style={{ borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '16/9', marginBottom: 32 }}>
            <img
              src="/img/team/ceo-image.jpg"
              alt="Robert Muichua, CEO of Zenawi Real Estate"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Reveal>
          <Reveal delay={0.08} style={{ textAlign: 'justify' }}>
            <div className="eyebrow-line">ROBERT MUICHUA</div>
            <h2>Chief Executive Officer</h2>
            <p>If you've heard the name Robert Muichua, you'll know he's no stranger to resilience. As the CEO of Zenawi Real Estate, he's built a reputation for being passionate, determined and deeply committed to creating opportunities. What you may not know is how far he's come to get here — and why giving back is now at the core of everything he does.</p>
            <p>At just 33 years old, Robert has worn more hats than most people do in a lifetime. He started off hawking shoes in Nairobi's CBD, sold fruits in Githurai market, worked as an untrained Maths and Physics teacher, and even had a construction company that went under, wiping out his savings and that of his friends. He's driven water supply trucks in Eastlands and even dabbled in academic writing. But through every setback and every success, Robert's mission has remained clear: to use his entrepreneurial journey as a way to make a meaningful impact.</p>
            <p>"They say you can't pour from an empty cup, right? That's exactly why I went into business," he says. "I didn't start companies for the sake of accumulating wealth or living large — I did it so that I could help those who've been left behind by an unfair system. I work hard for two main reasons: to create jobs for young people and to help the less fortunate."</p>
            <p>And true to his word, Robert doesn't just talk about making a difference — he lives it. Zenawi Real Estate alone has provided employment to over 50 young people, and his philanthropic efforts don't stop there. Earlier this year, he and a group of friends raised Kshs. 300,000 to help two needy students from Muruguru Primary School in Nyeri. This act of kindness was just the beginning of something much bigger.</p>
            <p>Robert Muichua's commitment to giving back has culminated in his proudest project: the <strong>Roba wa Bursary Foundation</strong>. With over 100 bursaries already provided to underprivileged children, Robert sees this as the true legacy of his life. "I want this to be the highlight of my life," he says, "with everything else just a footnote."</p>
            <p>What makes this even more impactful is that by investing with Zenawi Real Estate, you're not just buying property — you're helping more children stay in school. Robert's vision is to use the company's success to fund more bursaries, making each land purchase part of a larger mission to change lives. For Robert, "Success is best measured by how much you give back." Investing with Zenawi Real Estate means contributing to a brighter future for Kenya's next generation.</p>
            <a className="btn btn-gold" href={waLink('Hello! I would like to get in touch regarding Zenawi Real Estate.')} target="_blank" rel="noopener noreferrer">
              Get In Touch
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Reveal as="p" className="quote-block" style={{ textAlign: 'center', maxWidth: '46ch', margin: '0 auto' }}>
            "At Zenawi, we're more than just a team — we're a family."
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Ready to secure your plot?</h2>
          <p style={{ color: 'rgba(14,35,64,.75)', maxWidth: '52ch', margin: '0 auto 28px' }}>
            Speak with our team today and start your land ownership journey with a company built on integrity.
          </p>
          <a className="btn btn-navy" href={waLink('Hello Zenawi! I would like to speak with your team about a plot.')} target="_blank" rel="noopener noreferrer">
            Chat With Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}