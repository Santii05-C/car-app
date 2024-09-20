import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

function CarItem({ car }) {
  return (
    <Link to={"/listing-details/" + car?.id}>
      <div className="relative rounded-xl bg-white border hover:shadow-lg cursor-pointer transition-shadow duration-200">
        <h2 className="absolute top-2 left-2 bg-green-500 px-2 rounded-full text-xs text-white">
          New
        </h2>
        <img
          src={car?.images[0]?.imageUrl}
          width={"100%"}
          height={250}
          className=" inset-0 h-full w-full rounded-t-xl  object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-black text-lg mb-2 md:text-xl">
            {car?.listingTitle}
          </h2>
          <Separator />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">
            <div className="flex flex-col items-center">
              <LuFuel className="text-lg mb-1" />
              <h2 className="text-xs text-center">{car?.mileage} Millas</h2>
            </div>
            <div className="flex flex-col items-center">
              <TbBrandSpeedtest className="text-lg mb-1" />
              <h2 className="text-xs text-center">{car?.fuelType}</h2>
            </div>
            <div className="flex flex-col items-center">
              <GiGearStickPattern className="text-lg mb-1" />
              <h2 className="text-xs text-center">{car?.transmission}</h2>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h2 className="font-bold text-lg sm:text-xl">
              {car?.sellingPrice}
            </h2>
            <h2 className="text-primary text-xs flex gap-1 items-center">
              View Details <MdOpenInNew />
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarItem;
