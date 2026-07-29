import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Property List', href: '#properties' },
  { label: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180;

      for (const link of navigationLinks) {
        const section = document.querySelector(link.href);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(link.label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gray-200/60 bg-white/80 py-2.5 sm:py-4 shadow-sm backdrop-blur-md'
          : 'bg-transparent py-3 sm:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Brand Logo - Scaled for mobile */}
        <a href="#home" className="shrink flex items-center">
          <img
            src={Logo}
            alt="Star Homes Logo"
            className="h-6 sm:h-8 md:h-10 w-auto max-w-[110px] sm:max-w-none object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className={`hidden items-center rounded-full border p-1.5 md:flex ${
            isScrolled
              ? 'border-gray-200 bg-gray-100/70'
              : 'border-white/15 bg-white/10 backdrop-blur-lg'
          }`}
        >
          {navigationLinks.map(link => {
            const isActive = activeSection === link.label;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveSection(link.label)}
                className={`rounded-full px-4 lg:px-6 py-2 text-xs lg:text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? isScrolled
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                    : isScrolled
                      ? 'text-gray-700 hover:text-black'
                      : 'text-white hover:text-gray-200'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Desktop Login Link */}
          <Link
            to="/login"
            className={`hidden items-center gap-2 text-[15px] font-medium transition-colors duration-200 md:flex ${
              isScrolled
                ? 'text-gray-700 hover:text-black'
                : 'text-white hover:text-gray-200'
            }`}
          >
            <span>Login</span>
          </Link>

          {/* Sign Up Button - Prevent line wrap */}
          <Link to="/signup">
            <button
              type="button"
              className="bg-[#B5F285] hover:bg-[#a2e36f] text-black font-semibold text-xs sm:text-sm px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full transition-all cursor-pointer shadow-sm whitespace-nowrap"
            >
              Sign Up
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex items-center justify-center p-1.5 sm:p-2 rounded-full md:hidden transition-all ${
              isScrolled
                ? 'text-gray-800 bg-gray-100'
                : 'text-white bg-white/10 backdrop-blur-md'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="text-lg sm:text-xl" />
            ) : (
              <FiMenu className="text-lg sm:text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-x-0 top-[52px] sm:top-[68px] z-40 bg-white/95 px-5 py-5 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden border-b border-gray-100 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2.5">
          {/* Mobile Nav Links */}
          {navigationLinks.map(link => {
            const isActive = activeSection === link.label;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.label);
                  setIsMobileMenuOpen(false);
                }}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-black text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <hr className="my-1 border-gray-100" />

          {/* Mobile Login Route Link */}
          <div className="flex items-center justify-between px-2 pt-1">
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold text-gray-800 hover:text-black py-1"
            >
              Already have an account?{' '}
              <span className="underline text-[#5ca822] ">Log In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
