import React from "react";
import Form from "react-bootstrap/esm/Form";

interface IProps {
  onChange: (query: string) => void;
}

export const SearchBox: React.FC<IProps> = ({ onChange }) => {
  return (
    <Form.Group style={{ width: "100%" }} >
      <Form.Control size="lg" type="text" placeholder="Search for a movie..." onChange={(event) => {
        onChange(event.target.value);
      }} />
    </Form.Group>
  );
};
