import React, { useState } from 'react';

const NavbarComponent = () => {
  const [isBurgerMenuActive, setIsActive] = useState(false);
  function toggleMenu() {
    const newValue = !isBurgerMenuActive;
    setIsActive(newValue);
  }

  const isActiveClass = isBurgerMenuActive ? "is-active" : "";
  return (
  <>
    <nav class="navbar is-transparent is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a onClick={toggleMenu} role="button" class={`navbar-burger buger ${isActiveClass}`} aria-label="menu" aria-expanded="false" data-target="navbarExampleTransparentExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarExampleTransparentExample" class={`navbar-menu ${isActiveClass}`}>
        <div class="navbar-end">
          <a class="navbar-item" href="/">トップ {isBurgerMenuActive}</a>
          <a class="navbar-item" href="/#profile">プロフィール</a>
        </div>
      </div>
    </nav>
  </>
)};

export default NavbarComponent