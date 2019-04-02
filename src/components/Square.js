import React from "react";

export default function Square(props) {
  return (
    <button
      className="square"
      id={props.number}
      onClick={() => {
        props.onClick({ value: "X" });
      }}
    >
      {props.value}
    </button>
  );
}
