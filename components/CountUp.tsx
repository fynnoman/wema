"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type Props = {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  format?: (n: number) => string;
  className?: string;
};

export default function CountUp({
  from = 0,
  to,
  duration = 2.2,
  suffix = "",
  prefix = "",
  format,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const mv = useMotionValue(from);
  const spring = useSpring(mv, {
    damping: 26,
    stiffness: 60,
    mass: 0.8,
  });
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  const rendered = format
    ? format(display)
    : display.toLocaleString("de-DE");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {rendered}
      {suffix}
    </span>
  );
}
