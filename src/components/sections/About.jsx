import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "ShadCN UI",
    "HTML",
    "CSS",
    "JavaScript",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "NeonDB",
    "Firebase (Basics)",
    "REST APIs",
  ];

  const otherSkills = [
    "Clerk Auth",
    "Auth.js",
    "JWT",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "DevPlus (TCS Internal)",
    "Functional Testing",
    "Manual Testing",
    "Defect Tracking",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Full-stack developer with <strong>1.8 years of experience</strong>{" "}
              in functional testing and scripting at TCS. Skilled in the MERN
              stack, REST API integration, and responsive UI design. Passionate
              about building scalable, high-performance web applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Skills */}
            <div className="mt-6 rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.E. in Computer Science & Engineering</strong> –
                  RTMNU University, Nagpur (2019–2023)
                </li>
                <li>Percentage: 83%</li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Assistant System Engineer – Tata Consultancy Services (Dec
                    2023 – Present)
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Executed functional testing of enterprise applications
                      ensuring feature accuracy and stability.
                    </li>
                    <li>
                      Developed and optimized test scripts using DevPlus,
                      improving coverage and efficiency.
                    </li>
                    <li>
                      Collaborated with developers and business analysts for
                      defect resolution and requirement validation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
