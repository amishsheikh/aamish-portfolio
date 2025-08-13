import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Movie Search Website */}
            <div
              className="relative p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              onMouseEnter={() => setTooltip((t) => ({ ...t, visible: true }))}
              onMouseLeave={() => setTooltip((t) => ({ ...t, visible: false }))}
              onMouseMove={(e) =>
                setTooltip({
                  visible: true,
                  x: e.nativeEvent.offsetX + 15,
                  y: e.nativeEvent.offsetY + 15,
                })
              }
            >
              <h3 className="text-xl font-bold mb-2">Movie Search Website</h3>
              <p className="text-gray-400 mb-4">
                Responsive movie discovery app with search, sorting, and
                filtering. Integrated TMDB API for real-time data and Appwrite
                for backend storage.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vite", "React", "Tailwind CSS", "Appwrite", "TMDB API"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://harmonious-speculoos-bbc1e6.netlify.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/amishsheikh/movie-search-website"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>

              {/* Floating tooltip */}
              {tooltip.visible && (
                <div
                  className="absolute z-50 px-3 py-1 text-xs text-white bg-black/80 rounded shadow-lg pointer-events-none"
                  style={{
                    top: tooltip.y,
                    left: tooltip.x,
                  }}
                >
                  Please open with VPN to view this website
                </div>
              )}
            </div>

            {/* E-Commerce Website */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                E-Commerce Website (Frontend)
              </h3>
              <p className="text-gray-400 mb-4">
                Responsive product listing interface with filtering and shopping
                cart flow.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://ecommerce-frontend-demo.netlify.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/amishsheikh/ecommerce-frontend"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Razorpay UI Clone */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Razorpay UI Clone</h3>
              <p className="text-gray-400 mb-4">
                Recreated Razorpay landing page to practice advanced Tailwind
                layouts and animations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://razorpay-clone-demo.netlify.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/amishsheikh/razorpay-clone"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
