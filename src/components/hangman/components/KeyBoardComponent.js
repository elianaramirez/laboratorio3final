import React from 'react'
import { useKeyBoard } from '../hooks/useKeyBoard';
import { KeyComponent } from './KeyComponent';

export const KeyBoardComponent = ({ handlerKeyPress }) => {
    const [keyBoard, setKeyBoard] = useKeyBoard();
    const handlerKey = ( key )=> {
        const newkeyBoard= keyBoard.map((item) => {

            const {key: keylist} = item;
            if(key === keylist ){
                item.status = true;

            }
            return item;

        });
        
        setKeyBoard(newkeyBoard);
        handlerKeyPress();
    };
    return(
          <div className="flex-container"> 
             {keyBoard.map((item) => (
             <KeyComponent 
             key={item.id} 
             letter={item.key} 
             handlerKey={handlerKey} 
             status={item.status}
              />
             
            ))} 
    </div>
    );
}; 
   

