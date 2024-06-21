import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Inventory from "./Inventory";
import PlanetGameBoard from "./PlanetLampLighter";
import "./Lamp.css";
import { Heading } from "@chakra-ui/react";

function LampApp() {
  const [flames, setFlames] = useState([
    "flame1",
    "flame2",
    "flame3",
    "flame4",
  ]);
  const [lampposts, setLampposts] = useState(Array(9).fill(null));

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    // Handle the drop from Inventory to Lamppost
    if (
      source.droppableId === "inventory" &&
      destination.droppableId.startsWith("lamppost-")
    ) {
      const lamppostIndex = parseInt(destination.droppableId.split("-")[1], 10);
      const newLampposts = [...lampposts];

      // Only update if the lamppost is empty
      if (!newLampposts[lamppostIndex]) {
        newLampposts[lamppostIndex] = draggableId;
        setLampposts(newLampposts);

        // Remove the flame from the inventory
        setFlames(flames.filter((flame) => flame !== draggableId));
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App-lamp">
        <Heading fontFamily="Lobster Two">Lamp Lighter Game</Heading>
        <div className="game-container-lamp">
          <Inventory flames={flames} />
          <PlanetGameBoard lampposts={lampposts} />
        </div>
      </div>
    </DragDropContext>
  );
}

export default LampApp;
