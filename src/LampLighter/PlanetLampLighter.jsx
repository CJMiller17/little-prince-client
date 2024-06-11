import React from "react";
import LampPost from "./LampPosts";

export default function PlanetGameBoard({ lampposts }) {
  return (
    <div className="gameboard">
      {lampposts.map((flame, index) => (
        <LampPost key={index} index={index} flame={flame} />
      ))}
    </div>
  );
}
