
import React from "react";
import { VideoPlayer } from "./VideoPlayer";

export default function Videocard() {
  const videos = [
    {
      title: "Who should pay tax?",
      description: "Should all those with PAN cards submit Income Tax Return?",
      thumbnailUrl: "https://image2url.com/r2/default/images/1770195849139-809878e7-53fa-44b9-89d9-f337ee8a5b4f.jpg",
      // Changed to embed format
      videoUrl: "https://www.youtube.com/embed/IAp8vFwIQhw", 
    },
    {
      title: "what information Found in your pan card",
      description: "What information does the Income Tax Dept. collect using our PAN Card?",
      thumbnailUrl: "https://image2url.com/r2/default/images/1770196017122-be23fd6e-2905-4223-8906-d38d5a548dd4.jpg",
      // Changed to embed format
      videoUrl: "https://www.youtube.com/embed/tedZn8GHn4c", 
    }
];

  return (
    <section className="py-16 bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-slate-800 text-center mb-10">
          Our Financial Insights
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoPlayer key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}


