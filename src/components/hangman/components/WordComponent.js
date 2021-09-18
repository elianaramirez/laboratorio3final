import React, { useEffect } from 'react'
import { useWord } from '../hooks/useWord';
import { LetterComponent } from './LetterComponent';

export const WordComponent = ({ listWord }) => {
    

    //if(letter !== "") {
    //ifContains(letter);

    //}
    
console.log(listWord);    
    return (
 
    <div className="word">
    {listWord.map((item) => (
        <div key={item.id}> {item.status ? item.letter : ("?")}</div>
  
      ))} 
    </div>
 );
};
