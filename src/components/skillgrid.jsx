import { useState } from "react";

const skills = [
  { name: "Next.js", projects: 1, color: "bg-gray-300", logo: "nextjs.svg" },
  { name: "React", projects: 5, color: "bg-gray-900", logo: "react.svg" },
  { name: "Vercel", projects: 2, color: "bg-white", logo: "vercel.svg" },
  { name: "Tailwind", projects: 12, color: "bg-[#06B6D4]", logo: "tailwind.svg" },
  { name: "Vite", projects: 5, color: "bg-purple-100", logo: "vite.svg" },
  { name: "Docker", projects: 2, color: "bg-[#1D63ED]", logo: "docker-mark-white.svg" },
  { name: "Firebase", projects: 1, color: "bg-[#303030]", logo: "firebase.svg" },
  { name: "Leaflet", projects: 1, color: "bg-green-100", logo: "leaflet.png" },
  { name: "AWS Lambda", projects: 1, color: "bg-[#D9660B]", logo: "Lambda.svg" },
  { name: "AWS S3", projects: 2, color: "bg-green-200", logo: "S3.svg" },
  { name: "AWS Amplify", projects: 1, color: "bg-red-200", logo: "Amplify.svg" },
  { name: "Amazon API Gateway", projects: 1, color: "bg-pink-200", logo: "API Gateway.svg" },
  { name: "TeamCity", projects: 0, color: "bg-slate-900", logo: "TeamCity.svg" },
];

export default function SkillGrid() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Most used technologies</h1>
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative p-12 rounded-xl transition-transform duration-300 ${skill.color} ${hovered === index ? "scale-125 z-10" : ""}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={skill.logo} alt={skill.name} className="w-14 h-14 mx-auto" />
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
