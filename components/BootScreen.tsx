"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootScreen({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        onFinish();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
        >
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-lg leading-8"
          >
{`> Initializing...
> Loading AI Models...
> Connecting GitHub...
> Loading Portfolio...

Welcome, Nidal Saleh`}
          </motion.pre>
        </motion.div>
      )}
    </AnimatePresence>
  );
}