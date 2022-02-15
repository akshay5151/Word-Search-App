import React, { useState, useEffect } from 'react';
import Matrix from "./Matrix";
import SplashScreenText from './SplashScreenText';
  
const App = () => {
  
  // Loading state 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  
  return ( isLoading ?
    <SplashScreenText/> :
    <Matrix/>
  );
}
  
export default App;