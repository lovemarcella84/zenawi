import { useParams, Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Typewriter from '../components/Typewriter';
import PropertyGallery from '../components/PropertyGallery';
import SmartImage from '../components/SmartImage';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES, waLink, CONTACT } from '../data/properties';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = PROPERTIES.find((p) => p.id === id);

  if (!property) {
    return (
      <section style={{ paddingTop: 160, textAlign: 'center' }}>
        <div className="container">
          <h2>Property not found</h2>
          <p>This listing may have moved. Browse our current properties instead.</p>
          <Link className="btn btn-navy" to="/properties">Browse Properties</Link>
        </div>
      </section>
    );
  }

  const sold = property.status === 'sold';
  const others = PROPERTIES.filter((p) => p.id !== property.id && p.status === property.status).slice(0, 3);

  return (
    <>
      <div className="pagehead" style={{ padding: '120px 0 60px' }}>
        <div className="hero-bg">
          <SmartImage src={property.image} alt={property.name} plotId={property.id} sold={sold} className="hero-bg-fill" />
        </div>
        <div className="container">
          <span className="crumb">Home / Properties / {property.name}</span>
          <Typewriter as="h1" text={property.name} className="pagehead-title" />
          <p>{property.tagline}</p>
        </div>
      </div>

      <PropertyGallery property={property} />

      <section>
        <div className="container two-col">
          <Reveal>
            <div className="eyebrow-line">PROPERTY DETAILS</div>
            <Typewriter as="h2" text="Everything you need to know." />
            <p className="quote-block" style={{ fontSize: '1.15rem' }}>
              {property.price} · {property.location} · {property.size}
            </p>
            {sold && (
              <p style={{ background: 'var(--cream-100)', padding: '12px 16px', borderRadius: 10, fontWeight: 600, color: 'var(--navy-800)' }}>
                This project is sold out. Enquire about similar available plots below.
              </p>
            )}
            <p>{property.summary}</p>
            <ul className="list-check">
              {property.features.map((f) => (
                <li key={f}><CheckIcon /><span>{f}</span></li>
              ))}
            </ul>
            <div className="contact-btns" style={{ marginTop: 20 }}>
              <a className="btn-oval btn-wa" href={waLink(`Hello Zenawi! I would like details on ${property.name}.`)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="btn-oval btn-mail" href={`mailto:${CONTACT.email}?subject=Enquiry: ${encodeURIComponent(property.name)}`}>Email</a>
            </div>
          </Reveal>

          <Reveal delay={0.08} variant="slide" style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 16, padding: 26, boxShadow: 'var(--shadow-sm)' }}>
            <div className="eyebrow-line">BOOK A VISIT</div>
            <h3 style={{ fontSize: '1.3rem' }}>Schedule a free site visit</h3>
            <VisitForm propertyName={property.name} />
          </Reveal>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section-alt">
          <div className="container">
            <Reveal as="div" className="sec-head">
              <div className="eyebrow-line">MORE LIKE THIS</div>
              <Typewriter as="h2" text={`Other ${sold ? 'sold-out' : 'available'} projects.`} />
            </Reveal>
            <div className="grid-3">
              {others.map((p, i) => <PropertyCard key={p.id} property={p} delay={0.08 + i * 0.1} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function VisitForm({ propertyName }: { propertyName: string }) {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name'); const phone = data.get('phone');
    const date = data.get('date'); const msg = data.get('msg');
    const text = `Hello Zenawi! I would like to book a site visit for ${propertyName}.\nName: ${name}\nPhone: ${phone}` +
      (date ? `\nPreferred date: ${date}` : '') + (msg ? `\nMessage: ${msg}` : '');
    window.open(waLink(text), '_blank');
  }
  return (
    <form onSubmit={submit}>
      <div className="form-field"><label>Full Name</label><input name="name" required placeholder="Your name" /></div>
      <div className="form-field"><label>Phone</label><input name="phone" required placeholder="07xx xxx xxx" /></div>
      <div className="form-field"><label>Preferred date</label><input name="date" type="date" /></div>
      <div className="form-field"><label>Message</label><textarea name="msg" rows={3} placeholder="Any questions?" /></div>
      <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>Book via WhatsApp</button>
    </form>
  );
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" /></svg>;
}
