import { useSelector, useDispatch } from "react-redux";
import CartItem from "@/components/CartItem";
import { clearCart } from "@/redux/CartSlice";
import { Button } from "@/components/ui/button";

const Cart = ({ setShowProducts }) => {
  const dispatch = useDispatch();
  const { items, totalCost } = useSelector((state) => state.cart);
  const handleContinueShopping = () => {
    setShowProducts(true);
  };
  const handleCheckout = () => {
    if (items.length === 0) {
      alert("Your cart is empty. Add some plants before checking out!");
      return;
    }
    alert(
      `Thank you for your order!\n\nTotal Amount: $${totalCost.toFixed(2)}\n\nYour plants will be shipped soon! 🌿`
    );
    dispatch(clearCart());
    setShowProducts(true);
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-forest-green mb-8 text-3xl font-bold">
          Shopping Cart
        </h2>
        {items.length === 0 ? (
          <div className="rounded-lg bg-white py-12 text-center shadow-md">
            <p className="mb-4 text-lg text-gray-500">Your cart is empty</p>
            <Button onClick={handleContinueShopping} variant="outline">
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xl font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">
                  ${totalCost.toFixed(2)}
                </span>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button onClick={handleContinueShopping} variant="outline">
                  Continue Shopping
                </Button>
                <Button onClick={handleCheckout} variant="outline">
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
