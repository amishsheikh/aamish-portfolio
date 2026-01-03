import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-purple-900/10"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "AI Invoice Generator",
                desc: "Full-stack AI-powered platform that extracts invoice data from text using OpenAI. Features secure Clerk authentication and RESTful APIs.",
                tech: [
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "OpenAI",
                  "Clerk",
                  "Tailwind",
                ],
                live: "https://ai-invoice-generator-kz53.vercel.app/",
                github: "https://github.com/amishsheikh/AI-Invoice-Generator",
                img: "/screenshots/ai-invoice.png",
              },
              {
                title: "TinyLink — URL Shortener",
                desc: "Scalable full-stack service with custom aliases, analytics, and optimized MongoDB queries for fast redirection.",
                tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
                live: "https://aganitha-ai-tiny-link-assignm-git-068dff-amish-sheikhs-projects.vercel.app/",
                github: "https://github.com/amishsheikh/tiny-link",
                img: "/screenshots/tiny-link.png",
              },
              {
                title: "Movie Search Website",
                desc: "Responsive movie discovery app with advanced search, filters, and trailer player. Reduced API calls by 15%.",
                tech: ["React", "Vite", "Tailwind", "Appwrite", "TMDB API"],
                live: "https://harmonious-speculoos-bbc1e6.netlify.app",
                github: "https://github.com/amishsheikh/movie-web",
                img: "/screenshots/movie-search.png",
              },
              {
                title: "E-Commerce Website (Frontend)",
                desc: "Responsive product listing with filtering, cart functionality, and modern UI.",
                tech: ["React", "Tailwind CSS"],
                live: "https://agent-69465c1c3b87602adcd3c4b7--shoppingshopify.netlify.app/",
                github: "https://github.com/amishsheikh/ecommerce-frontend",
                img: "/screenshots/e-com.png",
              },
              {
                title: "Razorpay UI Clone",
                desc: "Pixel-perfect recreation of Razorpay landing page using advanced Tailwind layouts and animations.",
                tech: ["React", "Tailwind CSS"],
                live: "https://razorpay-clone-demo.netlify.app",
                github: "https://github.com/amishsheikh/razorpay-clone",
                img: "/screenshots/razor-pay.png",
              },
              {
                title: "JobScibe — AI-Powered Job Platform",
                desc: "Full-stack platform with resume optimization, keyword matching, and direct job applications via Jobble API.",
                tech: [
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "OpenAI",
                  "JWT",
                  "Tailwind",
                ],
                live: "https://jobscibe-project-1.onrender.com",
                github: "https://github.com/amishsheikh/JobScibe-Project",
                img: "/screenshots/jobscibe.png",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="relative group p-[4px] rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-[length:400%_400%] animate-border-move hover:animate-border-move-fast transition-all duration-500"
              >
                {/* Inner Card - Mobile Safe */}
                <div className="h-full p-6 rounded-3xl bg-gray-950/95 border border-white/20 group-hover:border-purple-500/60 group-hover:-translate-y-4 group-hover:shadow-[0_25px_50px_rgba(139,92,246,0.5)] transition-all duration-500">
                  <img
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover rounded-2xl mb-5 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/10 text-blue-300 py-2 px-4 rounded-full text-xs font-medium hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 font-semibold hover:text-cyan-300 flex items-center gap-2 transition"
                    >
                      Live Demo →
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Moving Border Animation */}
      <style jsx>{`
        @keyframes border-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes border-move-fast {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 400% 50%;
          }
        }

        .animate-border-move {
          background-size: 400% 400%;
          animation: border-move 12s ease infinite;
        }

        .hover\\:animate-border-move-fast:hover {
          animation: border-move-fast 3s ease infinite;
        }
      `}</style>
    </section>
  );
};
