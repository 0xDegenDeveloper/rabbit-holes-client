import { useState } from "react";
import sample from "../../assets/sample-data.json";

export default function fetchHoleData(holeId) {
  holeId = sample[holeId] ? parseInt(holeId) : 0;
  // parseInt(holeId) >= 1 && parseInt(holeId) <= 3 ? parseInt(holeId) : 0;

  const holeData = sample[holeId];
  const rabbitIds = [];

  for (let rabbit in holeData.rabbits) {
    rabbitIds.push(parseInt(holeData.rabbits[rabbit].id));
  }

  // r is a random int between 2 and 11
  const r = Math.floor(Math.random() * 10) + 2;
  for (let i = 0; i < r; i++) {
    rabbitIds.push(0);
  }

  return {
    title: holeData.title,
    depth: rabbitIds.length,
    digger: holeData.digger,
    timestamp: holeData.timestamp,
    rabbitIds: rabbitIds,
  };
}
