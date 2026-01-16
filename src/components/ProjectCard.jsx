// src/components/JobCard.jsx
import React from "react";

const JobCard = ({ image, title, description, tags }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl bg-black">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-72 md:h-80 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60"></div>

      {/* Hover Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">{title}</h3>
        <p className="text-sm text-gray-200 leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
