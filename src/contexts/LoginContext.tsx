import {createContext, useState, ReactNode, useEffect, useContext} from 'react';

interface LoginContextData {
  user: boolean;
  nameUser: string;
  avatarUser: string;
  login: (event) => void;
  logout: () => void;
}

interface LoginContextProps {
  children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({children}: LoginContextProps) {
  const [user, setUser] = useState(false);
  const [nameUser, setNameUser] = useState('');
  const [avatarUser, setAvatarUser] = useState('user.png');

  // https://docs.github.com/en/developers/apps/authorizing-oauth-apps
  const urlLogin = 'https://github.com/login/oauth/authorize?client_id=60e37b39508f89f6f661&redirect_uri=https://moveit-willmascarello.vercel.app/';

  function login(){
    console.log('login');
    setUser(true);
  }
  
  function logout(){
    console.log('logout');
    setUser(false);
  }

  return (
    <LoginContext.Provider 
        value={{user, nameUser, avatarUser, login, logout}}>
          {children}
    </LoginContext.Provider>
  );

  }