import { useState } from 'react';

export const useWindowSizes = (windowH:number, windowW:number): {windowWidth:number, windowHeight: number} => {
    
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    const updateWindowSizes = () => {
        setWindowWidth(windowW); 
        setWindowHeight(windowH);
    };
    
    window.onresize = updateWindowSizes;
    
    return {windowWidth, windowHeight}
};

export default useWindowSizes;