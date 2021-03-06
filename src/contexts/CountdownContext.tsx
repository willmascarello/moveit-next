import {createContext, useState, ReactNode, useEffect, useContext} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  second: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps) {
  const {startNewChallenge, testMode} = useContext(ChallengesContext);
  const [timer, setTimer] = useState(25);
  const [time, setTime] = useState(timer);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);


  // console.log('testMode');
  // console.log(testMode);

  const minutes = Math.floor(time / 60);
  const second = time % 60;
  
  
  function startCountdown(){
    setIsActive(true);
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(timer);
    setHasFinished(false);
  }


  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time-1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  useEffect(() => {
    setTimer(testMode ? 3 : 25);
    resetCountdown();
  }, [testMode])

  return (
    <CountdownContext.Provider 
        value={{minutes, second, hasFinished, isActive, startCountdown, resetCountdown}}>
          {children}
    </CountdownContext.Provider>
  );

  }