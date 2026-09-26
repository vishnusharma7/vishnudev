import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundFX from "../components/BackgroundFX";
import CodeWindow from "../components/CodeWindow";
import TechOrb from "../components/TechOrb";
import SectionHeading from "../components/SectionHeading";
import Stats from "../components/Stats";
import SkillGroup from "../components/SkillGroup";
import ProjectCard from "../components/ProjectCard";
import Architecture from "../components/Architecture";
import ExperienceTimeline from "../components/ExperienceTimeline";
import GithubPanel from "../components/GithubPanel";
import Contact from "../components/Contact";
import { achievements, profile, projects, skills } from "../data/portfolio";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <section className="hero container">
        <div className="hero-copy">
          <motion.div className="status-pill" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="status-dot" /> Open to opportunities <Sparkles size={13} />
          </motion.div>
          <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .1 }}>HELLO, I'M</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            VISHNU<br /><span>SHARMA</span>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }}>Software Engineer</motion.h2>
          <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
            {profile.headline} <span>{profile.subline}</span>
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }}>
            <a className="primary-button" href="#projects">View my work <ArrowUpRight size={17} /></a>
            <a className="secondary-button" href="/Vishnu-Sharma-Resume.pdf"><Download size={17} /> Download resume</a>
          </motion.div>
          <div className="hero-stack">{["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL"].map(x => <span key={x}>{x}</span>)}</div>
        </div>

        <div className="hero-visual">
          <TechOrb />
          <CodeWindow />
        </div>
      </section>

      <div className="container"><Stats /></div>

      <section id="about" className="section">
        <div className="container about-grid">
          <div>
            <SectionHeading eyebrow="01 — ABOUT" title="Building products, not just interfaces." description="I enjoy turning real requirements into clean, responsive and maintainable software." />
            <div className="about-copy">
              <p>I’m a software engineer with a frontend-first mindset and practical full-stack experience. My work sits between polished user interfaces and the systems that power them.</p>
              <p>From React component architecture to Java services, REST APIs and relational databases, I like understanding the complete path from a user action to the data behind it.</p>
            </div>
            <a className="text-link" href="#experience">Explore my journey <ArrowUpRight size={16} /></a>
          </div>
          <div className="about-card">
            <div className="about-avatar">VS</div>
            <span className="eyebrow">ENGINEERING MINDSET</span>
            <h3>Build. Measure. Improve.</h3>
            <p>Good software should be clear to use, predictable to maintain and thoughtful under the hood.</p>
            <div className="mini-metrics"><span><b>UI</b> Product thinking</span><span><b>API</b> Clean contracts</span><span><b>DB</b> Reliable data</span></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="02 — TECH STACK" title="Technologies I work with" description="A practical stack for building modern, scalable and efficient applications." />
          <div className="skills-grid">
            {(Object.entries(skills) as [keyof typeof skills, string[]][]).map(([name, list]) => <SkillGroup key={name} name={name as keyof typeof skills & "Frontend"} skills={list} />)}
          </div>
          <div className="quote-card"><span>&lt;/&gt;</span><strong>The right tool for the right problem.</strong><i /></div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <SectionHeading eyebrow="03 — SELECTED WORK" title="Projects that solve real problems." description="A selection of frontend, full-stack and product experiences." />
          <div className="projects-grid">
            {projects.map((project, i) => <ProjectCard key={project.id} project={project} featured={i === 0} />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container architecture-grid">
          <div>
            <SectionHeading eyebrow="04 — HOW I BUILD" title="From interface to database." description="A simple architecture view of how a modern product can connect its layers." />
            <p className="muted-copy">The visual is intentionally simple: a user action starts in the interface, crosses a clear API boundary, reaches business logic and ends in persistent data.</p>
          </div>
          <Architecture />
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <SectionHeading eyebrow="05 — EXPERIENCE" title="My professional journey" description="A timeline of learning, building and working across frontend and full-stack development." />
          <ExperienceTimeline />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container achievements-grid">
          <div>
            <SectionHeading eyebrow="06 — EDUCATION & ACHIEVEMENTS" title="The foundation behind the work." />
            <div className="achievement-list">
              {achievements.map((a, i) => (
                <motion.div className="achievement" key={a.title} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
                  <span>0{i + 1}</span><div><strong>{a.title}</strong><small>{a.detail}</small></div>
                </motion.div>
              ))}
            </div>
          </div>
          <GithubPanel />
        </div>
      </section>

      <Contact />

      <div className="container final-cta">
        <div className="final-cta-glow" />
        <span className="eyebrow">NEXT STEP</span>
        <h2>Have a problem worth solving?</h2>
        <p>Let's turn it into a product people enjoy using.</p>
        <a className="primary-button" href="#contact">Start a conversation <ArrowUpRight size={17} /></a>
        <ArrowDown className="final-arrow" size={20} />
      </div>
    </>
  );
}
