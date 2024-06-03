import React, { createContext, useState } from 'react';
import SignupForm from './Comps/SignupForm'; 
import Header from './Comps/Header'; 

export const UserContext = createContext();

const App = () => {
  const [userName, setUserName] = useState('');

  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', padding: '20px', textAlign: 'center' }}> 
      <UserContext.Provider value={{ userName, setUserName }}>
        <Header />
        <h1>הרשמה</h1>
        <SignupForm />
      </UserContext.Provider>
    </div>
  );
}

export default App;
