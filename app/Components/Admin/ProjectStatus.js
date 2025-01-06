import React from "react";
import {
  FaProjectDiagram,
  FaTasks,
  FaUsers,
  FaPercentage,
} from "react-icons/fa";

const stats = [
  {
    label: "Projects",
    count: 18,
    completed: 2,
    icon: <FaProjectDiagram className="text-green-900" />,
  },
  {
    label: "Active Tasks",
    count: 132,
    completed: 28,
    icon: <FaTasks className="text-green-900" />,
  },
  {
    label: "Teams",
    count: 12,
    completed: 1,
    icon: <FaUsers className="text-green-900" />,
  },
  {
    label: "Productivity",
    count: "76%",
    completed: "5%",
    icon: <FaPercentage className="text-green-900" />,
  },
];

const ProjectStats = () => {
  return (
    <div className="grid w-[85%] mx-auto grid-cols-4 gap-4 bg-gray-100 p-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow p-4 flex items-center justify-between rounded-lg"
        >
          <div className="text-purple-600 text-3xl">{stat.icon}</div>
          <div>
            <h3 className="text-xl font-bold">{stat.count}</h3>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;
