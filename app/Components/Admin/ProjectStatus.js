"use client";
import React, { useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUser, FaUsers } from "react-icons/fa";
import { RiPassPendingFill } from "react-icons/ri";
import { toast } from "react-toastify";

const ProjectStats = ({ activeButton, setActiveButton, role }) => {
  const stats = [
    {
      label: "Admins",
      count: 18,
      completed: 2,
      icon: (
        <MdAdminPanelSettings
          className="text-green-900 text-[48px]"
          onClick={() => toast("hi")}
        />
      ),
    },
    {
      label: "Users",
      count: 132,
      completed: 28,
      icon: <FaUser className="text-green-900 text-[33px]" />,
    },
    {
      label: "Public Notary",
      count: 12,
      completed: 1,
      icon: <FaUsers className="text-green-900 text-[50px]" />,
    },
    {
      label: "Applications",
      count: "7",
      completed: "5%",
      icon: <RiPassPendingFill className={`text-green-900 text-[50px]`} />,
    },
  ];
  return (
    <div className="grid w-[85%] mx-auto grid-cols-4 gap-4 bg-gray-100 p-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          onClick={() => setActiveButton(stat.label)}
          className={` ${
            role != "admin" && stat.label != "Applications" ? "hidden" : ""
          } shadow p-4 cursor-pointer flex items-center justify-between rounded-lg ${
            activeButton == stat.label ? "bg-white shadow-md" : ""
          }`}
        >
          <div className="text-purple-600 text-3xl">{stat.icon}</div>
          <div>
            <p className="text-gray-800 font-bold">{stat.label}</p>
            <h3 className="text-xl font-bold">{stat.count}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;
