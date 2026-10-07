import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div>
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
          <Link
            to="/plants"
            className={buttonVariants({
              variant: "default",
              className: "h-14 px-8 text-lg font-medium",
            })}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
