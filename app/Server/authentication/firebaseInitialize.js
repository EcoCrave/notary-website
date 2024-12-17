import { initializeApp } from "firebase/app";

import firebaseConfig from "./firebaseConfig";
const FirebaseInitialize = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseInitialize;
