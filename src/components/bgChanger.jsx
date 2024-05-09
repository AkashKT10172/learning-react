import { useState } from "react";
import React from "react";

function BgChanger() {
    const [color, setColor] = useState("green");

    return(
        <div className ="w-full h-screen flex flex-wrap flex-col align-center justify-center" style={{backgroundColor : color}}>
                <h1 className="text-3xl font-bold underline flex flex-wrap justify-center">my-background-changer</h1>
                <h3 className="flex flex-wrap justify-center my-5">Current color is = {color}</h3>
                 <div className="flex flex-wrap justify-center my-5" style={{backgroundColor : color}}>
                    <button className="outline w-20 h-10 rounded-full shadow-lg mx-2" onClick = {() => setColor("red")} style={{backgroundColor : "red"}}>Red</button>
                    <button className="outline w-20 h-10 rounded-full shadow-lg mx-2" onClick = {() => setColor("green")} style={{backgroundColor : "green"}}>Green</button>
                    <button className="outline w-20 h-10 rounded-full shadow-lg mx-2" onClick = {() => setColor("blue")} style={{backgroundColor : "blue"}}>Blue</button>
                    <button className="outline w-20 h-10 rounded-full shadow-lg mx-2" onClick = {() => setColor("white")} style={{backgroundColor : "white"}}>White</button>
                    <button className="outline w-20 h-10 rounded-full shadow-lg mx-2" onClick = {() => setColor("orange")} style={{backgroundColor : "orange"}}>orange</button>
                </div>   
        </div>
    );
}

export default BgChanger