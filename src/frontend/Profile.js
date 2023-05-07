import { useEffect, useState, createContext, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChangeProfile } from "./ChangeProfile";
import { AppContext } from "../App";

export const Profile = () => {
 const {  username } = useContext(AppContext);
     return (
    <div>
      <h2>{username}</h2>
      <ChangeProfile/>
    </div>
  );
};
