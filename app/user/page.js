"use client";

import dynamic from "next/dynamic";

// Updated path for components inside app directory
const UserWithNoSSR = dynamic(() => import("../Components/Users/User.js"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function Page() {
  return <UserWithNoSSR />;
}
