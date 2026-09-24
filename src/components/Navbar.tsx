import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CONTACT, waLink } from '../data/properties';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/properties', label: 'Properties' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/ceo', label: 'Know Our CEO' },
  { to: '/diaspora', label: 'Diaspora' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">Epitome of Integrity</div>
          <div className="topbar-right" style={{ display: 'flex', gap: 18 }}>
            <a href={waLink("Hello Zenawi! I'd like to know more about your properties.")} target="_blank" rel="noopener noreferrer">
              Call / Text / WhatsApp: {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
      </div>
      <div className={`navwrap${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src="/img/brand/logo.png" alt="Zenawi Real Estate" />
          </Link>
          <ul className={`navlinks${open ? ' open' : ''}`}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => `toplink${isActive ? ' active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="navcta">
            <a className="btn btn-gold btn-sm" href={waLink('Hello Zenawi! I would like to book a site visit.')} target="_blank" rel="noopener noreferrer">
              <span className="longlabel">Book a&nbsp;</span>Site Visit
            </a>
            <button className="burger" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
