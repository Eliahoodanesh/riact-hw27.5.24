import React, { useContext } from 'react';
import { UserContext } from '../App'; 
import { FaApple } from 'react-icons/fa'; 

const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <header>
      <h2> 
        <FaApple style={{ color: 'green', fontSize: '30px' }} />
      </h2>
    </header>
  );
}

export default Header;
