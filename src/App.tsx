import React, { useState } from "react";
import "./App.css";
import { AppHeader } from "./AppHeader";
import { SearchBox } from "./SearchBox";
import { MovieResults } from "./MovieResults";
import { NominationsList } from "./NominationsList";
import { Col, Container, Nav, Row } from "react-bootstrap";

function App() {
  const [query, setQuery] = useState("");

  const onChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <Container>
      <Nav activeKey="https://github.com/ArdyParty/shopify-nominator">
        <Nav.Item>
          <Nav.Link href="https://github.com/ArdyParty/shopify-nominator">GitHub Repo</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row style={{padding: '50px'}}>
        <AppHeader />
      </Row>
      <Row style={{padding: '0 50px 50px'}}>
        <SearchBox onChange={onChange} />
      </Row>
      <Row>
        <MovieResults query={query} />
        <NominationsList />
      </Row>
    </Container>
  );
}

export default App;
