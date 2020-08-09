import React from 'react';

function Footer({ copyright }) {
  return (
    <footer className="footer">
      {copyright && (
        <p className="txt-small txt-neutral">
          Image Credit: {copyright}
        </p>
      )}
      <a href="https://github.com/bradzickafoose/nasa-photo-of-the-day">
        View on GitHub
      </a>
    </footer>
  );
}

export default Footer;
