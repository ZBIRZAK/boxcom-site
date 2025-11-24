"use client";

const Dinosaur = () => {
  const handleVibrate = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate([300, 100, 200, 100, 200]);
    } else {
      // alert("Vibration API not supported on this device.");
    }
  };
  return (
    <div
      onClick={handleVibrate}
      className="absolute bottom-[17%] right-[2%] w-[25%] z-10"
    >
      <img
        onClick={handleVibrate}
        src="/images/web_dev/doodles/dinosaur.svg"
        className="hover:cursor-pointer"
      />
    </div>
  );
};
export default Dinosaur;
