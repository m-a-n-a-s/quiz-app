import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./styles/Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Link } from "react-router-dom";
// import Quiz from "./questionIndex";
function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      // alert("uid: "+user?.uid);
      // const userRef=db.collection('users');
      // const snapUser= await userRef.where('uid','==',user.uid).get();
      // snapUser.forEach(doc => {
      //   console.log(doc.id,'=>',doc.data());
      // });
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q); 
      // alert(doc.data());
      // alert(doc.size)
      const data = doc.docs[0].data();
      // alert(data);
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert(err+"An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <Link to="/quiz">Take Quiz</Link>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
       
     </div>
  );
}
export default Dashboard;