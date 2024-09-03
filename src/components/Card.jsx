import { Card, CardBody, CardFooter, Image, Spinner } from "@nextui-org/react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            style={{ height: 250 }}
            alt={item.title}
            className="w-full object-cover h-[140px]"
            src={item.thumbnail}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{item.title}</b>
          <p className="text-default-500">{item.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProductCard;
