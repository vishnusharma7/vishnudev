import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div><strong>VS<span>.</span></strong><small>Software Engineer</small></div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={16} /></a>
        </div>
        <p>© {new Date().getFullYear()} Vishnu Sharma. Built with React + TypeScript.</p>
      </div>
    </footer>
  );
}
