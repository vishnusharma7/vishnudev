import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "../data/portfolio";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.article
      className={`project-card ${featured ? "featured" : ""}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -7 }}
    >
      <div className="project-topline">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>
      <ProjectVisual project={project} />
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-links">
          <Link to={`/projects/${project.id}`}>View case study <ArrowUpRight size={16} /></Link>
          <a href={project.github || "#"} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
        </div>
      </div>
    </motion.article>
  );
}
