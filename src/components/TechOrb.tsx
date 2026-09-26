import { motion } from "framer-motion";

const nodes = [
  { label: "React", x: 16, y: 25, icon: "⚛" },
  { label: "Java", x: 72, y: 17, icon: "☕" },
  { label: "API", x: 52, y: 50, icon: "⌁" },
  { label: "Spring", x: 18, y: 73, icon: "●" },
  { label: "SQL", x: 75, y: 75, icon: "◈" },
];

export default function TechOrb() {
  return (
    <div className="tech-orb">
      <motion.div className="orb-core" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
        <span>V</span>
      </motion.div>
      <svg className="orb-lines" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="lineGradient" x1="0" x2="1">
            <stop stopColor="#6ee7ff" />
            <stop offset=".5" stopColor="#7c5cff" />
            <stop offset="1" stopColor="#f472d0" />
          </linearGradient>
        </defs>
        <path d="M80 125L360 85L260 250L95 365L375 375L360 85" fill="none" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="7 8" />
        <circle cx="250" cy="250" r="185" fill="none" stroke="url(#lineGradient)" strokeOpacity=".25" />
        <circle cx="250" cy="250" r="120" fill="none" stroke="url(#lineGradient)" strokeOpacity=".2" />
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="tech-node"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ y: [0, i % 2 ? -9 : 9, 0] }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity }}
        >
          <strong>{node.icon}</strong>
          <span>{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
