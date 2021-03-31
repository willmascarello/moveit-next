import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { LoginContext } from '../contexts/LoginContext';
import Input from './form/Input'
import styles from '../styles/components/Profile.module.css';


export function Profile(){
  const {level} = useContext(ChallengesContext);
  const {user, login, logout} = useContext(LoginContext);
  const [userName, setUserName] = useState();
  
  return(
    <div className={styles.profileContainer}>
      { user ? (
          <>
            <img src={`https://github.com/${userName}.png`} alt={"avatar " + userName}/>
            <div>
              <strong>{userName}</strong>
              <button onClick={logout} className={styles.login}><img src="icons/sign-out-alt-solid.svg" alt="logout"/></button>
              <p>
                <img src="icons/level.svg" alt="level"/>
                Nível {level}
              </p>
            </div>
          </>
          ) : (
          <>
            <img src="user.png" alt="User Photo"/>
              <div>
                <form onSubmit={login}>
                  <Input id='userName' placeholder="Usuário do GitHub" setValue={setUserName} required />
                  <button type="submit" className={styles.login}><img src="icons/sign-in-alt-solid.svg" alt="login"/></button>
                </form>
                <p>
                  <img src="icons/level.svg" alt="level"/>
                  Nível {level}
                </p>
              </div>
          </>
        )}
      
    </div>
  )
}