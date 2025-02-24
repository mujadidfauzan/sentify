// src/components/NewsContent.jsx
import React from 'react';

function NewsContent({ title, image, paragraphs = [] }) {
  return (
    <section className="mb-8">
      {/* Judul Berita */}
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      {/* Gambar Berita */}
      {image ? (
        <img src={image} alt={title} className="w-full h-64 object-cover mb-4 rounded-md" />
      ) : (
        <div className="w-full h-64 bg-gray-300 mb-4 rounded-md flex items-center justify-center">
          <span className="text-gray-500">Gambar Berita</span>
        </div>
      )}

      {/* Isi Berita */}
      {paragraphs.map((para, idx) => (
        <p key={idx} className="text-gray-700 leading-relaxed mb-2">
          {para}
        </p>
      ))}
    </section>
  );
}

export default NewsContent;
