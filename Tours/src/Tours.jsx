import Tour from "./Tour";

const Tours = ({ tours,removeTour }) => {
  return (
    <div>
      <div className="title">
        <h1>Explore the World Tours</h1>
      </div>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Tours;
