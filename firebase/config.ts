
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaTyGTSc5LF3euUrF1m2Wl4FfbmiUIoaUmG2e",
  authDomain: "e-commerce.firebaseapp.com",
  projectId: "commerce",
  storageBucket: "commerce.appspot.com",
  messagingSenderId: "697654321259",
  appId: "1:697654321259:web:a45fc6989098eb3ad329ac"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )
export const storage = getStorage( app )
export const auth = getAuth( app )
export const provider = new GoogleAuthProvider()
