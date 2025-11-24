const GlowingArrow = () => {
  return (
    <div className="absolute w-[12%] bottom-[8%] left-[35%] rotate-100">
      <img src="/images/shapes/blue-arrow.svg" className="top-0 left-0" />
      <img
        src="/images/shapes/white-dots.svg"
        className="absolute top-0 left-0"
        style={{
          fill: "white",
          // filter: "drop-shadow(0 0 6px white) drop-shadow(0 0 3px white)",
          animation: "glowAnim 1s infinite alternate",
        }}
      />
    </div>
  );
};

export default GlowingArrow;
