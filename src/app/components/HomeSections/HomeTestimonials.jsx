"use client";
import { useState } from "react";
import { Play } from "lucide-react";

const REELS = [
  { id: "WaqdIrpAVH8", label: "Student Success Story" },
  { id: "q4FytP95PQQ", label: "Student Success Story" },
];

function ReelCard({ id, label }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative rounded-2xl overflow-hidden  shadow-xl border-2 border-[#01377d] bg-black" style={{ width: 200, height: 355 }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
        />
      ) : (
        <div className="absolute inset-0 cursor-pointer" onClick={() => setPlaying(true)}>
          <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-14 h-14 rounded-full bg-black/70 flex items-center justify-center">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomeTestimonials() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#01377d] mb-2">What Our Students Say</h2>
          <p className="text-gray-500 text-sm">Real stories from real learners</p>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          {REELS.map((r) => <ReelCard key={r.id} {...r} />)}
        </div>
      </div>
    </section>
  );
}
