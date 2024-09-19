import Search from "./Search";

function Hero() {
  return (
    <div className="flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#eef0fc]">
      <h2 className="text-[15px] md:text-[25px]">
        Find cars for sale and for rent near you
      </h2>
      <h2 className="text-[28px]  md:text-[35px] font-bold">
        Find Your Dream Car
      </h2>
      <Search />
      <img src="/tesla.png" className="mt-10" />
    </div>
  );
}

export default Hero;
