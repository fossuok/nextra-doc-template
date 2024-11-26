import Image from "next/image";
import foss_logo from "./foss.png";

const Logo = () => {
  return (
    <>
      <Image
        src={foss_logo}
        alt="FOSSUOK Logo"
        width={40}
        height={40}
        layout="fixed"
      />
      <span>FOSSUOK design Guidelines</span>
    </>
  );
};

export default Logo;
