
import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-blue-950 text-white shadow-md z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold cursor-pointer">Platinum Realtors</h1><br/>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          {["Home", "About", "LeaveAndLicense", "SaleAndPurchase", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={700}
                className="cursor-pointer hover:text-yellow-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center bg-blue-950 gap-6 py-6 text-lg font-semibold">
          {["Home", "About", "LeaveAndLicense", "SaleAndPurchase", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={700}
                className="cursor-pointer hover:text-yellow-300"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
