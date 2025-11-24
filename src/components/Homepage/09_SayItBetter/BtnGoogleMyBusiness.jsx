"use client";

import Button2 from "../../../components/Buttons/Button2";

const BtnGoogleMyBusiness = ({ link, children }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Button2 onClick={handleClick} size="lg" end="arrow" dark className="!py-1">
      {children}
    </Button2>
  );
};

export default BtnGoogleMyBusiness;
