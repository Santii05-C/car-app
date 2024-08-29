function CarItem({ car }) {
  return (
    <div>
      <img src={car?.image} width={300} height={250} alt="error" />
    </div>
  );
}

export default CarItem;
//1:10
