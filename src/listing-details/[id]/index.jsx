import Header from "@/components/Header";
import DetailsHeader from "../components/DetailsHeader";
import { useParams } from "react-router-dom";
import { db } from "./../../../configs";
import { CarImages, CarListing } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import Service from "@/Shared/Service";

function ListingDetails() {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState();

  useEffect(() => {
    GetCarDetail();
  }, []);
  const GetCarDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
      .where(eq(CarListing.id, id));

    const resp = Service.FormatResult(result);

    setCarDetail(resp[0]);
  };
  return (
    <div>
      <Header />

      <div className="p-10 md:px-20">
        {/* HEADER DETAILS COMPONENT */}
        <DetailsHeader carDetail={carDetail} />
      </div>
    </div>
  );
}

export default ListingDetails;
