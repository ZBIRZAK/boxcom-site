"use client";

import styles from "./Button.module.scss";

const Button = ({
  label = "Click me",
  variant = "default",
  dark = false,
  fill = false,
  emoji = false,
  className = "",
  onClick,
}) => {
  const variantClass = variant === "ghost" ? styles.ghost : styles.default;
  const themeClass = dark ? styles.dark : styles.light;
  const fillClass = fill ? styles.fill : styles.noFill;
  return (
    <button
      className={`${styles.button} ${variantClass} ${themeClass} ${fillClass} ${className}`}
      onClick={onClick}
    >
      {label}{" "}
      {emoji ? <img src="/images/smiling_emoji.svg" alt="" width={20} /> : "↗"}
    </button>
  );
};

export default Button;
