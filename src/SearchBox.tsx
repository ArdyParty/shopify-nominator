import React from "react";

interface IProps {
  onChange: (query: string) => void;
}

export const SearchBox: React.FC<IProps> = ({ onChange }) => {
  return (
    <input
      onChange={(event) => {
        onChange(event.target.value);
      }}
    ></input>
  );
};
