import React from 'react';

function Header({ setView, view }) {
  return (
    <header className="header">
      <nav>
        <div className="hamburger-menu">
          <button className="menu-button">Menu</button>
          <ul className="menu-list">
            <li>Home</li>
            <li>
              About
              <ul className="submenu">
                <li>Team</li>
                <li>Contact</li>
              </ul>
            </li>
            <li>Services</li>
          </ul>
        </div>
        <div className="horizontal-menu">
          <button 
            onClick={() => setView('grid')} 
            className={view === 'grid' ? 'active-button' : ''}
          >
            Grid View
          </button>
          <button 
            onClick={() => setView('tile')} 
            className={view === 'tile' ? 'active-button' : ''}
          >
            Tile View
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
