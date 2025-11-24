const ButtonMobileMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      className="mobile-menu-toggle"
      onClick={toggleMenu}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu-nav"
    >
      <div className={`burger-icon ${isMenuOpen ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default ButtonMobileMenu;
