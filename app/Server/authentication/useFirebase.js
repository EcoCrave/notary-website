import FirebaseInitialize from "./firebaseInitialize";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
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
import { getFirestore } from "firebase/firestore";
import { useRef, useState } from "react";
import { useEffect } from "react";
FirebaseInitialize();
const useFirebase = () => {
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const f_nameRef = useRef();
  const l_nameRef = useRef();

  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();

  // Function to upload files (images, PDFs, etc.)

  // Save User data --------------------------

  const saveUserData = async (user) => {
    const userRef = doc(db, "users", user.uid); // Firestore 'users' collection with user UID as document ID
    try {
      // Check if user data already exists
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName || "No Name",
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL || null,
          provider: user.providerId || "email",
          createdAt: new Date(),
        });
        console.log("User data saved successfully");
      } else {
        console.log("User data already exists in Firestore");
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  // On Auth State Change _________________________

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  // Google Sign In___________________________________
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const googleUser = result.user;
        setUser(googleUser);
        await saveUserData(googleUser); // Save user data to Firestore
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Facebook Sign In____________________________________
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(async (result) => {
        const facebookUser = result.user;
        setUser(facebookUser);
        await saveUserData(facebookUser); // Save user data to Firestore
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Set Display name_________________________________

  const displayName = () => {
    updateProfile(auth.currentUser, {
      displayName: f_nameRef.current.value + " " + l_nameRef.current.value,
    })
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // Sign Up with email address ___________________________________________

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
        setError("");
        alert("Successfully Registered");
      })
      .catch((error) => {
        setError(error.message);
      });
    e.target.reset();
  };

  // Login With email and password __________________________________________________

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((result) => {
        const signInInfo = result.user;
        setUser(signInInfo);
        setError("");
        alert("successfully loged in");
      })
      .catch((error) => {
        setError(error.message);
      });
    e.target.reset();
  };

  // Verify Account  ________________________________________________________________

  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      alert("check your email to verify");
    });
  };

  // Log Out ______________________________________________________________

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser("");
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

        setError("Please check your mail to reset the password");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // ------------------Upload data to FireStore and Storage Database-------------------------------------------

  const uploadFile = async (folder, file) => {
    try {
      const storage = getStorage();
      const fileRef = ref(storage, `${folder}/${file.name}`);
      const uploadTask = await uploadBytes(fileRef, file);
      return await getDownloadURL(uploadTask.ref);
    } catch (error) {
      console.error("Error uploading file:", error);
      throw new Error("File upload failed");
    }
  };
  // CREATE: Add form data to Firestore
  const addFormData = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "userForms"), data);
      console.log("Form submitted successfully with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // READ: Fetch all form data
  const getFormData = async () => {
    const querySnapshot = await getDocs(collection(db, "userForms"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  // UPDATE: Update form data
  const updateFormData = async (id, data) => {
    const formRef = doc(db, "userForms", id);
    await updateDoc(formRef, data);
    console.log("Form data updated successfully");
  };

  // DELETE: Delete form data
  const deleteFormData = async (id) => {
    const formRef = doc(db, "userForms", id);
    await deleteDoc(formRef);
    console.log("Form data deleted successfully");
  };

  return {
    user,
    error,
    f_nameRef,
    l_nameRef,
    emailRef,
    passwordRef,
    addFormData,
    uploadFile,
    repasswordRef,
    handleLogout,
    handleGoogleSignIn,
    handleSignIn,
    handleFacebookSignIn,
    handleSignUp,
    handleResetPassword,
  };
};

export default useFirebase;
