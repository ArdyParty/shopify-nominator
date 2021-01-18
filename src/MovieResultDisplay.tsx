import { useState } from "react";
import useLocalStorage from "react-use-localstorage";
import { Movie } from "./Models/Movie";

interface IProps {
  movie: Movie;
  alreadyNominated: boolean;
  addNomination: (movieId: string) => void;
}

export const MovieResultDisplay: React.FC<IProps> = ({
  movie,
  alreadyNominated,
  addNomination,
}) => {
  return (
    <div key={movie.imdbId}>
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <button
        onClick={() => addNomination(movie.imdbId)}
        disabled={alreadyNominated}
      >
        Nominate
      </button>
    </div>
  );
};
