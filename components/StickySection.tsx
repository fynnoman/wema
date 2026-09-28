"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, type ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
  overlay?: string;
  minHeight?: string;
  align?: "left" | "right" | "center";
};

export default function StickySection({
  src,
  alt,
  children,
  overlay = "linear-gradient(180deg, rgba(10,21,34,0.65) 0%, rgba(10,21,34,0.85) 100%)",
  minHeight = "200vh",
  align = "left",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 1, 1, 0.9]);
  const contentX = align === "right" ? "justify-end" : align === "center" ? "justify-center" : "justify-start";

  return (
    <section ref={ref} className="relative" style={{ minHeight }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ scale, opacity }} className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0" style={{ background: overlay }} />
        <div className={`relative z-10 flex h-full items-center px-6 md:px-16 ${contentX}`}>
          <div className="w-full max-w-[1400px] mx-auto">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
