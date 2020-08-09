import React, { useState, useEffect } from 'react';
import Logo from './Logo';

function Header({ changeDate, resDate }) {
  const [date, setDate] = useState(resDate);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDate(event.target.value);
    changeDate(event.target.value);
  };

  useEffect(() => setDate(resDate), [resDate]);

  return (
    <header className="header">
      <a className="header__skip hide-screens button" href="#content">
        Skip to content
      </a>
      <nav className="header__nav" aria-label="main">
        <Logo />
        <h1>Astronomy of the Day</h1>
        <form>
          <input type="date" value={date} onChange={handleSubmit} />
        </form>
      </nav>
    </header>
  );
}

export default Header;
