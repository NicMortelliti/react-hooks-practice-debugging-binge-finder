import React from "react";

function tvShow(props) {
  return (
    <div>
      <br />
      <img
        src={props.show.image.medium}
        onClick={() => props.selectShow(props.show)}
        alt={props.show.name}
      />
    </div>
  );
}

export default tvShow;
