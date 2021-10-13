import React from 'react';
import NavBar from './NavBar';



const LayOut = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
            
           
            {children}
        </div>
    );
};

export default LayOut;