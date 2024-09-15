import IconField from "@/add-listing/components/IconField";
import CarSpecification from "@/Shared/CarSpecification";

function Specification({ carDetail }) {
  //   console.log(carDetail.transmission);
  return (
    <div className="p-10 rounded-xl border shadow-md mt-7">
      {carDetail ? (
        CarSpecification.map((item, index) => (
          <div className="mt-5 flex items-center justify-between" key={index}>
            <h2 className="flex gap-2">
              <IconField icon={item?.icon} /> {item?.label}
            </h2>
            <h2>{carDetail?.[item?.name]}</h2>
          </div>
        ))
      ) : (
        <div className="w-full h-[500px] rounded-xl bg-slate-200 animate-pulse "></div>
      )}
    </div>
  );
}
//5:24
export default Specification;
