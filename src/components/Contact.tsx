import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <motion.div className="contact-copy" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Let's build something <span>amazing together.</span></h2>
          <p>I’m open to interesting product, frontend and full-stack opportunities. Have an idea or role in mind? Start a conversation.</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          </div>
        </motion.div>

        <motion.form className="contact-form glass-card" onSubmit={submit} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="form-title"><span>Send me a message</span><ArrowUpRight size={18} /></div>
          <label>Name<input required placeholder="Your name" /></label>
          <label>Email<input required type="email" placeholder="you@example.com" /></label>
          <label>Message<textarea required rows={5} placeholder="Tell me a little about your project or opportunity..." /></label>
          <button className="primary-button" type="submit">{sent ? "Message prepared ✓" : "Send message"} <Send size={16} /></button>
          {sent && <small className="form-note">Thanks! For a real submission, connect this form to Formspree, EmailJS or your backend endpoint.</small>}
        </motion.form>
      </div>
    </section>
  );
}
