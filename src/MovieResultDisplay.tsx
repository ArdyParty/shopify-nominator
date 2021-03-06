import { Button } from "react-bootstrap";
import { Movie } from "./Models/Movie";

interface IProps {
  movie: Movie;
  nominationDisabled: boolean;
  addNomination: (movie: Movie) => void;
}

export const MovieResultDisplay: React.FC<IProps> = ({
  movie,
  nominationDisabled,
  addNomination,
}) => {
  return (
    <div key={movie.imdbId} style={{display: 'flex', marginBottom: '30px'}}>
      <img width="35%" src={movie.poster} alt="Movie Poster"></img> 
      <div style={{display: 'block', width: "65%", padding: "20px"}}>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <Button
          onClick={() => addNomination(movie)}
          disabled={nominationDisabled}
        >Nominate
        </Button>
      </div>
    </div>
  );
};
