import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="background-fx" aria-hidden="true">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <svg className="grid-svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="70" height="70" patternUnits="userSpaceOnUse">
            <path d="M70 0H0V70" fill="none" stroke="currentColor" strokeOpacity=".12" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#grid)" />
      </svg>
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.span
          key={i}
          className="floating-dot"
          style={{ left: `${(i * 17 + 7) % 96}%`, top: `${(i * 23 + 8) % 92}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.75, 0.2] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
