import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
console.log("HERER");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth();

export async function loginWithEmailAndPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("userCredential", userCredential);

    return userCredential;
  } catch (err) {
    throw new Error(processFirebaseAuthError(err));
  }
}

export async function registerWithEmailAndPassword(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (err) {
    console.log("FFFFFUHHHHHh");
    console.error(err);
    //
  }
}

function processFirebaseAuthError(err) {
  console.log(err.message);
  switch (err.message) {
    case "auth/invalid-email":
      return "Invalid email";
    case "auth/wrong-passwoord":
      return "Email and password do not match";
    default:
      return err.message;
  }
}
