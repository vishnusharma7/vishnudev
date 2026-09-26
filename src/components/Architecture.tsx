import { motion } from "framer-motion";
import { ArrowDown, Database, Globe2, Server } from "lucide-react";

const items = [
  { label: "React + TypeScript", detail: "UI / State / UX", icon: Globe2 },
  { label: "REST API", detail: "HTTP / JSON", icon: Server },
  { label: "Java / Spring Boot", detail: "Business Logic", icon: Server },
  { label: "PostgreSQL", detail: "Persistent Data", icon: Database },
];

export default function Architecture() {
  return (
    <div className="architecture">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div className="arch-step-wrap" key={item.label}>
            <motion.div
              className="arch-step"
              initial={{ opacity: 0, scale: .94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * .12 }}
            >
              <div className="arch-icon"><Icon size={19} /></div>
              <div><strong>{item.label}</strong><span>{item.detail}</span></div>
              <span className="arch-number">0{i + 1}</span>
            </motion.div>
            {i < items.length - 1 && <motion.div className="arch-arrow" animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowDown size={16} /></motion.div>}
          </div>
        );
      })}
    </div>
  );
}
