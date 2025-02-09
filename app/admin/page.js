"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../Components/Admin/Dashboard";
import ProjectStats from "../Components/Admin/ProjectStatus";
import useFirebase from "../Server/authentication/useFirebase";

const Page = () => {
  const { currentLogedIn } = useFirebase();
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // Track auth state

  useEffect(() => {
    if (!currentLogedIn) return; // Wait for `currentLogedIn` to be available

    console.log("User Data:", currentLogedIn); // Debugging: Check actual data

    if (!currentLogedIn.role) return; // Wait until the role is defined

    if (currentLogedIn.role !== "admin") {
      router.push("/");
    } else {
      setIsCheckingAuth(false); // Auth check is complete
    }
  }, [currentLogedIn, router]);

  if (isCheckingAuth) {
    return <p>Loading...</p>; // Show a loading state while checking
  }

  return (
    <div className="mt-20">
      <ProjectStats />
      <Dashboard />
    </div>
  );
};

export default Page;
