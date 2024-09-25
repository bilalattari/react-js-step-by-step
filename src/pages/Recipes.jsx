import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchRecipes = async (search) => {
  const response = await fetch(
    search
      ? `https://dummyjson.com/recipes/search?q=${search}`
      : `https://dummyjson.com/recipes`
  );
  return await response.json();
};

function Recipes() {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipes", search],
    queryFn: () => fetchRecipes(search),
    keepPreviousData: true,
  });

  if (isError)
    return <h1 className="text-center my-20 text-3xl">Something went wrong</h1>;
  console.log("data=>", data);

  return (
    <div className="container mx-auto">
      <h1 className="text-center my-10 font-medium text-3xl">
        Delicous Recipes
      </h1>
      {isLoading && <h1 className="text-center my-20 text-3xl">Loading....</h1>}
      <input
        type="text"
        className="w-full border-2 mb-2 p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap -m-4">
        {data?.recipes?.map((recipe) => {
          const { image, id, name, cuisine, rating } = recipe;
          return (
            <Link
              key={id}
              to={`/${id}`}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <div>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {cuisine}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {name}
                  </h2>
                  <p className="mt-1">RATING {rating}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
