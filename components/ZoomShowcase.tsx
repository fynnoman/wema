"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  children?: ReactNode;
  overlay?: string;
};

export default function ZoomShowcase({
  src,
  alt,
  children,
  overlay = "linear-gradient(180deg, rgba(10,21,34,0.55) 0%, rgba(10,21,34,0.85) 100%)",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.86, 1.02, 1.14]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0, 1, 1, 0.5]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0a1522]"
      style={{ height: "120vh" }}
    >
      <motion.div style={{ scale, y }} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0" style={{ background: overlay }} />
      <div className="sticky top-0 flex h-screen items-center">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="mx-auto w-full max-w-[1400px] px-6 md:px-10"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
