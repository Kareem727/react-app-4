import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   
  
   useEffect(() => {
    const UserDataLoggedIn = localStorage.getItem('LoggedIn');
    if( UserDataLoggedIn === '1'){
     setIsLoggedIn(true);
    }
   }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('LoggedIn' , '1'); 
  };

  const logoutHandler = () => {
    localStorage.removeItem('LoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
    value={{isLoggedIn: isLoggedIn,
            onLogout: logoutHandler}}>
      <MainHeader  />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
