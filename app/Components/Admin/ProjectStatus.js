"use client";
import React, { useEffect, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUser, FaUsers } from "react-icons/fa";
import { RiPassPendingFill } from "react-icons/ri";
import { toast } from "react-toastify";
import useFirebase from "@/app/Server/authentication/useFirebase";

const ProjectStats = ({ activeButton, setActiveButton, role }) => {
  const [users, setUsers] = useState("");
  const [notary, setNotary] = useState("");
  const [admin, setAdmin] = useState("");
  const [applications, setApplications] = useState("");
  const { getUsers, getAdminUsers, getNotary, getFormData } = useFirebase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
        const admin = await getAdminUsers();
        setAdmin(admin);
        const notary = await getNotary();
        setNotary(notary);
        const applications = await getFormData();
        setApplications(applications);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  console.log(users.length);
  console.log(notary);
  console.log(admin);
  console.log("applications", applications);

  const stats = [
    {
      label: "Admins",
      count: admin.length,
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
      count: users.length,
      icon: <FaUser className="text-green-900 text-[33px]" />,
    },
    {
      label: "Public Notary",
      count: notary.length,
      completed: 1,
      icon: <FaUsers className="text-green-900 text-[50px]" />,
    },
    {
      label: "Applications",
      count: applications.length,
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
