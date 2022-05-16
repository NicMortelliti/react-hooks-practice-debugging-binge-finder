import React from "react";

function Episode(props) {
  const { name, number } = props.eachEpisode;

  return (
    <div>
      Episode {number} - {name}
    </div>
  );
}

export default Episode;
