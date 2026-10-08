import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Popup stops showing after this date (local time).
const EXPIRY_DATE = new Date("2026-10-20T23:59:59");

const WelcomePopup = ({ image, alt }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (new Date() > EXPIRY_DATE) return;

        const timer = setTimeout(() => setIsOpen(true), 600);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") closePopup();
        };
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
                    onClick={closePopup}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closePopup}
                            aria-label="Close popup"
                            className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white text-xl leading-none hover:bg-black/80 transition-colors"
                        >
                            &times;
                        </button>
                        <img
                            src={image}
                            alt={alt}
                            className="w-full h-auto max-h-[85vh] object-contain bg-white"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomePopup;
