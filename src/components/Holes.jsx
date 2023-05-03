// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowCircleUp,
//   faArrowCircleDown,
//   faArrowsToCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import styled from "styled-components";

// export default function Holes(props) {
//   let { key, key2 } = useParams();
//   if (!key || parseInt(key) == 0) key = 1;
//   if (!key2 || parseInt(key2) == 0) key2 = 1;
//   const [holeId, setHoleId] = useState(key);
//   const [jump, setJump] = useState(key);

//   const maxDepth = 1111; //props.totalDigs;
//   const navigate = useNavigate();

//   function handleHoleJump(_jump) {
//     if (
//       parseInt(_jump) >= 0 &&
//       parseInt(_jump) != parseInt(key) &&
//       parseInt(_jump) <= maxDepth
//     ) {
//       navigate(`/archive/${_jump}`);
//       setJump(_jump);
//       setHoleId(_jump);
//       //   setRabbitId(1);

//       props.setHoleId(_jump);
//       props.setHoleDepth(1);
//     }
//   }

//   const increment = () => {
//     const newIndex = parseInt(jump) + 1;

//     if (newIndex <= maxDepth) {
//       setJump(newIndex);
//       document.getElementById("jump").value = newIndex;
//     }
//   };

//   const decrement = () => {
//     const newIndex = parseInt(jump) - 1;
//     if (newIndex >= 1) {
//       setJump(newIndex);
//       document.getElementById("jump").value = newIndex;
//     } else {
//       setJump(1);
//     }
//   };

//   return (
//     <>
//       <Wrapper>
//         <HoleSwitchers>
//           <input
//             type="number"
//             placeholder={jump}
//             id="jump"
//             max={maxDepth}
//             min={1}
//             className="switcher two outlined-box-free-flex-22" //switcher two
//             onChange={(event) => {
//               setJump(event.target.value);
//             }}
//             onKeyDown={(event) => {
//               if (event.key == "Enter") {
//                 handleHoleJump(parseInt(jump));
//               }
//             }}
//             style={iconStyle2(parseInt(holeId) == parseInt(jump))}
//           ></input>

//           <div
//             className="switcher five outlined-box-free-flex"
//             onClick={() => {
//               handleHoleJump(parseInt(jump));
//             }}
//             style={iconStyle(parseInt(holeId) == parseInt(jump))}
//           >
//             <FontAwesomeIcon icon={faArrowsToCircle} />
//           </div>

//           <div
//             className="switcher one outlined-box-free-flex"
//             onClick={() => {
//               decrement(jump);
//             }}
//             //   style={iconStyle(true)}
//           >
//             <FontAwesomeIcon icon={faArrowCircleUp} />
//           </div>
//           <div
//             className="switcher four outlined-box-free-flex"
//             onClick={() => {
//               increment(jump);
//             }}
//           >
//             <FontAwesomeIcon icon={faArrowCircleDown} />
//           </div>
//         </HoleSwitchers>
//         <div
//           className={
//             parseInt(holeId) == parseInt(jump)
//               ? "outlined-boxx hole-itself"
//               : "outlined-box hole-itself"
//           }
//         >
//           <h4>
//             Hole #{key}:<em> "{props.holeData.title}"</em>
//           </h4>
//           <h4>
//             Digger: <em>{props.holeData.digger}</em>
//           </h4>
//           <h4>
//             Depth: <em>{props.holeData.depth}</em>
//           </h4>
//           <h4>
//             Timestamp: <em>{props.holeData.timestamp}</em>
//           </h4>
//         </div>
//       </Wrapper>
//     </>
//   );
// }

// const Wrapper = styled.div`
//   /* margin-top: 10vh; */
//   display: grid;
//   grid-template-columns: auto auto;
//   grid-template-rows: auto auto;
//   gap: 1rem;
//   text-align: center;
//   margin: auto 0;
//   .rabbits {
//     display: grid;
//     justify-content: center;
//     grid-column: 1/-1;
//   }
// `;

// const HoleSwitchers = styled.div`
//   display: grid;
//   gap: 0.5rem;
//   align-items: left;
//   justify-items: left;
//   text-align: center;
//   user-select: none;

//   input {
//     ::placeholder {
//       color: var(--greyGreen);
//     }

//     :focus {
//       outline: none;
//     }
//   }

//   .switcher {
//     border-color: rgba(0, 0, 0, 0.01);
//     border-style: inset;

//     /* color: var(--lightGreen); */

//     &:hover {
//       cursor: pointer;
//       transition: color 0.2s;
//       color: var(--limeGreen);
//       /* border-style: inset; */
//     }

//     overflow: hidden;
//     font-size: clamp(10px, 3vw, 13px);
//     box-shadow: 0px 0px 5px 0px var(--forrestGreen);

//     height: clamp(10px, 3vw, 20px);
//     width: clamp(10px, 3vw, 20px);

//     /* transition: border 3s; */
//   }

//   input {
//     max-width: fit-content;
//     overflow: hidden;
//     width: 50px;
//     color: var(--limeGreen);
//     font-size: clamp(9px, 3vw, 14px);
//   }

//   button:hover {
//     cursor: pointer;
//   }
// `;

// const iconStyle = (isActive) => ({
//   color: !isActive ? "var(--limeGreen)" : "var(--forrestGreen)",
//   transition: "color 0.2s",
// });

// const iconStyle2 = (isActive) => ({
//   color: !isActive ? "var(--limeGreen)" : "var(--greyGreen)",
//   transition: "color 0.2s",
// });
