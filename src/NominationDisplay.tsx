import { Button } from "react-bootstrap";
import { Movie } from "./Models/Movie";

interface IProps {
  movie: Movie;
  removeNomination: (movieId: string) => void;
}

export const NominationDisplay: React.FC<IProps> = ({
  movie,
  removeNomination,
}) => {
  return (
    <div key={movie.imdbId} style={{display: 'flex', marginBottom: '30px'}}>
      <img width="35%" src={movie.poster} alt="Movie Poster"/>
      <div style={{display: 'block', width: "65%", padding: "20px"}}>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <Button
            variant="danger"
            onClick={() => removeNomination(movie.imdbId)}
        >
            Remove
        </Button>
      </div>
    </div>
  );
};