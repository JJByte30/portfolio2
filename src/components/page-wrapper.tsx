"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = useState(false);
  const [displayKey, setDisplayKey] = useState(pathname);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Inicia transição: mostra overlay, esconde conteúdo
    setShowOverlay(true);
    setShowContent(false);

    // Aguarda o overlay "cobrir" (ex: 400ms), depois troca o conteúdo
    const timeout = setTimeout(() => {
      setDisplayKey(pathname);
      setShowOverlay(false);
      setShowContent(true); // só mostra novo conteúdo após a animação do overlay
    }, 600);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {/* Conteúdo só aparece após o delay */}
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key={displayKey}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay aparece com opacity e sai subindo */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "black",
              zIndex: 55,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
