import React, { useEffect, useState } from "react";
import useLocalStorage from "react-use-localstorage";
import { Movie, OMDBResponse } from "./Models/Movie";
import { MovieResultDisplay } from "./MovieResultDisplay";

interface IProps {
  query: string;
}

const apiKey = "c27b211a";

export const MovieResults: React.FC<IProps> = ({ query }) => {
  const [resultsList, setResultsList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [nominationsJSON, setNominations] = useLocalStorage("nominations", "");
  const nominations: string[] = nominationsJSON
    ? JSON.parse(nominationsJSON)
    : [];

  const addNomination = (movieId: string) => {
    const newNominations = nominations.concat([movieId]);
    const newNominationsJSON = JSON.stringify(newNominations);
    setNominations(newNominationsJSON);
  };

  // TODO move this into its own hook
  // i.e. const movieResults = useMovieApiCall(query);
  useEffect(() => {
    if (!query) {
      setError("");
      setResultsList([]);
      return;
    }

    setLoading(true);
    fetch(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=${apiKey}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response: OMDBResponse) => {
        const success = response.Response === "True";
        if (success) {
          const responseMovies = response.Search;
          const movieResults = responseMovies.map((movie) => {
            return {
              title: movie.Title,
              year: movie.Year,
              poster: movie.Poster,
              imdbId: movie.imdbID,
            };
          });
          setError("");
          setResultsList(movieResults);
        } else {
          // Failed query to OMDB API
          if (response.Error === "Too many results.") {
            setError("Try a more specific query.");
          } else {
            setError(response.Error);
          }
          setResultsList([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Server down. Please try again!");
        setLoading(false);
      });
  }, [query, setLoading, setResultsList, setError]);

  return (
    <>
      {!loading && !error && (
        <div>
          {resultsList.map((movie) => (
            <MovieResultDisplay
              movie={movie}
              alreadyNominated={nominations.includes(movie.imdbId)}
              addNomination={addNomination}
            ></MovieResultDisplay>
          ))}
        </div>
      )}
      {!loading && error && <h3>{error}</h3>}
    </>
  );
};
