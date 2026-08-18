import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript } from "react-icons/si";
import { ContactFormState } from "../types";

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const TYPING_PHRASES = [
    { text: "Building with React", icon: SiReact, color: "text-cyan-400" },
    { text: "Powered by Node.js", icon: SiNodedotjs, color: "text-green-400" },
    { text: "Backed by MongoDB", icon: SiMongodb, color: "text-emerald-400" },
    {
      text: "Styled with TypeScript",
      icon: SiTypescript,
      color: "text-blue-400",
    },
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex].text;
    const typingSpeed = isDeleting ? 35 : 55;
    const pauseBeforeDelete = 1400;
    const pauseBeforeNext = 300;

    if (!isDeleting && displayText === currentPhrase) {
      const pause = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === "") {
      const next = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }, pauseBeforeNext);
      return () => clearTimeout(next);
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentPhrase.slice(0, prev.length - 1)
          : currentPhrase.slice(0, prev.length + 1),
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  const currentPhraseData = TYPING_PHRASES[phraseIndex];
  const CurrentIcon = currentPhraseData.icon;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMsg(
          "Something went wrong. Please try again or email me directly.",
        );
        console.error("Web3Forms error:", result);
      }
    } catch (err) {
      setErrorMsg(
        "Couldn't send your message. Check your connection and try again.",
      );
      console.error("Submission failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mmohid069@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="text-cyan-400">
            <Mail size={24} className="stroke-[2.2]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
        </motion.div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Social */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              I'm currently open for new opportunities. Whether you have a
              project in mind, a question about my work, or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              {/* Email item */}
              <div
                onClick={handleCopyEmail}
                className="flex items-center gap-4 group cursor-pointer p-2 -ml-2 rounded-lg hover:bg-[#161b22]/60 transition-all duration-200 hover:-translate-y-0.5"
                title="Click to copy email address"
              >
                <div className="w-11 h-11 rounded-lg bg-[#161b22] border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] transition-all">
                  <Mail size={18} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-300 font-mono text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                    mmohid069@gmail.com
                  </span>
                  {copiedEmail ? (
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <Check size={14} /> Copied
                    </span>
                  ) : (
                    <Copy
                      size={13}
                      className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-4 p-2 -ml-2">
                <div className="w-11 h-11 rounded-lg bg-[#161b22] border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-300 font-mono text-sm sm:text-base">
                  Lahore, Punjab, PK
                </span>
              </div>
            </div>

            {/* Social Link Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/MohidWebDev"
                target="_blank"
                rel="noreferrer"
                id="social-github-btn"
                className="w-11 h-11 rounded-lg bg-[#161b22] border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] active:scale-95"
                aria-label="GitHub Profile"
              >
                <Github size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohid-yaseen-eng-dev/"
                target="_blank"
                rel="noreferrer"
                id="social-linkedin-btn"
                className="w-11 h-11 rounded-lg bg-[#161b22] border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] active:scale-95"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={19} />
              </a>
            </div>

            {/* Typing Status Line */}
            <div className="flex-1 flex flex-col items-center justify-center gap-3 pt-14 text-slate-300 font-mono text-base sm:text-lg text-center">
              <motion.div
                key={phraseIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={currentPhraseData.color}
                style={{ filter: `drop-shadow(0 0 20px currentColor)` }}
              >
                <CurrentIcon size={40} />
              </motion.div>
              <span>
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 animate-pulse" />
              </span>
            </div>
          </motion.div>

          {/* Right Column: Send Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-[#161b22] border border-cyan-500/20 rounded-xl p-7 sm:p-9 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="py-8 px-4 bg-emerald-950/30 border border-emerald-500/30 rounded-lg text-center flex flex-col items-center justify-center space-y-3 animate-fadeIn">
                  <CheckCircle size={36} className="text-emerald-400" />
                  <p className="text-white font-bold text-lg">
                    Message Sent Successfully!
                  </p>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Thank you for reaching out. I'll get back to your inquiry as
                    soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name-input"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#0d1117] border border-slate-700/80 rounded-md px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email-input"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#0d1117] border border-slate-700/80 rounded-md px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message-input"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      className="w-full bg-[#0d1117] border border-slate-700/80 rounded-md px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className="flex items-center gap-2 py-3 px-4 bg-red-950/30 border border-red-500/30 rounded-lg text-red-400 text-sm animate-fadeIn">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    id="submit-contact-btn"
                    className="w-full bg-linear-to-r from-[#00f2fe] via-[#00e1fe] to-[#10b981] hover:opacity-90 text-slate-950 font-bold py-3.5 px-6 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(0,242,254,0.45)] active:scale-[0.99] flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-block animate-pulse">
                        Sending message...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
