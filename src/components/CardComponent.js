import React from "react";

const CardComponent = ({ character }) => {
  return (
    <div className="card mt-2 shadow-sm">
      <img src={character.img} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title" style={{ whiteSpace: "nowrap" }}>
          {character.name}
        </h5>
      </div>
    </div>
  );
};

export default CardComponent;
