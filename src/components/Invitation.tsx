"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Cover from "./Cover";

const InvitationDetail = dynamic(() => import("./InvitationDetailTemp"), {
  ssr: false,
});

export default function Invitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed inset-0 z-50 bg-black overflow-hidden">
      <AnimatePresence>
        {/* === Cover === */}
        {!isOpen && (
          <motion.div
            key="cover"
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Cover onOpen={() => setIsOpen(true)} />
          </motion.div>
        )}

        {/* === Detail === */}
        {isOpen && (
          <motion.div
            key="detail"
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <InvitationDetail />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
