import React from 'react';
import { useState } from 'react/cjs/react.development';
import { DrawComponent } from './components/DrawComponent';
import { KeyBoardComponent } from './components/KeyBoardComponent';
import { WordComponent } from './components/WordComponent';
import { useWord } from './hooks/useWord';
import "./styles.css";
export const HangManComponent = () => {
    const [listWord, , ifContains] = useWord("breaking bad");
    const handlerKeyPress = (key) => {
       ifContains(key);

    };
    return (
        <div>
            <h1>HangMan</h1>
            <hr />
            <DrawComponent />
            <WordComponent listWord={listWord}/>
            <KeyBoardComponent handlerKeyPress={handlerKeyPress} />
        </div>
    );
}; 
