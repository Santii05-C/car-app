import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";

function CarItem({ car }) {
  return (
    <div>
      <img src={car?.image} width={300} height={250} className="rounded-t-xl" />
      <div className="p-4">
        <h2 className="font-bold text-black texet-lg mb-2">{car?.name}</h2>
        <Separator />
        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col items-center">
            <LuFuel className="text-lg mb-2" />
            <h2>{car.miles} Miles</h2>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandSpeedtest className="text-lg mb-2" />
            <h2>{car.fuelType} </h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2>{car.gearType} </h2>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">{car.price}</h2>
          <h2 className="text-primary text-sm flex gap-2 items-center">
            <MdOpenInNew />
            View Details
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
