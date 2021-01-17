export interface Movie {
  title: string;
  year: string;
  poster: string;
  imdbId: string;
}

export interface OMDBResponseMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface OMDBResponse {
  Search: OMDBResponseMovie[];
  Response: string;
  Error: string;
}
