import { FaCheck } from "react-icons/fa6";

function Features({ features }) {
  return (
    <div className="p-10 border rounded-xl shadow-md my-7">
      <h2 className="font-medium text-2xl md:text-3xl">Features</h2>

      <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 text-sm gap-3 mt-5">
        {features &&
          Object.entries(features).map(([feature, value], index) => (
            <div className="flex  gap-1 items-center" key={index}>
              <FaCheck className="text-xl  p-1 rounded-full bg-blue-100 text-primary" />
              <h2 className="text-sm sm:text-base ">{feature}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Features;
