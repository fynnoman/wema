"use client";

import { motion } from "framer-motion";

type Props = {
  words: string[];
  className?: string;
  duration?: number;
};

export default function Marquee({
  words,
  className = "",
  duration = 40,
}: Props) {
  const list = [...words, ...words];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap gap-14"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {list.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight"
          >
            {w}
            <span className="ml-14 inline-block h-2 w-2 rounded-full align-middle bg-current opacity-40" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
