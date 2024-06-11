import React from "react";
import { Droppable } from "react-beautiful-dnd";
import flameImage from "../assets/flame.png";

export default function LampPost({ index, flame }) {
  return (
    <Droppable droppableId={`lamppost-${index}`}>
      {(provided) => (
        <div
          className="lamppost"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {flame ? (
            <img src={flameImage} alt="flame" className="flame-image" />
          ) : (
            <div className="lamppost-placeholder">Lamp</div>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
