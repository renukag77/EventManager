import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h2>
        <p className="text-gray-600 mb-4">{event.date}</p>
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2">{event.category}</span>
        <p className="text-gray-700">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
