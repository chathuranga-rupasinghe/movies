import { useParams, useHistory } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import {TitleBar} from "./TitleBarComponent";
import './MovieDetailPage.css';

function MovieDetail() {
  const { name } = useParams();
  const { movies } = useContext(MovieContext);
  const history = useHistory();

  const movie = movies.find((movie) => movie.name === name);

  const movieSynopsisArr = movie?.synopsis?.split('<br /><br />');

  if (!movie) {
    return <div>Movie not found</div>;
  }
  const backToHome = () => {
    history.push('/');
  }

  return (
    <>
      <TitleBar title={movie.name}/>
      <div className="homeButton" onClick={backToHome}>Home</div>
      <div className="shortDesc">
        <div className="imgCard"> 
          <img className="img" alt={movie.image} src={process.env.PUBLIC_URL + '/images/' + movie.image} />
        </div>
        <div className="descCard">
          <h4 className="synopsisShort">{movie.synopsisShort}</h4>
          <p>({movie.productionYear})</p>
          <p>{movie.genre}</p>
        </div>
      </div>
      <div className="desc">
        {movieSynopsisArr.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <br/>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default MovieDetail;
