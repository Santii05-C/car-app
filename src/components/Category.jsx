import Data from "@/Shared/Data";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="mt-20">
      <h2 className="font-bold text-3xl text-center mb-6">Browse By Type</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-4 sm:px-10 lg:px-20">
        {Data.Category.map((category, index) => (
          <Link to={"search/" + category.name} key={index}>
            <div className="border rounded-xl p-3 items-center flex flex-col hover:shadow-md cursor-pointer transition-shadow duration-200">
              <img
                src={category.icon}
                width={35}
                height={35}
                alt={category.name}
              />
              <h2 className="mt-2 text-center">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
