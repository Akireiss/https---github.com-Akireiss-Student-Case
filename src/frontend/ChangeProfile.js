import { useState, createContext, useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
const {  setUsername } = useContext(AppContext);

    const [newUsername, setNewUsername] = useState("");
    return (
<div className="space-x-2">
    <input
    onChange={(event) => {
        setNewUsername(event.target.value)
    }}
    className="border border-gray-400 rounded py-2 px-3"/>
   
    <button onClick={() => {
       setUsername(newUsername);
    }}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >Change</button>
</div>
    )
}