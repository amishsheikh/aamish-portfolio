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
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <p>
                Full Stack Developer with 2 years of professional experience in
                designing and building web applications. Proficient in the MERN
                stack (MongoDB, Express.js, React.js, Node.js) with strong
                skills in REST API development, authentication, responsive UI,
                and deployment on cloud platforms. Adept in Agile methodologies,
                software development life cycle (SDLC), debugging, performance
                optimization, and version control. Seeking a challenging
                Software Engineer / Full Stack Developer role to contribute to
                building scalable, secure, and high-performance applications.
              </p>
              <li>
                Seeking a challenging{" "}
                <strong>Software Engineer / Full Stack Developer role</strong>{" "}
                to contribute technical expertise and innovative solutions.
              </li>
            </ul>

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
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>
                      Full Stack Developer with{" "}
                      <strong>1.8 years of professional experience</strong> in
                      designing and building web applications.
                    </li>
                    <li>
                      Proficient in the <strong>MERN stack</strong> (MongoDB,
                      Express.js, React.js, Node.js).
                    </li>
                    <li>
                      Strong skills in{" "}
                      <strong>
                        REST API development, authentication, responsive UI
                      </strong>
                      , and cloud deployment.
                    </li>
                    <li>
                      Experienced with{" "}
                      <strong>
                        Agile methodologies, SDLC, debugging, performance
                        optimization
                      </strong>
                      , and version control.
                    </li>
                    <li>
                      Adept at delivering{" "}
                      <strong>
                        scalable, secure, and high-performance applications
                      </strong>
                      .
                    </li>
                    <li>
                      Seeking a challenging{" "}
                      <strong>
                        Software Engineer / Full Stack Developer role
                      </strong>{" "}
                      to contribute technical expertise and innovative
                      solutions.
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
