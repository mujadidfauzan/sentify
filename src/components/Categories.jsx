import React from 'react';

function Categories({ categories, onSelect }) {
  return (
    <div className="flex gap-4 px-4 py-2 bg-gray-100">
      {categories.map((cat) => (
        <button key={cat} onClick={() => onSelect(cat)} className="px-3 py-1 bg-white rounded-full shadow text-gray-700 hover:bg-gray-200 transition">
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Categories;
