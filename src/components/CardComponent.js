import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ character }) => {
  return (
    <div class="card mt-2 shadow-sm">
      <img src={character.img} class="card-img-top" alt={character.name} />
      <div class="card-body">
        <h5 class="card-title" style={{ whiteSpace: "nowrap" }}>
          {character.name}
        </h5>
      </div>
    </div>
  );
};

export default CardComponent;
