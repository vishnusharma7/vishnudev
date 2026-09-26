import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

export default function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experience.map((item, i) => (
        <motion.article
          className="timeline-item"
          key={item.title}
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ delay: i * .12 }}
        >
          <div className="timeline-dot" />
          <div className="timeline-period">{item.period}</div>
          <div className="timeline-content">
            <span className="eyebrow">{item.company}</span>
            <h3>{item.title}</h3>
            <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            <div className="tag-row">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
