// components/AnimatedLayout.tsx
"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const AnimatedContainer = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const variants = {
    hidden: { opacity: 0, x: -200, transition: { ease: "easeInOut" } },
    enter: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeInOut" } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.25, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedContainer;