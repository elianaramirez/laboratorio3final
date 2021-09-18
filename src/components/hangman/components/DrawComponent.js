import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const DrawComponent = () => {
    const [counter,, decrementCounter] = useCounter(6, {max: 6, min: 0} );
    return  (
       <div> 
        <img src= {`/assets/img${counter}.png`} alt=""/>
        <button
         onClick={() => {
             decrementCounter();
         }}
        
        >
             -1
            </button>
        </div>
    ); 
};

