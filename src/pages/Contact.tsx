import { useState } from 'react';
import Reveal from '../components/Reveal';
import PageHead from '../components/PageHead';
import { CONTACT, waLink } from '../data/properties';

const interests = ['Juja & Juja Farm', 'Muthaara', 'Ruiru Kamakis', 'Joska, Malaa & Kikuyu', 'Kangundo Road', 'General enquiry'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', interest: interests[0], message: '' });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello Zenawi! My name is ${form.name} (${form.phone}). I'm interested in ${form.interest}. ${form.message}`;
    window.open(waLink(text), '_blank');
  }

  return (
    <>
      <PageHead
        crumb="Home / Contact Us"
        title="Get In Touch"
        lead="Have a question about a plot, a site visit, or the buying process? We're one message away."
        image="https://images.unsplash.com/photo-1653663786108-21ca52a24171?auto=format&fit=crop&w=1400&q=70"
      />

      <section>
        <div className="container contact-grid">
          <Reveal>
            <div className="eyebrow-line">SEND US A MESSAGE</div>
            <h2>We'll get back to you shortly.</h2>
            <form onSubmit={submit}>
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" required placeholder="e.g. 0712 345 678" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="form-field">
                <label htmlFor="interest">I'm interested in</label>
                <select id="interest" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                  {interests.map((i) => <option key={i}>{i}</option>)}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us a bit about what you're looking for" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="btn btn-gold">Book a Visit via WhatsApp</button>
            </form>
            <div className="contact-btns" style={{ marginTop: 18 }}>
              <a className="btn-oval btn-wa" href={waLink('Hello Zenawi! I would like to book a site visit.')} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="btn-oval btn-mail" href={`mailto:${CONTACT.email}?subject=Book%20a%20Site%20Visit`}>Email</a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="eyebrow-line">VISIT OR CALL US</div>
            <h2>Ruiru &amp; Ruai Offices</h2>

            <h4 style={{ marginTop: 8 }}>Ruiru Office</h4>
            <ul className="list-check" style={{ marginBottom: 20 }}>
              <li><PinIcon /><span><a href={waLink('Hello Zenawi!')} target="_blank" rel="noopener noreferrer">{CONTACT.phoneDisplay} (Call, Text or WhatsApp)</a></span></li>
              <li><PinIcon /><span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></span></li>
              <li><PinIcon /><span>Gituamba Plaza, Ruiru Town, Kiambu County</span></li>
              <li><PinIcon /><span>Monday – Saturday, 8:00am – 5:00pm</span></li>
            </ul>

            <h4>Ruai Office</h4>
            <ul className="list-check" style={{ marginBottom: 28 }}>
              <li><PinIcon /><span><a href="tel:+254726530530">0726 530 530</a></span></li>
              <li><PinIcon /><span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></span></li>
              <li><PinIcon /><span>Lexo Petrol Station, Opposite Quickmart Supermarket, Ruai</span></li>
            </ul>

            <div className="contact-btns" style={{ marginBottom: 24 }}>
              <a className="btn-oval btn-wa" href={waLink('Hello Zenawi!')} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="btn-oval btn-mail" href={`mailto:${CONTACT.email}`}>Email</a>
            </div>
            <div className="map-box">
              <iframe src="https://www.google.com/maps?q=Gituamba+Plaza+Ruiru&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Zenawi office location" />
            </div>
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

function PinIcon() {
  return <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: 'var(--gold-600)', flexShrink: 0, marginTop: 2 }}><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.8a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" /></svg>;
}