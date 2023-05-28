import { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChangeProfile } from "./ChangeProfile";
import { AppContext } from "../App";
import { Axios } from "axios";

// export const Profile = () => {
//  const {  username } = useContext(AppContext);
//      return (
//     <div>
//       <h2>{username}</h2>
//       <ChangeProfile/>
//     </div>
//   );
// };]\

export function Profile() {
  
const [students, setStudents] = useState([]);

fetch("http://127.0.0.1:8000/api/students")
.then((res) => res.json())
.then((data) => {
  console.log(data);
})
return (
  <div className="mt-16">
    <h2>Students:</h2>
  
  </div>
);
}
