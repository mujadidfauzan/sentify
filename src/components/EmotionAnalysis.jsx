// src/components/EmotionAnalysis.jsx
import React from 'react';

function EmotionAnalysis({ chartPlaceholder, description }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Analisis Emosi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Teks di sisi kiri (order-2 di mobile) */}
        <div className="order-2 md:order-1">
          <p className="text-gray-700 leading-relaxed">{description || 'Deskripsi analisis emosi...'}</p>
        </div>

        {/* Chart di sisi kanan (order-1 di mobile) */}
        <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center order-1 md:order-2">
          <span className="text-gray-500">{chartPlaceholder || 'Chart Emosi'}</span>
        </div>
      </div>
    </section>
  );
}

export default EmotionAnalysis;
