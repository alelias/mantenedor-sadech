import React from 'react';

const Header = () => {

  const style = {
    background: '#D10017'
  };
 
 
    return ( 
        <>
       <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={style} >
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    
  </ul>

</nav>

  </>
     );
}
 
export default Header;
