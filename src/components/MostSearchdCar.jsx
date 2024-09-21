import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from "./../../configs";
import { CarImages, CarListing } from "./../../configs/schema";
import { desc, eq } from "drizzle-orm";

import { useEffect, useState } from "react";
import Service from "@/Shared/Service";

function MostSearchdCar() {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    GetPopularCarlist();
  }, []);

  const GetPopularCarlist = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
      .orderBy(desc(CarListing.id))
      .limit(10);

    const resp = Service.FormatResult(result);

    setCarList(resp);
  };
  return (
    <div className="mx-10 md:mx-24">
      <h2 className="font-bold text-3xl text-center mt-16 mb-7 ">
        Most Searched Cars
      </h2>

      <Carousel className="">
        <CarouselContent>
          {carList.map((car, index) => (
            <CarouselItem className="  md:basis-1/3 lg:basis-1/4" key={index}>
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchdCar;
