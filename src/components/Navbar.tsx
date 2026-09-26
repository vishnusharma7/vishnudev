import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";

type Props = { theme: "dark" | "light"; onThemeToggle: () => void };

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar({ theme, onThemeToggle }: Props) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">VS</span>
          <span className="brand-name">VISHNU<span>.DEV</span></span>
        </Link>

        <div className="desktop-nav">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-button" onClick={onThemeToggle} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="small-cta" href="/Vishnu-Sharma-Resume.pdf">Resume</a>
          <button className="mobile-menu icon-button" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              {links.map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)}>{label}</button>
              ))}
              <a href="/Vishnu-Sharma-Resume.pdf" className="mobile-resume">Download Resume</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
