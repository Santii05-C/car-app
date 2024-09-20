import { FaCheck } from "react-icons/fa6";

function Features({ features }) {
  return (
    <div className="p-10 border rounded-xl  shadow-md my-7">
      <h2 className="font-medium text-2xl">Features</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 mt-5 lg:grid-cols-4 gap-7">
        {features &&
          Object.entries(features).map(([feature, value], index) => (
            <div className="flex gap-2 items-center" key={index}>
              <FaCheck className="text-lg p-1 rounded-full bg-blue-100 text-primary" />
              <h2 className="">{feature}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Features;
