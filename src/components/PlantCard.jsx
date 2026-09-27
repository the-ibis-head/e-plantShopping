import { useDispatch } from "react-redux";
import { addItem } from "@/redux/CartSlice";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItem(plant));
  };
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="relative">
        <img
          src={plant.imageUrl}
          alt={plant.name}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
        {plant.isPopular && (
          <span className="text-dark absolute top-2 right-2 rounded-full bg-yellow-400 px-2 py-1 text-xs font-semibold">
            Popular
          </span>
        )}
      </div>
      <CardHeader>
        <CardTitle>{plant.name}</CardTitle>
        <CardDescription>
          <p className="mb-3 line-clamp-2 text-sm text-gray-600">
            {plant.description}
          </p>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ${plant.cost.toFixed(2)}
          </span>
          <Button onClick={handleAddToCart} variant="outline">
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PlantCard;
