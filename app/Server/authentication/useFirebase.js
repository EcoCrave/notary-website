"use client";
import { auth, storage, firestore } from "./firebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { setCookie, deleteCookie } from "cookies-next";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { sendBookingConfirmationEmail } from "@/lib/resend";
import { useRouter } from "next/navigation";

// ------------------------------------------
const useFirebase = () => {
  const [user, setUser] = useState({});

  const [currentLogedIn, setCurrentLogedIn] = useState({});
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const f_nameRef = useRef();
  const l_nameRef = useRef();

  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();
  const router = useRouter();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  // Save User data --------------------------

  const saveUserData = async (user) => {
    const userRef = doc(firestore, "users", user.email); // Firestore 'users' collection with user UID as document ID
    try {
      // Check if user data already exists
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName || "No Name",
          email: user.email,
          role: user.role || "user",
          photoURL: user.photoURL || null,
          provider: user.providerId || "email",
          createdAt: new Date(),
        });
        toast("User data saved successfully");
      } else {
        toast("User data already exists in Firestore");
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  // Save Notary data --------------------------

  const saveNotaryData = async (user) => {
    const userRef = doc(firestore, "Public Notaries", user.email); // Firestore 'users' collection with user UID as document ID
    try {
      // Check if user data already exists
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName || "No Name",
          email: user.email,
          role: user.role || "user",
          photoURL: user.photoURL || null,
          provider: user.providerId || "email",
          createdAt: new Date(),
        });
        toast("User data saved successfully");
      } else {
        toast("User data already exists in Firestore");
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  // Login With email and password __________________________________________________

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      // Success toast; no need to manually set user state
      toast.success("Successfully logged in!");
      router.replace("/user");
      setError(""); // Clear any previous errors
    } catch (error) {
      // Handle errors gracefully
      setError(error.message);
      toast.error(
        (error.message && "Invalid email or password") ||
          "Failed to log in. Please try again."
      );
    } finally {
      // Reset the form inputs
      e.target.reset();
    }
  };

  // On Auth State Change _________________________

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        currentLogin(user.uid, user.email);
        // Get Firebase ID token
        const idToken = await user.getIdToken();

        // Set cookie for the Firebase ID token
        setCookie("authToken", idToken, {
          httpOnly: false, // Not HTTP-only since it's client-side
          secure: process.env.NODE_ENV === "production", // Use secure cookies in production
          maxAge: 7 * 24 * 60 * 60, // 7 days
          path: "/", // Accessible across the site
        });
      } else {
        // Clear the cookie when no user is logged in
        deleteCookie("authToken");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Google Sign In ___________________________________
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const googleUser = result.user;
        setUser(googleUser);
        toast.success("Login Success");
        await saveUserData(googleUser); // Save user data to Firestore
        router.replace("/user");
      })
      .catch((error) => {
        setError(error.message);
        toast.error("There are some issue");
      });
  };

  // Facebook Sign In _______________________________

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(async (result) => {
        const facebookUser = result.user;
        setUser(facebookUser);
        toast.success("Successfully Loged In");
        await saveUserData(facebookUser); // Save user data to Firestore
        router.replace("/user");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Set Display name__________________________________

  const displayName = () => {
    updateProfile(auth.currentUser, {
      displayName: f_nameRef.current.value + " " + l_nameRef.current.value,
    })
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // Currenly Loged in person .....................................................

  const currentLogin = async (id, email) => {
    const userDocRef = doc(firestore, "users", id);
    const notaryDocRef = doc(firestore, "Public Notaries", email);

    const [userDocSnap, notaryDocSnap] = await Promise.all([
      getDoc(userDocRef),
      getDoc(notaryDocRef),
    ]);

    if (notaryDocSnap.exists()) {
      setCurrentLogedIn({ id: notaryDocSnap.id, ...notaryDocSnap.data() });
    } else if (userDocSnap.exists()) {
      setCurrentLogedIn({ id: userDocSnap.id, ...userDocSnap.data() });
    } else {
      setCurrentLogedIn(null);
    }
  };
  // Sign Up with email address ____________ _ _ _ ___ _ _ _ ________________

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(async (result) => {
        const signedUpUser = result.user;
        await updateProfile(auth.currentUser, {
          displayName: `${f_nameRef.current.value} ${l_nameRef.current.value}`,
        });

        const updatedUser = {
          ...signedUpUser,
          displayName: auth.currentUser.displayName,
        };
        await saveUserData(updatedUser); // Save user data to Firestore

        emailVerification();
        setUser(updatedUser);
        toast.success("Successfully Registered");
        router.replace("/user");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        toast.error("There is an error");
      });
    e.target.reset();
  };

  // Public Notary Sign Up with email address ___________________________________________

  const handleSignUpNotary = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value.trim();
      const password = passwordRef.current.value.trim();

      if (!email || !password) {
        throw new Error("Email and Password are required");
      }

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const signedUpUser = result.user;

      await updateProfile(auth.currentUser, {
        displayName: `${f_nameRef.current.value} ${l_nameRef.current.value}`,
      });
      await auth.currentUser.reload();
      const updatedUser = {
        ...signedUpUser,
        displayName: auth.currentUser.displayName,
      };

      // Save user data in Firestore
      await saveNotaryData(updatedUser);

      // Send email verification
      emailVerification();

      // Set user state
      setUser(updatedUser);

      toast.success("Successfully Registered");

      router.replace("/user");
      setError("");

      e.target.reset();
    } catch (error) {
      console.error("Error during sign-up:", error);
      setError(error.message);
      toast.error(error.message || "There is an error");
    }
  };

  // Verify Account  ________________________________________________________________

  const emailVerification = () => {
    const actionCodeSettings = {
      url: "https://notaryblocks.com", // Redirect after verification
      handleCodeInApp: false, // Keep Firebase's default verification page
    };

    sendEmailVerification(auth.currentUser, actionCodeSettings)
      .then(() => {
        toast.success("Check your email to verify your account.");
      })
      .catch((error) => {
        console.error("Email verification error:", error);
        toast.error("Failed to send verification email.");
      });
  };

  // Log Out ______________________________________________________________

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        router.replace("/");
        toast.success("Logout Successful");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Password Reset _________________________________________________

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        // Password reset email sent!

        toast("Please check your mail to reset the password");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // ------------------Upload data to FireStore and Storage Database-------------------------------------------

  const uploadFile = async (folder, files) => {
    try {
      const uploadPromises = files.map(async (file) => {
        const fileRef = ref(storage, `${folder}/${file.name}`);
        const uploadTask = await uploadBytes(fileRef, file);
        return getDownloadURL(uploadTask.ref);
      });

      return Promise.all(uploadPromises);
    } catch (error) {
      console.error("Error uploading files:", error);
      throw new Error("File upload failed");
    }
  };

  // CREATE: Add form data to Firestore
  const addFormData = async (data) => {
    try {
      const docRef = await addDoc(collection(firestore, "UserInfo"), data);

      setSubmitSuccess(true);

      sendBookingConfirmationEmail(data);
      return docRef.id;
    } catch (error) {
      setSubmitSuccess(false);
      console.error("Error submitting form:", error);
    }
  };

  // Fetch admins ..................................
  const getAdminUsers = async () => {
    try {
      // Query Firestore to get only users with role = "admin"
      const usersRef = collection(firestore, "users");
      const q = query(usersRef, where("role", "==", "admin"));

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching admin users:", error);
      return [];
    }
  };

  // Fetch all the users.............................
  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  // Fetch Notary...........................................

  const getNotary = async () => {
    const querySnapshot = await getDocs(
      collection(firestore, "Public Notaries")
    );
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };
  // Fetch Notary by Email ...........................................

  const getNotaryByEmail = async (id) => {
    try {
      const docRef = doc(firestore, "Public Notaries", id); // Fetch specific document
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { email: id, ...docSnap.data() };
      } else {
        console.log("No matching document found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching Notary:", error);
      return null;
    }
  };

  // Fetch Notary by id ...........................................

  const getNotaryByID = async (id) => {
    console.log("id", id);
    const querySnapshot = await getDocs(
      collection(firestore, "Public Notaries")
    );
    return querySnapshot.docs.map((doc) => ({ uid: id, ...doc.data() }));
  };

  // READ: Fetch all form data
  const getFormData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "UserInfo"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const getDataById = async (id) => {
    try {
      // Step 1: Fetch user data from "users" collection
      const userDocRef = doc(firestore, "users", id); // Replace "users" with your collection name
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        return null;
      }

      const userData = { id: userDocSnap.id, ...userDocSnap.data() };
      // Step 2: Fetch user details from "details" collection
      const detailsCollection = collection(firestore, "UserInfo");
      const q = query(detailsCollection, where("userId", "==", id));
      const detailsSnap = await getDocs(q);

      const userDetails = detailsSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Combine user data and user details
      const combinedData = { ...userData, details: userDetails };
      return combinedData;
    } catch (error) {
      toast("Error fetching user data:", error);
      throw new Error("Failed to fetch user data.");
    }
  };

  // UPDATE: Update form data
  const updateFormData = async (id, data) => {
    const formRef = doc(firestore, "UserInfo", id);
    await updateDoc(formRef, data);
    toast("Form data updated successfully");
  };

  // Update User info..........................................
  const updateUserData = async (id, updatedData) => {
    try {
      const userRef = doc(firestore, "users", id);
      await updateDoc(userRef, updatedData);
      toast("User data updated successfully in Firestore");
    } catch (error) {
      console.error("Error updating user data:", error);
      throw new Error("Failed to update user data");
    }
  };

  // Delete User From FireStore .......___________________.........

  const deleteUserData = async () => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      try {
        // Delete user data from Firestore
        router.replace("/");
        const userDocRef = doc(firestore, "users", currentUser.uid);
        await deleteDoc(userDocRef);
        // Delete user from Firebase Auth
        await currentUser.delete();
        toast("User and their data deleted successfully");
      } catch (error) {
        console.error("Error deleting user and their data:", error.message);
      }
    } else {
      toast("No user is signed in");
    }
  };

  // Delete User by ID...............................................

  const deleteUserByUID = async (uid) => {
    try {
      // Query the `users` collection for a document with the matching UID
      const usersRef = collection(firestore, "users");
      const userQuery = query(usersRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(userQuery);
      if (querySnapshot.empty) {
        toast.error(`No user found }`);
        return;
      }
      // Delete User ...........................

      await getAuth().deleteUser(uid);

      // Delete the user document(s) found
      querySnapshot.forEach(async (userDoc) => {
        await deleteDoc(doc(firestore, "users", userDoc.id)); // Delete document by ID

        toast.success(`User deleted successfully.`);
      });
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  // Delete User From Authenticator ..................................

  const deleteCurrentUser = async () => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      try {
        await deleteUser(currentUser);
        toast("User deleted successfully");
      } catch (error) {
        console.error("Error deleting user:", error.message);
      }
    } else {
      toast("No user is signed in");
    }
  };

  // DELETE: Delete User's Details data..........................
  const deleteFormData = async (id) => {
    const formRef = doc(firestore, "UserInfo", id);
    await deleteDoc(formRef);
    toast("Data deleted successfully");
  };
  return {
    user,
    error,
    currentLogedIn,
    f_nameRef,
    l_nameRef,
    emailRef,
    passwordRef,
    addFormData,
    uploadFile,
    deleteUserData,
    deleteCurrentUser,
    getUsers,
    getFormData,
    updateFormData,
    repasswordRef,
    getNotary,
    getAdminUsers,
    updateUserData,
    getDataById,
    submitSuccess,
    handleSignUpNotary,
    getNotaryByEmail,
    setSubmitSuccess,
    getNotaryByID,
    deleteUserByUID,
    handleLogout,
    handleGoogleSignIn,
    handleSignIn,
    handleFacebookSignIn,
    handleSignUp,
    handleResetPassword,
  };
};

export default useFirebase;
