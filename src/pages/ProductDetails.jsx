import { Spinner, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    try {
      setLoading(true);
      fetch(`https://dummyjson.com/product/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data=>", data);
          setProductDetail(data);
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
    }
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto ">
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col items-center xl:items-start xl:flex-row justify-center">
            <Image
              isZoomed
              width={500}
              className="bg-gray-200"
              alt="NextUI Fruit Image with Zoom"
              src={productDetail.thumbnail}
            />
            <div className="w-1/2  ml-3 my-3">
              <h1 className="font-bold text-3xl">{productDetail.title}</h1>
              <h1 className="font-normal text-xl my-4">
                {productDetail.description}
              </h1>
              <h1 className="font-normal text-xl my-2">
                Price <span className="underline font-bold">$ {productDetail.price}</span>{" "}
              </h1>
            </div>

            
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductDetails;
