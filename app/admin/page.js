"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../Components/Admin/Dashboard";
import ProjectStats from "../Components/Admin/ProjectStatus";
import useFirebase from "../Server/authentication/useFirebase";
import { toast } from "react-toastify";
import Notary from "../Components/Admin/Notary";
import Admin from "../Components/Admin/Admin";
import Applications from "../Components/Admin/Applications";

const Page = () => {
  const { currentLogedIn } = useFirebase();
  const [activeButton, setActiveButton] = useState("");
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (!currentLogedIn) return;

    if (!currentLogedIn.role) return;
    if (currentLogedIn?.role) {
      if (currentLogedIn.role === "notary") {
        setActiveButton("Applications");
      } else if (currentLogedIn.role === "admin") {
        setActiveButton("Admins");
      }
    }

    if (currentLogedIn.role !== "admin" && currentLogedIn.role !== "notary") {
      router.push("/");
      toast("Not admin/notary");
    } else {
      setIsCheckingAuth(false);
    }
  }, [currentLogedIn, router]);

  if (isCheckingAuth) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-20">
      <ProjectStats
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        role={currentLogedIn.role}
      />
      {activeButton == "Users" ? (
        <Dashboard />
      ) : activeButton == "Admins" ? (
        <Admin />
      ) : activeButton == "Public Notary" ? (
        <Notary />
      ) : activeButton == "Applications" ? (
        <Applications />
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;
