import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import './NavItems.css';

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // Add event listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) setHeaderFixed(true);
    else setHeaderFixed(false);
  });

  const closeMenu = () => {
    setMenuToggle(false);
  };

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
      {/* Header top */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className='container'>
          <div className='header-top-area'>
            <Link to="/signup" className='lab-btn ma-3' onClick={closeMenu}><span>Create Account</span></Link>
            <Link to="/login" onClick={closeMenu}>Log in</Link>
          </div>
        </div>
      </div>

      {/* Header bottom */}
      <div className='header-bottom'>
        <div className='container'>
          <div className='header-wrapper'>
            {/* Logo */}
            <div className='logo-search-active'>
              <div className='logo'>
                <Link to="/" onClick={closeMenu}>
                  {/* <img src={logo} alt="" /> */}
                </Link>
              </div>
            </div>

            {/* Menu area */}
            <div className='menu-area'>
              <div className='menu'>
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                  <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
                  <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
                  <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                  <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
              </div>
              <Link to="signup" className='lab-btn me-3 d-none d-md-block' onClick={closeMenu}>Create Account</Link>
              <Link to="/login" className='d-none d-md-block' onClick={closeMenu}>Log in</Link>
            </div>

{/* Header bar toggle */}
			
            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
              <span></span>
               <span></span>
              <span></span>
            </div>

            {/* Social toggle */}
            <div className='ellepsis-bar d-md-none' onClick={() => setSocialToggle(!socialToggle)}>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
