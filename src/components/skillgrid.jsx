import { useState } from "react";

const skills = [
  { name: "Next.js", projects: 1, color: "bg-green-500", logo: "nextjs.svg" },
  { name: "React", projects: 3, color: "bg-blue-400", logo: "react.svg" },
  { name: "Vercel", projects: 2, color: "bg-white", logo: "vercel.svg" },
  { name: "Tailwind", projects: 12, color: "bg-[#06B6D4]", logo: "tailwind.svg" },
  { name: "Vite", projects: 6, color: "bg-purple-500", logo: "vite.svg" },
  { name: "Docker", projects: 2, color: "bg-[#1D63ED]", logo: "docker-mark-white.svg" },
  { name: "firebase", projects: 7, color: "bg-[#FF9100]", logo: "firebase-white.svg" },
  { name: "leaflet", projects: 1, color: "bg-[#FF9100]", logo: "leaflet-white.svg" },
];

export default function SkillGrid() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Most used technologies</h1>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative p-12 rounded-xl transition-transform duration-300 ${skill.color} ${hovered === index ? "scale-125 z-10" : ""}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={skill.logo} alt={skill.name} className="w-12 h-12 mx-auto" />
            {hovered === index && (
              <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center p-2 rounded-b-xl">
                <p className="text-lg font-semibold">{skill.name}</p>
                <p className="text-sm">{skill.projects} projects</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
