// import { useState } from "react";
// import sample from "../../assets/sample-data.json";

// export default function fetchUserData(holeId) {
//   /// get hole id, title, depth

//   const holes = [];
//   const rabbits = [];

//   for (const key in sample) {
//     if (parseInt(key) == 0) continue;
//     let hole = sample[key];
//     let details = {
//       title: hole.title,
//       depth: hole.rabbits.length + 11,
//       id: parseInt(key),
//     };
//     holes.push(details);
//     for (let h in sample[key].rabbits) {
//       let rabbit = sample[key].rabbits[h];
//       let rabbitDetails = {
//         global_id: rabbit.id,
//         msg: rabbit.msg,
//         id: parseInt(h) + 1,
//         hole_id: key,
//         title: hole.title,
//       };
//       rabbits.push(rabbitDetails);
//     }
//   }
//   return { holes, rabbits };
// }
import sample from "../../assets/sample-data.json";

export default function fetchUserData(holeId) {
  const holeKeys = Object.keys(sample).filter((key) => parseInt(key) !== 0);

  const holes = holeKeys
    .map((key) => {
      const hole = sample[key];
      return {
        id: parseInt(key),
        title: hole.title,
        depth: hole.rabbits.length + 11,
      };
    })
    .sort((a, b) => a.id - b.id);

  const rabbits = holeKeys
    .flatMap((key) => {
      const hole = sample[key];
      return hole.rabbits.map((rabbit, rabbitIndex) => ({
        global_id: rabbit.id,
        msg: rabbit.msg,
        id: rabbitIndex + 1,
        hole_id: parseInt(key),
        title: hole.title,
      }));
    })
    .sort((a, b) => a.global_id - b.global_id);

  return { holes, rabbits };
}
