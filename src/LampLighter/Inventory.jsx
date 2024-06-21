import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import flameImage from '../public/assets/flame.png'

export default function Inventory({ flames }) {
  return (
    <Droppable droppableId="inventory">
      {(provided) => (
        <div
          className="inventory-lamp"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2>Inventory</h2>
          {flames.map((flame, index) => (
            <Draggable key={flame} draggableId={flame} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="flame"
                >
                  <img
                    src={flameImage}
                    alt="A red flame"
                    className="flame-image"
                  />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
