"use client";

import { useState } from "react";

// Dummy geotagged data
const dummyPosts = [
  { id: "1", title: "Need a ladder", x: 60, y: 40 },
  { id: "2", title: "Offer a ride to station", x: 30, y: 70 },
  { id: "3", title: "Can lend a drill", x: 70, y: 50 },
  { id: "4", title: "Looking for pet sitting", x: 50, y: 30 },
];

export default function RealisticMap() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Interactive Community Map</h2>
      <div className="relative bg-blue-200 rounded-lg w-full h-80 overflow-hidden">
        {/* Static SVG Map */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Background for land */}
          <rect width="100" height="100" fill="lightgreen" />

          {/* Water bodies */}
          <ellipse cx="20" cy="30" rx="15" ry="10" fill="lightblue" opacity="0.8" />
          <ellipse cx="80" cy="70" rx="10" ry="5" fill="lightblue" opacity="0.8" />

          {/* Gridlines */}
          {[...Array(11)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke="#d9d9d9"
              strokeWidth="0.2"
            />
          ))}
          {[...Array(11)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke="#d9d9d9"
              strokeWidth="0.2"
            />
          ))}

          {/* Regions */}
          <path
            d="M10,20 Q30,10 50,25 T90,20 L90,0 L0,0 Z"
            fill="#98fb98"
            stroke="#2e8b57"
            strokeWidth="0.5"
          />
          <path
            d="M90,80 Q70,90 50,75 T10,85 L10,100 L100,100 Z"
            fill="#a2d9ff"
            stroke="#006994"
            strokeWidth="0.5"
          />

          {/* Markers */}
          {dummyPosts.map((post) => (
            <circle
              key={post.id}
              cx={post.x}
              cy={post.y}
              r="3"
              fill="red"
              stroke="black"
              strokeWidth="0.5"
              className="cursor-pointer hover:fill-yellow-500"
              onClick={() => setSelectedPost(post.title)}
            />
          ))}

          {/* Labels */}
          <text x="15" y="25" fontSize="4" fill="darkblue">Lake Alpha</text>
          <text x="75" y="75" fontSize="4" fill="darkblue">River Beta</text>
          <text x="45" y="15" fontSize="4" fill="darkgreen">Central Park</text>
        </svg>

        {/* Tooltip */}
        {selectedPost && (
          <div className="absolute top-4 left-4 bg-white p-2 rounded shadow">
            <p className="text-sm font-medium">{selectedPost}</p>
            <button
              className="text-red-500 text-xs mt-1 underline"
              onClick={() => setSelectedPost(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
      <p className="text-gray-600 mt-4 text-sm">
        This interactive map simulates realistic terrain and geotagging.
      </p>
    </div>
  );
}
