import { Link } from 'react-router-dom';
import { CONTACT, waLink } from '../data/properties';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-about">
            <div className="foot-logo-wrap">
              <img className="foot-logo" src="/img/brand/logo.png" alt="Zenawi Real Estate" />
            </div>
            <p>Zenawi Real Estate has sold prime, affordable plots across Nairobi, Kiambu and Machakos counties since 2020 — every parcel legally verified, every title deed delivered.</p>
            <div className="socials">
              <a href={waLink('Hello Zenawi!')} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/></svg>
              </a>
              <a href="https://www.facebook.com/zenawiltd" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.36 3.65 15.2 3.55 13.85 3.55 11 3.55 9.1 5.28 9.1 8.4v1.5H6.4V13h2.7v8h4.4z"/></svg>
              </a>
              <a href="https://instagram.com/zenawiltd" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.2c2.7 0 3 .01 4.05.06 1.05.05 1.76.21 2.39.46.65.25 1.2.6 1.75 1.15.55.55.9 1.1 1.15 1.75.24.63.4 1.34.46 2.39.05 1.05.06 1.35.06 4.05s-.01 3-.06 4.05c-.05 1.05-.21 1.76-.46 2.39-.25.65-.6 1.2-1.15 1.75-.55.55-1.1.9-1.75 1.15-.63.24-1.34.4-2.39.46-1.05.05-1.35.06-4.05.06s-3-.01-4.05-.06c-1.05-.05-1.76-.21-2.39-.46a4.93 4.93 0 0 1-1.75-1.15 4.93 4.93 0 0 1-1.15-1.75c-.24-.63-.4-1.34-.46-2.39C2.2 15 2.2 14.7 2.2 12s.01-3 .06-4.05c.05-1.05.21-1.76.46-2.39.25-.65.6-1.2 1.15-1.75.55-.55 1.1-.9 1.75-1.15.63-.24 1.34-.4 2.39-.46C9 2.2 9.3 2.2 12 2.2zm0 1.8c-2.65 0-2.96.01-4 .06-.85.04-1.31.18-1.62.3-.4.16-.7.34-1 .64-.3.3-.48.6-.64 1-.12.31-.26.77-.3 1.62-.05 1.04-.06 1.35-.06 4s.01 2.96.06 4c.04.85.18 1.31.3 1.62.16.4.34.7.64 1 .3.3.6.48 1 .64.31.12.77.26 1.62.3 1.04.05 1.35.06 4 .06s2.96-.01 4-.06c.85-.04 1.31-.18 1.62-.3.4-.16.7-.34 1-.64.3-.3.48-.6.64-1 .12-.31.26-.77.3-1.62.05-1.04.06-1.35.06-4s-.01-2.96-.06-4c-.04-.85-.18-1.31-.3-1.62a2.7 2.7 0 0 0-.64-1 2.7 2.7 0 0 0-1-.64c-.31-.12-.77-.26-1.62-.3-1.04-.05-1.35-.06-4-.06zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm5.13-1.98a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"/></svg>
              </a>
              <a href="https://www.youtube.com/@zenawirealestate" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M22 12s0-3.2-.4-4.7a2.8 2.8 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.8 2.8 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9 1 1.7 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.8 2.8 0 0 0 2-2C22 15.2 22 12 22 12zM10 15.2V8.8l6 3.2z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h5>Properties</h5>
            <ul>
              <li><Link to="/properties">Available Plots</Link></li>
              <li><Link to="/properties#sold-out">Sold Out</Link></li>
              <li><Link to="/property/golden-crest-estate">Golden Crest Estate</Link></li>
              <li><Link to="/property/fadhili-gardens">Fadhili Gardens</Link></li>
              <li><Link to="/property/pendo-gardens">Pendo Gardens</Link></li>
            </ul>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/ceo">Know Our CEO</Link></li>
              <li><Link to="/diaspora">Diaspora</Link></li>
              <li><Link to="/blogs">Blog Posts</Link></li>
              <li><Link to="/contact">Book a Site Visit</Link></li>
            </ul>
          </div>
          <div>
            <h5>Get In Touch</h5>
            <ul>
              <li><strong>Ruiru Office:</strong> Gituamba Plaza, Ruiru Town, Kiambu County</li>
              <li><a href="tel:+254758000111">0758 000 111</a> &nbsp;|&nbsp; <a href="tel:+254794000888">0794 000 888</a></li>
              <li><strong>Ruai Office:</strong> Lexo Petrol Station, Opposite Quickmart Supermarket</li>
              <li><a href="tel:+254726530530">0726 530 530</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li>Mon–Sat, 8:00am – 5:00pm</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2020–{new Date().getFullYear()} Zenawi Real Estate. All Rights Reserved.</span>
          <span>Regular updates throughout the process</span>
        </div>
      </div>
    </footer>
  );
}