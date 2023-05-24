import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVla0RH6GpCBa5Rq6VBRed-g-jvxmnNWc",
  authDomain: "cryptopedia-6f36e.firebaseapp.com",
  projectId: "cryptopedia-6f36e",
  storageBucket: "cryptopedia-6f36e.appspot.com",
  messagingSenderId: "536139560305",
  appId: "1:536139560305:web:08461f5ea6cca3a3e072d0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();

export const Authentication = () => {
  return auth;
};

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const SignOut = async () => {
  await signOut(auth);
};

export const GetSignInErrorMessage = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "Email tidak terdaftar";
    default:
      return "Email atau password salah";
  }
};

export const GetSignUpErrorMessage = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "Email sudah terdaftar";
    default:
      return "Terjadi kesalahan saat proses sign up";
  }
};
