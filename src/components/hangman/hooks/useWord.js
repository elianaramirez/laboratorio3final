import React, { useState } from 'react'

export const useWord = (word) => {
    const listLetters = word.split("").map((item, index) => {
        item = item.toUpperCase();
        item = { letter: item, status: false , id: "letter_" + index};
        return item; 
    });
    const [listWord, setListWord] = useState(listLetters);
    const ifContains = (letter) => {
        
       const newlistWord = listWord.map((item) => {
       if(item.letter === letter && item.status === false) {
             item.status = true;
            }
            return item;

        }); 
        return newlistWord;
        //si gano desafio


    };
    
    return [listWord, setListWord, ifContains];
};

 