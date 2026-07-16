import React from 'react';

interface VillageEmblemProps {
  className?: string;
}

export default function VillageEmblem({ className = "w-16 h-16" }: VillageEmblemProps) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} drop-shadow-md shrink-0`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer elegant double ring gold border */}
      <circle cx="60" cy="60" r="54" fill="none" stroke="#d97706" strokeWidth="1.5" className="opacity-80" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="#fbbf24" strokeWidth="0.5" strokeDasharray="3 2" className="opacity-60" />
      
      {/* Dark matte canvas background of the shield */}
      <circle cx="60" cy="60" r="47" fill="#040e0b" />
      
      {/* Sky Blue Semi-circle at the top behind mountain */}
      <path d="M 18 60 A 42 42 0 0 1 102 60 Z" fill="#0284c7" className="opacity-20" />
      
      {/* Mount Slamet - Solid Dark Charcoal Peak */}
      <path d="M 22 75 Q 60 28 98 75 Z" fill="#1e293b" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1" />
      {/* Mountain Shading */}
      <path d="M 38 75 Q 60 42 82 75 Z" fill="#0f172a" />
      <path d="M 50 75 Q 60 52 70 75 Z" fill="#020617" />

      {/* Sun Ray Glow effect */}
      <circle cx="60" cy="35" r="16" fill="#fbbf24" className="opacity-10 blur-[4px]" />

      {/* Banyan Tree (Pohon Beringin) - Symbol of Protection & Unity */}
      {/* Tree trunk with golden highlight */}
      <path d="M 60 76 L 60 54" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 58 76 L 58 59" stroke="#92400e" strokeWidth="0.75" />
      <path d="M 62 76 L 62 59" stroke="#92400e" strokeWidth="0.75" />
      {/* Banyan Tree Canopy - Lush green layered circles representing leaves */}
      <circle cx="60" cy="49" r="9" fill="#059669" stroke="#047857" strokeWidth="1" />
      <circle cx="51" cy="53" r="7" fill="#047857" stroke="#065f46" strokeWidth="1" />
      <circle cx="69" cy="53" r="7" fill="#047857" stroke="#065f46" strokeWidth="1" />
      {/* Highlights on top of canopy */}
      <circle cx="55" cy="45" r="6" fill="#34d399" stroke="#10b981" strokeWidth="0.5" />
      <circle cx="65" cy="45" r="6" fill="#34d399" stroke="#10b981" strokeWidth="0.5" />
      <circle cx="60" cy="42" r="5" fill="#a7f3d0" className="opacity-90" />

      {/* Yellow Rice Stalk (Padi) on Left Side - Curving up */}
      <path d="M 28 75 C 24 58, 28 42, 44 34" fill="none" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round" />
      {/* Rice grains clustered along the curve */}
      <circle cx="27" cy="68" r="1.5" fill="#f59e0b" />
      <circle cx="25" cy="62" r="1.5" fill="#fbbf24" />
      <circle cx="26" cy="55" r="1.5" fill="#fbbf24" />
      <circle cx="29" cy="48" r="1.5" fill="#f59e0b" />
      <circle cx="34" cy="42" r="1.5" fill="#fbbf24" />
      <circle cx="39" cy="37" r="1.5" fill="#fbbf24" />
      <circle cx="45" cy="34" r="1.2" fill="#fbbf24" />

      {/* Green & White Cotton (Kapas) on Right Side - Curving up */}
      <path d="M 92 75 C 96 58, 92 42, 76 34" fill="none" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" />
      {/* Cotton pods with green leaf bases */}
      <circle cx="93" cy="68" r="2.2" fill="#ffffff" stroke="#047857" strokeWidth="0.75" />
      <circle cx="95" cy="61" r="2.2" fill="#ffffff" stroke="#047857" strokeWidth="0.75" />
      <circle cx="93" cy="54" r="2.2" fill="#ffffff" stroke="#047857" strokeWidth="0.75" />
      <circle cx="89" cy="47" r="2.2" fill="#ffffff" stroke="#047857" strokeWidth="0.75" />
      <circle cx="83" cy="41" r="2.2" fill="#ffffff" stroke="#047857" strokeWidth="0.75" />
      <circle cx="77" cy="36" r="2" fill="#ffffff" stroke="#047857" strokeWidth="0.75" />

      {/* Golden Star at the Top Center */}
      <polygon points="60,18 62,23 68,23 63,26 65,31 60,28 55,31 57,26 52,23 58,23" fill="#fbbf24" />

      {/* Water Waves (Sungai Serayu) at the base */}
      <path d="M 44 82 Q 60 78 76 82" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" className="opacity-80" />
      <path d="M 47 86 Q 60 83 73 86" fill="none" stroke="#38bdf8" strokeWidth="0.8" strokeLinecap="round" className="opacity-50" />

      {/* Elegant Red-White Ribbon/Banner at the base */}
      <path d="M 36 89 C 45 93, 75 93, 84 89" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 36 89 C 45 93, 75 93, 84 89" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
      {/* Gold Ribbon Ends */}
      <path d="M 34 88 L 30 92 L 35 94 Z" fill="#fbbf24" />
      <path d="M 86 88 L 90 92 L 85 94 Z" fill="#fbbf24" />
    </svg>
  );
}
