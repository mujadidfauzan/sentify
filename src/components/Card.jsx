import React from 'react';

function Card({ image, title, label, children }) {
  return (
    <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      {/* Bagian gambar dengan label (opsional) */}
      <div className="relative h-52 w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        {label && <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">{label}</div>}
      </div>

      {/* Konten Card */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel ligula tellus.</p>
        {/* Render children, misalnya tombol Read More */}
        {children}
      </div>
    </div>
  );
}

export default Card;
