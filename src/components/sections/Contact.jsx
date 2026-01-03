import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        toast.error("Oops! Something went wrong. Please try again.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <RevealOnScroll>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all duration-300">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-blue-500/5 transition-all"
                    placeholder="Your Name..."
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-blue-500/5 transition-all"
                    placeholder="Your Email..."
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-blue-500/5 transition-all"
                    placeholder="Your Message..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-2xl hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Let's Connect */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all duration-300 text-center">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I'm open to new opportunities, collaborations, or just chatting
                about tech. Reach out!
              </p>

              <div className="flex justify-center gap-8 text-4xl text-gray-400">
                <a
                  href="https://www.linkedin.com/in/amish-sheikh-854455212/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/Amishsheikh5"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-400 hover:scale-110 transition-all duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/amishsheikh"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:sheikhamish71@gmail.com"
                  className="hover:text-red-400 hover:scale-110 transition-all duration-300"
                >
                  <MdEmail />
                </a>
              </div>

              <p className="mt-12 text-sm text-gray-500">
                © 2026 Amish Sheikh. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </section>
  );
};
