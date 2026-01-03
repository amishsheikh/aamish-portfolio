import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <RevealOnScroll>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Profile Image - Positioned below navbar */}
          <div className="mx-auto mb-12 w-36 h-36 md:w-48 md:h-48 rounded-3xl border-4 border-white/20 shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-500">
            <img
              src="/profile-photo.jpg" // Add your photo to public/profile-photo.jpg
              alt="Amish Sheikh - Full Stack Developer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.src =
                  "https://jobscibe-project-1.onrender.com/team.jpg"; // Fallback
              }}
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-white to-cyan-400 bg-clip-text text-transparent leading-tight">
            Amish Sheikh
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            MERN Stack Full Stack Developer
          </h2>
          <p className="text-xl md:text-2xl text-blue-100/90 font-medium mb-2">
            Tata Consultancy Services (TCS)
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building scalable web apps with{" "}
            <strong>React.js, Node.js, Express.js & MongoDB</strong>.<br />
            Delivered internal tools at TCS reducing manual effort by{" "}
            <strong>25%</strong> and boosting efficiency by <strong>20%</strong>
            .
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">
                2+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-1">
                6
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                Live Projects
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-purple-400 mb-1">
                25%
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                Efficiency Gains
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">
                TCS
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                Current Role
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center gap-3"
            >
              <span>View Projects</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="group border-2 border-blue-500/50 bg-white/5 backdrop-blur-sm text-blue-400 py-4 px-8 rounded-2xl font-semibold text-lg hover:-translate-y-2 hover:border-blue-400 hover:text-white hover:bg-blue-500/20 shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <span>Contact Me</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.27 6.73a3 3 0 011.23 2.27h7a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2a3 3 0 013-3h.27"
                />
              </svg>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-8 text-gray-400">
            <a
              href="https://github.com/amishsheikh"
              target="_blank"
              rel="noreferrer"
              className="group hover:text-white transition-all duration-300 hover:scale-125"
            >
              <svg
                className="w-10 h-10 group-hover:fill-current group-hover:text-blue-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/amish-sheikh-854455212/"
              target="_blank"
              rel="noreferrer"
              className="group hover:text-white transition-all duration-300 hover:scale-125"
            >
              <svg
                className="w-10 h-10 group-hover:fill-current group-hover:text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9.277h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9.277h3.564v11.175zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="https://aamish.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="group hover:text-white transition-all duration-300 hover:scale-125"
            >
              <svg
                className="w-10 h-10 group-hover:fill-current group-hover:text-cyan-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.828L18 10.828V18h-4v-6H10v6H6v-7.172L12 4.828z" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
