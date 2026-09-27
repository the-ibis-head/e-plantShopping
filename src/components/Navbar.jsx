import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );
  const navLinks = [
    { id: "landing", label: "Home" },
    { id: "products", label: "Shop" },
    { id: "about", label: "About Us" },
  ];
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div
            className="cursor-pointer text-xl"
            onClick={() => handleNavClick("landing")}
          >
            Paradise Nursery
          </div>
          <div className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                variant={currentPage === link.id ? "" : "outline"}
              >
                {link.label}
              </Button>
            ))}
            <Button
              onClick={() => handleNavClick("cart")}
              className="group relative rounded-full p-2"
              variant="outline"
              aria-label="Shopping Cart"
            >
              <svg
                className="group-hover:text-forest-green h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
