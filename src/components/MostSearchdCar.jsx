import FakerData from "@/Shared/FakerData";
import CarItem from "./CarItem";

function MostSearchdCar() {
  console.log(FakerData.carList);
  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-16">
        Most Searched Cars
      </h2>

      {FakerData.carList.map((car, index) => (
        <CarItem car={car} key={index} />
      ))}
    </div>
  );
}

export default MostSearchdCar;
