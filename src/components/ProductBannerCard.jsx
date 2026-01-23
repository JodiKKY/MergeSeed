import React from "react";

const ProductBannerCard = ({ title, tag, desc, image, alt }) => {
  return (
    <div className="relative h-[600px] w-full max-w-[320px] rounded-2xl overflow-hidden shadow-2xl">
      <img
        src={image}
        alt={alt || title}
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/0 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <span className="text-xs uppercase tracking-widest text-[#d5af0e] mb-2 font-bold">
          {tag}
        </span>

        <h3 className="text-3xl font-bold text-white mb-3 whitespace-pre-line">
          {title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default ProductBannerCard;
