import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row justify-between px-10 md:px-10 lg:px-0 py-10">
        <Logo></Logo>
        <ul className="flex gap-5 mt-8 md:mt-12 ml-14">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }>Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }>Donation</NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }>Statistics</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
