import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Winter" : "Summer";
  } else {
    return lat > 0 ? "Summer" : "Winter";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth);
  const text =
    season === "Winter" ? "Burr, is is chilly" : "Lets hit the beach";
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
