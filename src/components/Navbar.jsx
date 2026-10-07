import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "@/store/CartSlice";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

const linkClass = ({ isActive }) =>
  `px-2 py-1 rounded ${isActive ? "font-semibold underline" : "hover:underline"}`;

export default function Navbar() {
  const count = useSelector(selectTotalQuantity);
  return (
    <nav className="flex items-center justify-between px-6 py-3">
      <Link to="/" className="text-lg font-bold">
        Paradise Nursery
      </Link>
      <div className="flex items-center gap-4">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/plants" className={linkClass}>
          Plants
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink
          to="/cart"
          className={linkClass}
          aria-label={`Cart, ${count} items`}
        >
          <span className="relative inline-flex items-center gap-1">
            <ShoppingCart />
            Cart
            <span
              className="ml-1 rounded-full bg-white px-2 text-sm font-bold text-green-800"
              data-testid="cart-count"
            >
              {count}
            </span>
          </span>
        </NavLink>
      </div>
    </nav>
  );
}
