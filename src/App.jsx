import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/Navbar";

import Landing from "@/pages/Landing";
import AboutUs from "@/pages/AboutUs";
import ProductList from "@/components/ProductList";
import CartItem from "@/components/CartItem";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-50 py-12">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <footer>
        <div className="mx-auto max-w-7xl p-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Paradise Nursery. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
