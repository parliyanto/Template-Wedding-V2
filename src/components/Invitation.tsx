"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Cover from "./Cover";
import InvitationDetail from "./InvitationDetailTemp";

export default function Invitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed inset-0 z-50 bg-black">
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Cover onOpen={() => setIsOpen(true)} />
          </motion.div>
        )}

        {isOpen && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            <InvitationDetail />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
