// src/components/Breadcrumb.jsx
import React from 'react';

function Breadcrumb({ items = [] }) {
  return (
    <nav className="text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        if (isLast) {
          return (
            <span key={index} className="font-medium text-gray-800">
              {item.name}
            </span>
          );
        } else {
          return (
            <span key={index}>
              <a href={item.href} className="text-gray-700 hover:underline">
                {item.name}
              </a>
              <span className="mx-2 text-gray-600">/</span>
            </span>
          );
        }
      })}
    </nav>
  );
}

export default Breadcrumb;
