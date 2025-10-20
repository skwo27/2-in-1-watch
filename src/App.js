import  './App.css';
import Point from "./components/point";
import React, {useEffect, useState} from "react";
import Pointer from "./components/pointer/pointer";


function App() {
    let [a, seta] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {seta(new Date())}, 1000);
        return () => clearInterval(interval);
    }, [])

    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();


  return (
    <div className="App">
      <header className="App-header">
          <Point></Point>
          <Pointer e = {[h,3,30,3]}></Pointer>
          <Pointer e = {[m,2,6,5]}></Pointer>
          <Pointer e = {[s,1,6,7]}></Pointer>
      </header>
    </div>
  );
}

export default App;
