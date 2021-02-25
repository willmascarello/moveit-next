import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
  const {startNewChallenge} = useContext(ChallengesContext);

  let timer = 0.05; // // timer in second;
  timer *= 60; // timer in millisecond
  const [time, setTime] = useState(timer);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const second = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(second).padStart(2, '0').split('');

  let countdownTimeout: NodeJS.Timeout;

  function startCountdown(){
    setIsActive(true);
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(timer);
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



  return(
    <div>
      <div className={styles.countdownCountainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
          <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}  >
         Ciclo encerrado
        </button>
      ) :
        <>
        {isActive ? (
          <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown} >
            Abandonar ciclo
          </button>
        ) : (
          <button type="button" className={styles.countdownButton} onClick={startCountdown} >
            Iniciar ciclo
          </button>
        ) }
        </>
        }
      

    </div>
  );
}