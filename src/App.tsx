import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Landing from "@/pages/Landing";
import ProductList from "@/pages/ProductList";
import Cart from "@/pages/Cart";
import AboutUs from "@/pages/AboutUs";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/ProductSlice";

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [_, setShowProducts] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <Landing setShowProducts={setShowProducts} />;
      case "products":
        return <ProductList />;
      case "cart":
        return <Cart setShowProducts={setShowProducts} />;
      case "about":
        return <AboutUs />;
      default:
        return <Landing setShowProducts={setShowProducts} />;
    }
  };
  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <footer>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p>&copy; 2026 Paradise Nursery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
