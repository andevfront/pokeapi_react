import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/">
          <img className="h-10" src={logo} alt="pokeapi logo" />
        </Link>
      </div>
    </header>
  );
};
