import React from "react";
import { useNavigate } from "react-router-dom";

const PhaseCard = ({ icon: Icon, phase, title, age, description, items, buttonText, buttonLink }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(buttonLink);
  };

  return (
    <div className="rounded-lg shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Card Header */}
      <div className="p-6 border-b border-[#C6A55C]/20">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#C6A55C]/10">
            <Icon className="w-6 h-6 text-[#C6A55C]" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#C6A55C]">Phase {phase}</p>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{age}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-300">{description}</p>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C6A55C] mt-2" />
              <span className="text-gray-300 text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleClick}
          className="w-full bg-[#C6A55C] text-[#1C1C1C] py-2 px-4 rounded-md hover:bg-[#D4B56C] transition-colors duration-300 font-medium"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PhaseCard;
