import FakerData from "@/Shared/FakerData";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MostSearchdCar() {
  console.log(FakerData.carList);
  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-16">
        Most Searched Cars
      </h2>

      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          {FakerData.carList.map((car, index) => (
            <CarItem car={car} key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchdCar;
//1:12
