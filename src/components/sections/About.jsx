import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "ShadCN UI",
    "Vite",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Microservices",
    "NeonDB",
    "Firebase",
  ];

  const toolsAndOthers = [
    "Clerk",
    "JWT",
    "Auth.js",
    "Git & GitHub",
    "Postman",
    "Docker",
    "Vercel/Netlify",
    "OpenAI API",
    "Agile",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-purple-900/10"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <RevealOnScroll>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Intro Paragraph */}
          <p className="text-xl md:text-2xl text-gray-300 text-center mb-20 max-w-4xl mx-auto leading-relaxed">
            Passionate{" "}
            <strong className="text-blue-400">Full Stack Developer</strong> at{" "}
            <strong className="text-blue-400">
              Tata Consultancy Services (TCS)
            </strong>{" "}
            with over <strong className="text-blue-400">2 years</strong> of
            experience building scalable MERN applications. I deliver
            high-impact solutions — automating workflows, optimizing
            performance, and creating intuitive user experiences.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Frontend",
                skills: frontendSkills,
                gradient: "from-blue-400 to-cyan-400",
              },
              {
                title: "Backend",
                skills: backendSkills,
                gradient: "from-cyan-400 to-purple-400",
              },
              {
                title: "Tools & More",
                skills: toolsAndOthers,
                gradient: "from-purple-400 to-pink-400",
              },
            ].map((category) => (
              <div
                key={category.title}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:-translate-y-4 hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all duration-500"
              >
                <h3
                  className={`text-2xl font-bold mb-6 text-center bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/10 text-gray-300 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:text-white transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Work Experience
              </h3>
              <div className="text-gray-300 space-y-4">
                <h4 className="text-2xl font-bold text-white">
                  Assistant System Engineer
                </h4>
                <p className="text-blue-400 font-medium">
                  Tata Consultancy Services (TCS)
                </p>
                <p className="text-sm">Dec 2023 – Present</p>
                <ul className="mt-6 space-y-3 text-gray-300">
                  <li>
                    • Engineered MERN apps reducing manual effort by{" "}
                    <strong className="text-blue-400">25%</strong>
                  </li>
                  <li>
                    • Built REST APIs improving efficiency by{" "}
                    <strong className="text-blue-400">20%</strong>
                  </li>
                  <li>• Created real-time dashboards with React & Tailwind</li>
                  <li>• Implemented secure JWT & RBAC authentication</li>
                  <li>
                    • Accelerated release cycles by{" "}
                    <strong className="text-blue-400">15%</strong> in Agile
                    teams
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </h3>
              <div className="text-gray-300">
                <h4 className="text-2xl font-bold text-white">
                  B.E. Computer Engineering
                </h4>
                <p className="text-blue-400 font-medium">
                  RTMNU Nagpur University
                </p>
                <p className="text-sm">2019 – 2023</p>
                <p className="mt-6 text-3xl font-bold text-cyan-400">
                  83% Aggregate
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
