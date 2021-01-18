import useLocalStorage from "@rehooks/local-storage";
import React from "react";
import { Alert } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import { Movie } from "./Models/Movie";
import { NominationDisplay } from "./NominationDisplay";


const apiKey = "c27b211a";

export const NominationsList: React.FC = () => {
  const [nominations, setNominations] = useLocalStorage("nominations", [] as Movie[]);


  const removeNomination = (movieId: string) => {
    const newNominations = nominations.reduce((accumulator, movie) => {
      if (movie.imdbId !== movieId) {
        accumulator.push(movie)
      }
        return accumulator
    }, [] as Movie[]);

    setNominations(newNominations)
  };

  return (
    <Col md="6" xs="12">
      <h2 style={{ marginBottom: '20px' }}>Your Nominations</h2> 
      {nominations.length === 5 && (
        <Alert variant="success">
          Your nominations are full, thank you!
        </Alert>
      )}
      {nominations.map((movie) => (
        <NominationDisplay
          movie={movie}
          removeNomination={removeNomination}
        ></NominationDisplay>
      ))}
    </Col>
  );
};
