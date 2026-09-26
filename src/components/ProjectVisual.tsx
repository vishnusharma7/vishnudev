import { BarChart3, Code2, Database, Image as ImageIcon, MessageCircle, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/portfolio";

export default function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "food") {
    return (
      <div className="project-visual food-visual">
        <div className="food-glow" />
        <div className="food-plate">🍛</div>
        <div className="food-card"><span>RECIPE</span><strong>Butter Chicken</strong><small>Indian • 35 min</small></div>
        <div className="floating-ui ui-one"><ImageIcon size={16} /> image</div>
        <div className="floating-ui ui-two">Ingredients · 12</div>
      </div>
    );
  }

  if (project.visual === "social") {
    return (
      <div className="project-visual social-visual">
        <div className="social-head"><span>Let's Connect</span><small>● online</small></div>
        <div className="chat-row"><div className="avatar a1">A</div><div className="bubble">Hey! Great to connect 👋</div></div>
        <div className="chat-row reverse"><div className="avatar a2">V</div><div className="bubble mine">Let's build something.</div></div>
        <div className="social-bottom"><MessageCircle size={15} /> <span>New message</span></div>
      </div>
    );
  }

  if (project.visual === "portfolio") {
    return (
      <div className="project-visual portfolio-visual">
        <div className="mini-browser">
          <div className="mini-top"><span /><span /><span /></div>
          <div className="mini-hero"><b>VISHNU</b><small>Software Engineer</small><div /></div>
          <div className="mini-grid"><span /><span /><span /></div>
        </div>
      </div>
    );
  }

  if (project.visual === "code") {
    return (
      <div className="project-visual code-visual">
        <Code2 size={40} />
        <div className="code-lines"><span /><span /><span /><span /><span /></div>
        <div className="code-chip"><Database size={13} /> API + DB</div>
      </div>
    );
  }

  return (
    <div className="project-visual dashboard-visual">
      <div className="dash-top"><span>Augmentation Dashboard</span><BarChart3 size={17} /></div>
      <div className="dash-stats"><b>₹ 2.4M</b><b>120</b><b>85</b><b>45</b></div>
      <div className="chart">
        {[38, 62, 46, 76, 56, 86, 68, 92].map((h, i) => (
          <motion.i key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: i * .06 }} />
        ))}
      </div>
      <div className="dash-footer"><span /><span /><span /></div>
    </div>
  );
}
