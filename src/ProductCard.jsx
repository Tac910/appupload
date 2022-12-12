import React from 'react';

export default function ProductCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={e.image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{e.title}</div>
        <div className="font-bold text-xl mb-2">{e.price}</div>
        <p className="text-gray-700 text-base">{e.description} </p>
      </div>
      
    </div>
  );
}
