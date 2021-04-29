import { useContext, useState } from "react";
import MovieContext from "../context/MovieContext";
import MovieTile from "./MovieTileComponent";
import { FormGroup, Label, Input } from "reactstrap";
import {TitleBar} from "./TitleBarComponent";
import "./HomePage.css";

const ANY = "Any";

function HomePage() {
  const { movies } = useContext(MovieContext);
  const [year, setYear] = useState(ANY);
  const [genre, setGenre] = useState(ANY);

  const getUniqueYears = () => {
    let unique = [...new Set(movies.map((item) => item.productionYear))];
    return [ANY, ...unique.sort()];
  };

  const getUniqueGenres = () => {
    let unique = [...new Set(movies.map((item) => item.genre))];
    return [ANY, ...unique.sort()];
  };

  const getFilteredMovies = () => {
    return movies
      .filter((movie) => {
        if (year !== ANY) {
          return movie.productionYear === parseInt(year);
        }
        return true;
      })
      .filter((movie) => {
        if (genre !== ANY) {
          return movie.genre === genre;
        }
        return true;
      });
  };

  return (
    <div>
      <TitleBar title='Movies'/>
      <div className="filterBox">
        <div className="filter">
          <FormGroup className="filterTag">
            <Label>Year</Label>
            <Input
              type="select"
              name="select"
              id="selectYear"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              {getUniqueYears().map((year) => (
                <option key={year}>{year}</option>
              ))}
            </Input>
          </FormGroup>
        </div>
        <div className="filter">
          <FormGroup className="filterTag">
            <Label>Genre</Label>
            <Input
              type="select"
              name="select"
              id="selectGenre"
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            >
              {getUniqueGenres().map((y) => (
                <option key={y}>{y}</option>
              ))}
            </Input>
          </FormGroup>
        </div>
      </div>
      <div className="movieList">
        {getFilteredMovies().length === 0 ? (
          <div>No matching results</div>
        ) : (
          getFilteredMovies().map((movie) => <MovieTile key={movie.name} movie={movie} />)
        )}
      </div>
    </div>
  );
}

export default HomePage;
