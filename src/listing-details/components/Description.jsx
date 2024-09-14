function Description({ carDetail }) {
  return (
    <div className="">
      {carDetail?.listingDescription ? (
        <div className="p-10 rounded-xl bg-white shadow-md mt-6 border">
          <h2 className="my-2 font-medium text-2xl">Description</h2>
          <p className="">{carDetail?.listingDescription}</p>
        </div>
      ) : (
        <div className="w-full h-[100px] mt-7 bg-slate-200 animate-pulse rounded-xl"></div>
      )}
    </div>
  );
}

export default Description;
