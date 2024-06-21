import React from "react";
import LampPost from "./LampPosts";

export default function PlanetGameBoard({ lampposts }) {
  return (
    <div className="gameboard-lamp">
      {lampposts.map((flame, index) => (
        <LampPost key={index} index={index} flame={flame} />
      ))}
    </div>
  );
}
