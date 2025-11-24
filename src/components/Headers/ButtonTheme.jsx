const ButtonTheme = () => {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Activer le mode ${theme === "light" ? "sombre" : "clair"}`}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ButtonTheme;
