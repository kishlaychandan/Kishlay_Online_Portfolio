import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = location.pathname === '/';
  const showNavSurface = scrolled || !isHomePage || isOpen;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Professional', path: '/professional-work' },
    { name: 'Certificates', path: '/certificates' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const homeElement = document.getElementById('Home');
        if (homeElement) {
          homeElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const homeElement = document.getElementById('Home');
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const isActive = (item) => {
    // Avoid highlighting both Home and Work on "/"
    if (item.name === 'Work') return false;
    return location.pathname === item.path;
  };

  const handleNavItemClick = (item) => {
    setIsOpen(false);

    if (item.name === 'Home') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (item.name === 'Work') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById('Work');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        const el = document.getElementById('Work');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    // Other routes
    if (location.pathname !== item.path) {
      navigate(item.path);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 ease-in-out ${
        showNavSurface
          ? isDark
            ? 'py-2 bg-slate-950/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
            : 'py-2 bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(99,102,241,0.05)]'
          : 'py-4 bg-transparent'
      }`}
    >
      {/* Scroll Color Glow Effect */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          showNavSurface ? 'opacity-100' : 'opacity-0'
        } ${
          isDark 
            ? 'bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5' 
            : 'bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10'
        }`}
      />
      
      {/* Scroll Gradient Border Effect */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-1000 ease-in-out bg-gradient-to-r from-transparent via-indigo-500 to-transparent ${
          scrolled ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}`}>
          {/* Logo/Brand */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className={`flex items-center transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <span
                className={`text-2xl md:text-3xl font-black transition-all duration-500 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400' 
                    : isDark 
                      ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400'
                      : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'
                } bg-clip-text text-transparent group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]`}
              >
                KC
              </span>
              <span
                className={`ml-2 text-lg md:text-xl font-bold transition-all duration-300 ${
                  scrolled
                    ? isDark ? 'text-indigo-400' : 'text-indigo-600'
                    : isDark ? 'text-white' : 'text-gray-900'
                } hidden sm:block`}
              >
                Kishlay Chandan
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = isActive(item);

              return (
                    <RouterLink
                      key={item.name}
                      to={item.path}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 relative group overflow-hidden ${
                        active
                          ? isDark
                            ? 'text-white bg-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                            : 'text-indigo-600 bg-indigo-50 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                          : isDark
                          ? 'text-gray-400 hover:text-white hover:bg-white/5'
                          : 'text-gray-600 hover:text-indigo-600 hover:bg-black/5'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavItemClick(item);
                      }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {active && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
                      )}
                      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </RouterLink>
              );
            })}
      </div>

          {/* Right side - Theme Toggle & Mobile Menu Button */}
          <div className="relative z-[10000] flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'
              }`}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
              {isDark ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-[10001] md:hidden p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`relative z-[10000] md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`py-4 space-y-2 border-t transition-colors duration-300 ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            {navItems.map((item) => {
              const active = isActive(item);

              return (
                <RouterLink
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    active
                      ? isDark
                        ? 'text-purple-400 bg-purple-400/10'
                        : 'text-purple-600 bg-purple-100'
                      : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item);
                  }}
                >
                  {item.name}
                </RouterLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
