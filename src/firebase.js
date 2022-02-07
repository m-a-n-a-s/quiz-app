import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDh6Muye3Xq4Z0Vop8TULkaW-0WMXYS4g0",
  authDomain: "test-react-9fbf0.firebaseapp.com",
  projectId: "test-react-9fbf0",
  storageBucket: "test-react-9fbf0.appspot.com",
  messagingSenderId: "982646255982",
  appId: "1:982646255982:web:d2000f11c0b6362040917f",
  measurementId: "G-RLNH3MQL8Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      alert(user.displayName);
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (userName, userEmail, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, userEmail, password);
    const user = res.user;
    // alert(userName);
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name:userName,
      authProvider: "local",
      email: userEmail,
    });
    // await signInWithEmailAndPassword(auth,email,password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};




export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};