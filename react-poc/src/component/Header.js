import React from 'react';

function Header({ setView }) {
  return (
    <header className="header">
      <nav>
        <div className="hamburger-menu">
          {/* Hamburger Menu with Sub-menu */}
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
          {/* Horizontal Menu */}
          <button onClick={() => setView('grid')}>Grid View</button>
          <button onClick={() => setView('tile')}>Tile View</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
