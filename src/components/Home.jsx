import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

function Home() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="Home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div
          className={`space-y-6 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Greeting */}
          <div className="animate-slide-up">
            <p
              className={`text-sm sm:text-base font-medium mb-2 ${
                isDark ? "text-indigo-300" : "text-indigo-700"
              }`}
            >
              Full Stack Developer · DevOps Engineer
            </p>
          </div>

          {/* Name */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="inline-block">
                <span>{`Kishlay Chandan`}</span>
              </span>
            </h1>
          </div>

          {/* Title */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p
              className={`text-lg sm:text-xl md:text-2xl font-semibold mb-6 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Building reliable web products and automation systems.
            </p>
          </div>

          {/* Description */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p
              className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I work across React, Node.js and modern DevOps tooling to ship
              performant applications, automated pipelines, and strong
              observability.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up flex flex-col items-center gap-12" style={{ animationDelay: '0.4s' }}>
            <Link
              to="About Me"
              smooth={true}
              duration={800}
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-indigo-600 rounded-full transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
            >
              <span className="flex items-center">
                View my work
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>

            {/* Scroll Indicator - Positioned directly after button */}
            <div className="animate-bounce flex flex-col items-center">
              <span className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                isDark ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Scroll Down
              </span>
              <div className={`w-6 h-10 rounded-full border-2 flex justify-center p-1 ${
                isDark ? 'border-slate-700' : 'border-slate-300'
              }`}>
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-scroll-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
