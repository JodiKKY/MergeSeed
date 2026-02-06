import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

const JobCard = ({ image, title, description, tags }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Get only the first sentence for the preview
  const firstLine = description.split(".")[0] + ".";

  const toggleModal = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  return (
    <>
      {/* Main Card */}
      <div 
        onClick={toggleModal}
        className="relative group overflow-hidden rounded-2xl shadow-xl bg-black cursor-pointer h-80"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
        />
        
       
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-1 group-hover:translate-x-1 transition-transform">
            {title}
          </h3>
          <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed italic">
            {firstLine}
          </p>
        </div>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl z-10"
            >
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-yellow-400 rounded-full transition-colors z-20"
              >
                <HiX size={20} className="text-black" />
              </button>

              <img src={image} alt={title} className="w-full h-56 object-cover" />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <div className="h-1 w-12 bg-yellow-400 mb-4 rounded-full" />
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border border-gray-200 text-gray-700 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JobCard;