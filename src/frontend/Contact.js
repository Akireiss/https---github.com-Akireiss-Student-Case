import Axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import { AppContext } from "../App";

export function Contact () {
const {username} = useContext(AppContext)
const [predictedAge, setPredictedAge] = useState(0);  
const [name, setName] = useState("");

const fetchData = () => {
Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
    setPredictedAge(res.data);
})
}    
  return (
    <div className="my-auto mt-20">  
      <h2 className="mb-20">This Is Contact Page {username}</h2>
      <input onChange={(event) => {
        setName(event.target.value)
      }} 
      className="border border-black border-b" placeholder="Type here.."/>
      <button onClick={fetchData} className="bg-green-300 px-3 py-1 text-white rounded-full">Predict</button>
      <h2>Predictesd Age: {predictedAge.age}</h2>
      <h2>Name: {predictedAge.name}</h2>
    </div>
  )
}
