import clsx from "clsx";

const Button = ({
  variant = "outline", // outline | ghost | filled
  dark = true,
  end, // emoji | arrow
  className,
  size = "md", // 2xl | xl | lg | md
  onClick,
  children,
  customEmojiSize = 0,
}) => {
  // const variantClass = variant === "ghost" ? styles.ghost : styles.default;
  // const themeClass = dark ? styles.dark : styles.light;
  // const fillClass = fill ? styles.fill : styles.noFill;
  const emojiSizes = {
    md: 20,
    lg: 25,
    xl: 30,
    "2xl": 35,
  };

  return (
    <button
      className={clsx(
        "rounded-full flex flex-nowrap items-center gap-1 hover:cursor-pointer hover:-translate-y-[2px] transition-all duration-300 ease-in-out",
        variant === "outline" && dark && "border-2 border-white",
        variant === "outline" && !dark && "border-2 border-[#ff0062]",
        variant !== "filled" && dark ? "text-white" : "text-[#ff0062]",
        variant === "filled" && dark && "bg-white",
        variant === "filled" && !dark && "bg-[#ff006222]",
        variant === "filled" && dark && "text-black",
        variant === "filled" && !dark && "text-[#ff0062]",
        variant === "outline" &&
          dark &&
          "hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]  hover:border-[#e73269] hover:bg-[rgba(255,0,85,0.199)]",
        variant === "outline" &&
          !dark &&
          "hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:border-[#e73269] hover:bg-[rgba(255,0,85,0.199)]",
        variant === "ghost" &&
          dark &&
          "hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:bg-[rgba(255,255,255,0.1)]",
        {
          "py-2 px-4": size === "md",
          "py-3 px-6": size === "lg",
          "py-4 px-8": size === "xl",
          "py-5 px-10": size === "2xl",
        },
        {
          "font-semibold": size === "lg",
          "font-bold": size === "xl",
          "font-extrabold": size === "2xl",
        },
        {
          "text-base": size === "md",
          "text-lg": size === "lg",
          "text-2xl": size === "xl",
          "text-3xl": size === "2xl",
        },
        className
      )}
      onClick={onClick}
    >
      <span className="whitespace-nowrap">{children}</span>
      {end === "emoji" && (
        <span>
          <img
            src="/images/smiling_emoji.svg"
            alt="smiling emoji"
            width={customEmojiSize > 0 ? customEmojiSize : emojiSizes[size]}
          />
        </span>
      )}
      {end === "arrow" && (
        <span>
          <img
            src="/images/shapes/arrow.webp"
            alt="arrow"
            width={35}
            className="-rotate-45 -mb-1"
            style={
              dark
                ? variant === "filled"
                  ? { filter: "brightness(0)" }
                  : {}
                : {
                    // found with: https://angel-rs.github.io/css-color-filter-generator/
                    filter:
                      "brightness(0) saturate(100%) invert(13%) sepia(99%) saturate(7464%) hue-rotate(335deg) brightness(114%) contrast(101%)",
                  }
            }
          />
        </span>
      )}
    </button>
  );
};

export default Button;
