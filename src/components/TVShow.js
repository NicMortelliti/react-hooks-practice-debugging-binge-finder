import React from "react";

function tvShow(props) {
  return (
    <div>
      <br />
      <img src={props.show.medium} onClick={props.selectShow} alt="" />
    </div>
  );
}

export default tvShow;
