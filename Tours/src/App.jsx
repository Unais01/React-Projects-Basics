import Tours from "./Tours";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTours = async () => {
    const url = "https://www.course-api.com/react-tours-project";
    setLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const tourData = await response.json();
      setLoading(false);
      setTours(tourData);
    } catch (error) {
      console.log("error in fetching API!!!");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchTours();
    }, 500);
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="toggle-btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
