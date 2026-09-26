import { motion } from "framer-motion";

export default function CodeWindow() {
  const lines = [
    ["const", " engineer", " = ", "{", ""],
    ["  name", ": ", '"Vishnu Sharma",', ""],
    ["  stack", ": ", '["React", "Java", "Spring Boot"],', ""],
    ["  focus", ": ", '"Product + Engineering",', ""],
    ["  status", ": ", '"building...",', ""],
    ["}", "", "", "", ""],
  ];

  return (
    <motion.div
      className="code-window"
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      <div className="window-bar">
        <span /><span /><span />
        <small>developer.ts</small>
      </div>
      <div className="code-body">
        {lines.map((line, i) => (
          <div className="code-line" key={i}>
            <em>{String(i + 1).padStart(2, "0")}</em>
            <code>
              {line.map((part, j) => (
                <span key={j} className={`syntax s${j}`}>{part}</span>
              ))}
            </code>
          </div>
        ))}
        <div className="cursor-line"><i /></div>
      </div>
    </motion.div>
  );
}
