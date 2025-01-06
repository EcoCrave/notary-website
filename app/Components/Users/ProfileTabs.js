import { useState } from "react";

const ProfileTabs = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className="flex border-b">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`p-4 ${
            activeTab === index
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
