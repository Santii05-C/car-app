import IconField from "@/add-listing/components/IconField";
import CarSpecification from "@/Shared/CarSpecification";

function Specification({ carDetail }) {
  return (
    <div className="p-10 rounded-xl border shadow-md mt-7">
      {CarSpecification.map((item, index) => (
        <div className="mt-5 flex items-center justify-between" key={index}>
          <h2 className="flex gap-2">
            <IconField icon={item.icon} /> {item.label}
          </h2>
          <h2>{carDetail[item.name]}</h2>
        </div>
      ))}

      {/* {carDetail?.lenght > 0 &&
        carDetail.map((carItem, index) => (
          <div className="" key={index}>
            <IconField icon={CarSpecification[index]?.icon} />
          </div>
        ))} */}
    </div>
  );
}

export default Specification;
