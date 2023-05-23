import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVla0RH6GpCBa5Rq6VBRed-g-jvxmnNWc",
  authDomain: "cryptopedia-6f36e.firebaseapp.com",
  projectId: "cryptopedia-6f36e",
  storageBucket: "cryptopedia-6f36e.appspot.com",
  messagingSenderId: "536139560305",
  appId: "1:536139560305:web:08461f5ea6cca3a3e072d0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
