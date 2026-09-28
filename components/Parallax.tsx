"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  priority?: boolean;
  scale?: [number, number];
  overlay?: string;
};

export default function Parallax({
  src,
  alt,
  className = "",
  strength = 90,
  priority = false,
  scale = [1.15, 1.0],
  overlay,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  const s = useTransform(scrollYProgress, [0, 1], scale);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale: s }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 1400px, 100vw"
          className="object-cover"
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 pointer-events-none" style={{ background: overlay }} />
      )}
    </div>
  );
}
