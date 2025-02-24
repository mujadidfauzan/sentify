// src/components/SentimentAnalysis.jsx
import React from 'react';

function SentimentAnalysis({ chartPlaceholder, description }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Analisis Sentimen</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Chart Placeholder */}
        <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
          <span className="text-gray-500">{chartPlaceholder || 'Chart Sentimen'}</span>
        </div>

        {/* Deskripsi */}
        <div>
          <p className="text-gray-700 leading-relaxed">{description || 'Deskripsi analisis sentimen...'}</p>
        </div>
      </div>
    </section>
  );
}

export default SentimentAnalysis;
