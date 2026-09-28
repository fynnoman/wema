"use client";

import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  intensity?: number;
  align?: "left" | "center";
};

export default function ScrollWord({
  text,
  className = "",
  as = "h2",
  intensity = 1,
  align = "left",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const prefers = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.35"],
  });
  const Tag = motion[as] as typeof motion.div;
  const words = text.split(" ");

  return (
    <div
      ref={ref}
      className={`relative ${align === "center" ? "text-center" : ""}`}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <Word
            key={`${word}-${i}`}
            word={word}
            index={i}
            total={words.length}
            intensity={intensity}
            progress={scrollYProgress}
            disabled={!!prefers}
            trailing={i < words.length - 1}
          />
        ))}
      </Tag>
    </div>
  );
}

function Word({
  word,
  index,
  total,
  intensity,
  progress,
  disabled,
  trailing,
}: {
  word: string;
  index: number;
  total: number;
  intensity: number;
  progress: MotionValue<number>;
  disabled: boolean;
  trailing: boolean;
}) {
  const start = (index / total) * intensity;
  const end = Math.min(1, ((index + 1) / total) * intensity);
  const opacity = useTransform(progress, [start, end], [0.4, 1]);
  const y = useTransform(progress, [start, end], [10, 0]);

  return (
    <motion.span
      style={disabled ? undefined : { opacity, y }}
      className="inline-block whitespace-pre"
    >
      {word}
      {trailing ? " " : ""}
    </motion.span>
  );
}
