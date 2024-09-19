import React from 'react';

function Card({ img, title, desc, link }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      {/* Image */}
      {img ? (
        <img
          src={img}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      {/* Title */}
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      {/* Description */}
      <p className="mt-2 text-gray-600">{desc}</p>
      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Learn More
      </a>
    </div>
  );
}

export default Card;
