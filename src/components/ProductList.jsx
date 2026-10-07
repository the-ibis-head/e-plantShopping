import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plants, categories } from "@/data/plants";
import { addItem, selectCartItems } from "@/store/CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartIds = new Set(useSelector(selectCartItems).map((i) => i.id));
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      {categories.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">{category}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plants
              .filter((p) => p.category === category)
              .map((plant) => {
                const added = cartIds.has(plant.id);
                return (
                  <Card key={plant.id}>
                    <CardHeader>
                      <img
                        src={plant.image}
                        alt={plant.name}
                        width={300}
                        height={300}
                        loading="lazy"
                        className="aspect-square w-full rounded-md object-cover"
                      />
                      <CardTitle>{plant.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-lg font-semibold">
                        ${plant.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {plant.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        disabled={added}
                        onClick={() =>
                          dispatch(
                            addItem({
                              id: plant.id,
                              name: plant.name,
                              image: plant.image,
                              price: plant.price,
                            })
                          )
                        }
                      >
                        {added ? "Added to Cart" : "Add to Cart"}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}
