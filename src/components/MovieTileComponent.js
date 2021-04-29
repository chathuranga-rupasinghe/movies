import { useHistory } from "react-router-dom";
import "./MovieTile.css";

function MovieTile(props) {
  const history = useHistory();
  const clickOnMoveCard = () => {
    history.push("/" + props.movie.name)
  }
  return (
    <div onClick={clickOnMoveCard} className="movieCard">
      <div className="cardContent">
        <p className="movieName">{props.movie.name}</p>
        <h6>Genre: {props.movie.genre}</h6>
      </div>
    </div>
  );
}

export default MovieTile;
