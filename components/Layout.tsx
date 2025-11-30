import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || !isHome || isMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const linkClass = (isActive: boolean) => `
    text-sm font-medium transition-colors hover:text-primary 
    ${isActive ? 'text-primary' : (scrolled || !isHome || isMenuOpen ? 'text-gray-700' : 'text-white')}
  `;

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className={navClass}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className={`text-2xl font-serif font-bold cursor-pointer flex items-center gap-2 ${
              scrolled || !isHome || isMenuOpen ? 'text-primary' : 'text-white'
            }`}
          >
            <span className="text-3xl">🌿</span>
            <span>산들강 웅포</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => linkClass(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={scrolled || !isHome ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={scrolled || !isHome ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t animate-fade-in-down">
            <div className="flex flex-col p-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-lg font-medium p-2 rounded-lg ${
                      isActive ? 'bg-green-50 text-primary' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white text-xl font-serif mb-4">산들강 웅포마을</h3>
              <p className="mb-4 text-sm leading-relaxed">
                전라북도 익산시 웅포면 강변로.<br />
                자연 속에서 진정한 휴식을 경험하세요.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">문의 안내</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Phone size={16} /> 063-123-4567</li>
                <li className="flex items-center gap-2"><Mail size={16} /> info@ungpo.kr</li>
                <li className="flex items-center gap-2"><MapPin size={16} /> 전북 익산시 웅포면</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">운영 시간</h4>
              <p className="text-sm">
                상담 가능 시간: 09:00 - 18:00<br />
                점심시간: 12:00 - 13:00<br />
                주말 및 공휴일 휴무
              </p>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Sandeulgang Ungpo Village. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;