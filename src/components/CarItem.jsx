function CarItem({ car }) {
  return (
    <div>
      <img src={car?.image} width={300} height={250} alt="error" />
      <div className="p-4">
        <h1 className="font-bold text-black texet-lg mb-2">{car?.name}</h1>
      </div>
    </div>
  );
}

export default CarItem;
