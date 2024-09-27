import Homescreen from "./components/Homescreen";
import Playing from "./components/Playing";
import "./App.css";
import { useState } from "react";
function App()
{
  const [playgame,setplaygame]=useState("Homescreen");
  return <>
    {playgame==="Homescreen"?<Homescreen setplaygame={setplaygame}/>:<Playing setplaygame={setplaygame}/>}

  </>
}
export default App;