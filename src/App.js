import { useState, useEffect, Fragment } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Loader from "react-loader-spinner";
import PageContainer from "./components/PageContainer";
import MovieContext from "./context/MovieContext";
import { getMovies } from "./services/rest";
import "./App.css";
import "react-notifications/lib/notifications.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) =>
        NotificationManager.error("API error. Refresh the page")
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader
          type="Bars"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <MovieContext.Provider value={{ movies }}>
          <PageContainer movies={movies} />
        </MovieContext.Provider>
      )}

      <NotificationContainer />
    </Fragment>
  );
}

export default App;
