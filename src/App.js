import './App.css';
import Sec from "./components/sec";
import Min from "./components/min";
import Hour from "./components/hour";
import React, {useEffect, useState} from "react";


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
          {/*<p>{h}</p>*/}
          {/*<p>{m}</p>*/}
          {/*<p>{s}</p>*/}
          <Hour h = {h}></Hour>
          <Min m = {m}></Min>
          <Sec s = {s}></Sec>
      </header>
    </div>
  );
}

export default App;
