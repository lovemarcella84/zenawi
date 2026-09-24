import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import WebBackground from './components/WebBackground';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Ceo from './pages/Ceo';
import Diaspora from './pages/Diaspora';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

function AppRoutes() {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/ceo" element={<Ceo />} />
        <Route path="/diaspora" element={<Diaspora />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <WebBackground />
        <Navbar />
        <main className="app-main">
          <AppRoutes />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}
