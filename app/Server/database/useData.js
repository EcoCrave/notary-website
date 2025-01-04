"use client";
import React, { useEffect, useState } from "react";
import useFirebase from "@/app/Server/authentication/useFirebase";
const useData = () => {
  // Get User Data...............................................
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUserDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const { user, getUsers } = useFirebase(); // Corrected usage of the custom hook
  console.log(userDetails);

  // Get Combined data.........................................................

  return { userDetails };
};

export default useData;
