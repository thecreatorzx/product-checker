import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAspkm-Eo52fkXN69n-63ct0lfF2tOHSGg",
  authDomain: "product-checker-zx.firebaseapp.com",
  projectId: "product-checker-zx",
  storageBucket: "product-checker-zx.appspot.com",
  messagingSenderId: "1068867252296",
  appId: "1:1068867252296:web:00b9e1ea4dab4a667ca87d",
  measurementId: "G-CQKRCW04RM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
