import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/TestMode.module.css';

export function TestMode() {
    const {testMode, changeMode} = useContext(ChallengesContext);


    return (
        <div>
            
            {testMode ? <div className={styles.testMode}></div> : ''}

            <div className={styles.divSwitch}>
                <label className={styles.switch}>
                    <input type="checkbox" onClick={changeMode}/>
                    <span className={styles.slider}></span>
                </label>
                <p>Modo teste</p>
            </div>
        </div>
    )
}