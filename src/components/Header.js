import React from 'react';
import './Header.css';
import Netflix from '../components/img/netflix.png';
import User from '../components/img/user.png'

function Header({black}) {
  return (
      
      <header className={black ? "black" : ""}>
        <div className="header--logo">
            <a href="/">
                <img src={Netflix} alt="NetFlix" />
            </a>
        </div>
        <div className="header--user">
            <a href="/">
                <img src={User} alt="usuario"/>
            </a>
        </div>
      </header>
  );
}

export default Header;
