import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Landing = ({ setShowProducts }) => {
  const features = [
    { title: "Premium Quality", desc: "Hand-picked healthy plants" },
    { title: "Fast Delivery", desc: "Safe packaging guaranteed" },
    { title: "Expert Care", desc: "Care guides included" },
  ];
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Welcome to Paradise Nursery
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Bring nature indoors with our carefully curated selection of premium
            house plants. From air-purifying varieties to decorative statement
            pieces, we have everything you need to create your personal oasis.
          </p>
          <Button onClick={() => setShowProducts(true)} variant="outline">
            Shop Now
          </Button>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  {feature.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
