import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench } from "lucide-react";

const icons = { Frontend: Code2, Backend: Server, Database, Tools: Wrench };

export default function SkillGroup({ name, skills }: { name: keyof typeof icons; skills: string[] }) {
  const Icon = icons[name];
  return (
    <motion.div
      className="skill-group"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <div className="skill-heading"><Icon size={18} /><span>{name}</span></div>
      <div className="skill-list">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </motion.div>
  );
}
