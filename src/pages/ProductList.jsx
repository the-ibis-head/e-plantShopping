import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/ProductSlice";
import PlantCard from "@/components/PlantCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const {
    list: allPlants,
    loading,
    error,
  } = useSelector((state) => state.products);
  const sections = React.useMemo(() => {
    const grouped = {};
    allPlants.forEach((plant) => {
      const sectionTitle = plant.sectionTitle || plant.category;
      if (!grouped[sectionTitle]) {
        grouped[sectionTitle] = [];
      }
      grouped[sectionTitle].push(plant);
    });
    return Object.entries(grouped);
  }, [allPlants]);
  useEffect(() => {
    if (allPlants.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allPlants.length]);
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-secondary"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-red-500">Error loading products: {error}</p>
      </div>
    );
  }
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Collection</h2>
        {sections.map(([sectionTitle, plants]) => (
          <section key={sectionTitle} className="mb-12">
            <h3 className="mb-6 border-b pb-2 text-2xl font-semibold text-primary">
              {sectionTitle}
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {plants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
