import React, { useEffect, useState } from "react";

export default function MembersList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/officialtimnnaji/Pharos-Nigeria-Site/main/src/data/members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data.members))
      .catch((err) => console.error("Error loading members:", err));
  }, []);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-lg font-bold text-pharosDark">{member.name}</h2>
          <p className="text-nigeriaGreen font-medium">{member.role}</p>
          <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
          <a
            href={`https://x.com/${member.xHandle.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-pharosBlue hover:underline"
          >
            {member.xHandle}
          </a>
        </div>
      ))}
    </div>
  );
}
