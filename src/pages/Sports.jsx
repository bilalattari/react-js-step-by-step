import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import ProductCard from "../components/Card";

function Sports() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      fetch(
        "https://dummyjson.com/products/category/sports-accessories?limit=24"
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products), setLoading(false);
        });
    } catch (err) {
      setLoading(false);
    }
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center my-5 font-bold text-2xl underline">
        All Sports Items
      </h1>

      {loading ? (
        <div className="h-full justify-center items-center flex">
          <Spinner className="mx-auto my-3" />
        </div>
      ) : null}
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mx-auto ">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Sports;
