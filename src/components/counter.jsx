import { useState } from 'react';
import React from 'react'; 

function Counter () {
    const [myCounter, setmyCounter] = useState(12);
    const addValue = () => {
        if(myCounter<20) setmyCounter(myCounter+1);
    }
    const subValue = () => {
        if(myCounter > 0) setmyCounter(myCounter-1);
    }
    return(
        <>
        <div className="w-full h-screen flex flex-wrap flex-col align-center justify-center" style = {{backgroundColor:"skyblue"}}>
            <h1 className="text-3xl font-bold underline flex flex-wrap justify-center align-center">my-react-counter</h1>
            <h2 className="flex flex-wrap justify-center align-center my-5" >Current Value is = {myCounter}</h2>
            <div className="flex flex-wrap justify-center align-center my-5">
            <button className="outline w-20 h-10 rounded-full shadow-lg mx-2" onClick={addValue} style={{backgroundColor : "green"}}>Increase</button>
            <button className="outline w-20 h-10 rounded-full shadow-lg mx-2" onClick={subValue} style={{backgroundColor : "red"}}>Decrease</button>
            </div>
        </div>
        </>
    );
}

export default Counter;