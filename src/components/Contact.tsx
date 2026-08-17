import React, { useState } from "react";
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
} from "lucide-react";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@architect.io");
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
                    hello@architect.io
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
                  San Francisco, CA
                </span>
              </div>
            </div>

            {/* Social Link Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                id="social-github-btn"
                className="w-11 h-11 rounded-lg bg-[#161b22] border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] active:scale-95"
                aria-label="GitHub Profile"
              >
                <Github size={19} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                id="social-linkedin-btn"
                className="w-11 h-11 rounded-lg bg-[#161b22] border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] active:scale-95"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={19} />
              </a>
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
