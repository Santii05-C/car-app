import { HiCalendarDays } from "react-icons/hi2";

function DetailsHeader({ carDetail }) {
  return (
    <div>
      <h2 className="font-bold text-3xl">{carDetail?.listingTitle}</h2>
      <p className="text-sm">{carDetail?.tagline}</p>

      <div className="flex gap-2 items-center bg-blue-50 rounded-full p-1 px-3">
        <HiCalendarDays className="h-7 w-7 text-primary" />
        <h2 className="text-primary text-sm">{carDetail?.year}</h2>
      </div>
    </div>
  );
}

export default DetailsHeader;
