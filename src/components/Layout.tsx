import { motion } from 'motion/react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 md:pt-36 pb-20 font-sans"
    >
      {children}
    </motion.main>
  );
}