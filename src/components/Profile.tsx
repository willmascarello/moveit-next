import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile(){
  const {level} = useContext(ChallengesContext);
  
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/willmascarello.png" alt="William Mascarello"/>
      <div>
        <strong>William Mascarello</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Nível {level}
        </p>
      </div>
    </div>
  )
}