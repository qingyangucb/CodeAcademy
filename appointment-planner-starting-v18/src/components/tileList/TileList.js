import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts }) => {
  // console.log("????????????????");
  // console.log(contacts);
  return (
    <div>
      {contacts.map((contact, index) => {
        const { name, ...description } = contact;
        return <Tile name={name} description={description} key={index} />;
      })}
    </div>
  );
};
