import { useParams } from "react-router-dom";

function ServicesDetail() {
  const { id } = useParams();
  console.log("id=>", id);
  return <h1 className="text-3xl underline text-center">Services Id {id}</h1>;
}

export default ServicesDetail;
