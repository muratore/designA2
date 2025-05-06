import { Link } from "react-router-dom";
import logoArt2 from "../assets/logo-site-designa2.png";

function Logo({className}) {
  return (
    <div className={`
    ${className ?? ''}
    w-56`}>
      <Link to={"/"}>
        <img src={logoArt2} alt="" />
      </Link>
    </div>
  );
}

export default Logo;
