import Header from "@/components/Header";
import DetailsHeader from "../components/DetailsHeader";
import { useParams } from "react-router-dom";
import { db } from "./../../../configs";
import { CarImages, CarListing } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import Service from "@/Shared/Service";
import ImageGallery from "../components/ImageGallery";
import Description from "../components/Description";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Specification from "../components/Specification";
import OwnersDetail from "../components/OwnersDetail";
import Footer from "@/components/Footer";
import FinanacialCalculator from "../components/FinanacialCalculator";
import MostSearchdCar from "@/components/MostSearchdCar";

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

        <div className=" grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5">
          {/* LEFT */}
          <div className="md:col-span-2 ">
            {/* IMAGE GALLERY */}
            <ImageGallery carDetail={carDetail} />
            {/* DESCRIPTION */}
            <Description carDetail={carDetail} />
            {/* FEATURES LIST  */}
            <Features features={carDetail?.features} />
            {/* FINANACIALCALCULATOR */}
            <FinanacialCalculator carDetail={carDetail} />
          </div>
          {/* RIGHT */}
          <div>
            {/* PRICING */}
            <Pricing carDetail={carDetail} />
            {/* CAR SPECIFICATION */}
            <Specification carDetail={carDetail} />
            {/* OWERS DETAILS */}
            <OwnersDetail carDetail={carDetail} />
          </div>
        </div>
        <MostSearchdCar />
      </div>
      <Footer />
    </div>
  );
}

export default ListingDetails;
