import { motion } from "framer-motion";

const stats = [
  ["05+", "Featured projects"],
  ["10+", "Technologies"],
  ["03+", "Years learning & building"],
  ["∞", "Curiosity"],
];

export default function Stats() {
  return (
    <div className="stats-grid">
      {stats.map(([value, label], i) => (
        <motion.div
          className="stat-card"
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * .08 }}
        >
          <strong>{value}</strong>
          <span>{label}</span>
        </motion.div>
      ))}
    </div>
  );
}
