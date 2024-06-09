import React from 'react'
import { useState, useRef, useEffect, useCallback} from 'react';
const PassGen = () => {
    const [len, setLen] = useState(8);
    const [numAll, setNumAll] = useState(false);
    const [charAll, setCharAll] = useState(false);
    const [pass, setPass] = useState("");

    const passRef = useRef(null);

    const passGen = useCallback(() => {
            let pass = "";
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            if(numAll) str += "0123456789";
            if(charAll) str += "~!@#$%^&*_-+=[]{}><";
            for(let i =0; i<len; i++){
                let char = str[Math.floor(Math.random()*str.length)];
                pass += char;
            }
            setPass(pass);
        }, [len, numAll, charAll, setPass]);
    
    const copyPas = useCallback(() => {
            passRef.current?.select();
            window.navigator.clipboard.writeText(pass);
        }, [pass])


    useEffect(()=>{
        passGen();
    },[len, numAll, charAll, passGen]);

    return (
    <div className='h-[calc(100vh-60px)] w-full bg-amber-500 flex flex-col justify-center items-center'>
        <h1 className="my-5 text-3xl font-bold underline flex flex-wrap justify-center align-center">my-password-generator</h1>
        <div className='my-5 border-2 border-cyan-950 p-2'>
            <input
            type="text"
            placeholder='password'
            value={pass}
            ref={passRef}
            />
            <button className='bg-blue-200 border-2 border-lime-400 p-1 ml-2' 
            onClick={passGen}>
                Gen New
            </button>
            <button className='bg-blue-200 border-2 border-lime-400 p-1 ml-2' 
            onClick={copyPas}>
                copy
            </button>
        </div>
        <div className='my-5'>
            <input 
            type="range" 
            id="length" 
            className='mx-2 cursor-pointer'
            min={6}
            max={100}
            value = {len}
            onChange={(e) => setLen(e.target.value)} />
            <label htmlFor="length">Length : {len}</label>
            <input 
            type="checkbox" 
            id="numbers" 
            className='mx-2'
            defaultChecked = {numAll}
            onClick={()=>{setNumAll((prev) => !prev)}}
            />
            <label htmlFor="numbers">numbers</label>
            <input 
            type="checkbox" 
            id="characters"
            className='mx-2'
            defaultChecked = {charAll}
            onClick={() => {setCharAll((prev) => !prev)}}
            />
            <label htmlFor="characters">characters</label>
        </div>
    </div>
  )
}

export default PassGen