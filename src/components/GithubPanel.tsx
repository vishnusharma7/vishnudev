import { motion } from "framer-motion";
import { Github, GitFork, Star } from "lucide-react";
import { profile } from "../data/portfolio";

const cells = Array.from({ length: 98 }, (_, i) => (i * 7 + 3) % 5);

export default function GithubPanel() {
  return (
    <motion.div className="github-panel" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="github-head">
        <div>
          <span className="eyebrow">GITHUB ACTIVITY</span>
          <h3>Open source & contributions</h3>
          <p>Code, experiments and product work.</p>
        </div>
        <a href={profile.github} target="_blank" rel="noreferrer" className="outline-button"><Github size={17} /> GitHub</a>
      </div>
      <div className="contribution-grid">
        {cells.map((level, i) => <span key={i} className={`level-${level}`} />)}
      </div>
      <div className="github-stats">
        <div><strong>Projects</strong><span>Full-stack + frontend</span></div>
        <div><strong>Focus</strong><span>Product engineering</span></div>
        <div><strong>Deploy</strong><span>Vercel / Netlify / Render</span></div>
      </div>
      <div className="repo-row">
        <div><Github size={17} /><span>vishnusharma7</span></div>
        <div><Star size={15} /> Repositories</div>
        <div><GitFork size={15} /> Experiments</div>
      </div>
    </motion.div>
  );
}
