import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
} from "@/redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increaseQuantity(item));
  };
  const handleDecrease = () => {
    dispatch(decreaseQuantity(item));
  };
  const handleDelete = () => {
    dispatch(deleteItem(item));
  };
  const handleDeleteConfirm = () => {
    if (window.confirm(`Remove "${item.name}" from your cart?`)) {
      handleDelete();
    }
  };
  return (
    <div className="mb-4 flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md md:flex-row">
      <div className="flex-shrink-0">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-24 w-24 rounded-lg object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-forest-green mb-1 text-lg font-semibold">
          {item.name}
        </h3>
        <p className="mb-2 text-sm text-gray-500">
          Unit Cost: ${item.unitCost.toFixed(2)}
        </p>
        <p className="mb-3 text-xl font-bold text-primary">
          Total: ${item.totalCost.toFixed(2)}
        </p>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="mb-3 flex items-center gap-2">
          <button
            onClick={handleDecrease}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300"
            aria-label="Decrease Quantity"
          >
            -
          </button>
          <span className="w-12 text-center text-lg font-medium">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="hover:bg-forest-green flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white transition-colors"
            aria-label="Increase Quantity"
          >
            +
          </button>
        </div>
        <button
          onClick={handleDeleteConfirm}
          className="rounded-md bg-red-500 px-3 py-2 text-sm text-white transition-colors hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
