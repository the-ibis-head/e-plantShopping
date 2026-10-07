import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectCartTotal,
} from "@/store/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [message, setMessage] = useState("");
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {items.length === 0 ? (
        <p className="mb-6 text-muted-foreground">Your cart is empty.</p>
      ) : (
        <ul className="mb-6 divide-y rounded-lg border">
          {items.map((item) => (
            <li key={item.id} className="flex flex-wrap items-center gap-4 p-4">
              <img
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="h-20 w-20 rounded-md object-cover"
              />
              <div className="min-w-32 flex-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-muted-foreground">
                  Unit price: ${item.price.toFixed(2)}
                </p>
                <p className="text-sm font-medium">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label={`Decrease ${item.name}`}
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity - 1,
                      })
                    )
                  }
                >
                  -
                </Button>
                <span className="w-6 text-center" aria-live="polite">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label={`Increase ${item.name}`}
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                >
                  +
                </Button>
              </div>
              <Button
                variant="destructive"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}

      <p className="mb-6 text-xl font-bold">
        Total Cart Amount: ${total.toFixed(2)}
      </p>

      <div className="flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <Link to="/plants">Continue Shopping</Link>
        </Button>
        <Button
          onClick={() => setMessage("Checkout is Coming Soon!")}
          disabled={items.length === 0}
        >
          Checkout
        </Button>
      </div>
      {message && (
        <p role="status" className="mt-4 font-medium text-green-800">
          {message}
        </p>
      )}
    </div>
  );
}
