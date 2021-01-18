import useLocalStorage from "@rehooks/local-storage";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
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
  const [nominations, setNominations] = useLocalStorage("nominations", [] as Movie[]);

  const addNomination = (movie: Movie) => {
    const newNominations = nominations.concat([movie]);
    setNominations(newNominations);
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
    <Col md="6" xs="12">
      {loading && "Loading..."}
      {!loading && !error && (
        <>
          <>
            {resultsList.length >= 1 && (
              <h2 style={{ marginBottom: '20px' }}>Search results for {query}</h2> 
            )}
          </>
          <>
            {resultsList.map((movie) => (
              <MovieResultDisplay
                movie={movie}
                nominationDisabled={
                  nominations.length === 5 ||  // No more nominations if we're at capacity
                  nominations.find((nomination) => nomination.imdbId === movie.imdbId) !== undefined  // Cannot re-nominate if already nominated
                }
                addNomination={addNomination}
              ></MovieResultDisplay>
            ))}
          </>
        </>
      )}
      {!loading && error && <h3>{error}</h3>}
    </Col>
  );
};
