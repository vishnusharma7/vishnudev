import { ArrowLeft, ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Architecture from "../components/Architecture";
import ProjectVisual from "../components/ProjectVisual";
import { projects } from "../data/portfolio";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return <div className="not-found container"><h1>Project not found.</h1><Link to="/">Back home</Link></div>;
  }

  return (
    <div className="project-detail container">
      <Link className="back-link" to="/"><ArrowLeft size={16} /> Back to projects</Link>
      <div className="detail-hero">
        <div>
          <span className="eyebrow">{project.number} — {project.category}</span>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>{project.title}</motion.h1>
          <p>{project.longDescription}</p>
          <div className="hero-actions">
            <a className="primary-button" href={project.live || "#"}>Live demo <ArrowUpRight size={16} /></a>
            <a className="secondary-button" href={project.github || "#"}><Github size={16} /> GitHub</a>
          </div>
        </div>
        <ProjectVisual project={project} />
      </div>

      <div className="detail-grid">
        <section className="detail-card">
          <span className="eyebrow">KEY FEATURES</span>
          <h2>What the product does</h2>
          <div className="feature-list">{project.features.map(f => <div key={f}><CheckCircle2 size={17} /><span>{f}</span></div>)}</div>
        </section>
        <section className="detail-card">
          <span className="eyebrow">TECHNOLOGIES</span>
          <h2>Built with</h2>
          <div className="tag-row large">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
        </section>
      </div>

      <section className="detail-architecture">
        <span className="eyebrow">SYSTEM ARCHITECTURE</span>
        <h2>How the pieces connect</h2>
        <Architecture />
      </section>
    </div>
  );
}
