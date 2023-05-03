import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Logo(props) {
  const [showRedBall, setShowRedBall] = useState(false);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      {/* <LogoStyle
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showRedBall && <RedBall showRedBall={showRedBall} />}
        <Link to={"/"} className={props.mobile ? "mobile" : "non-mobile"}>
          {props.mobile ? "RBITS" : "RabbitHoles"}
        </Link>
      </LogoStyle> */}
      <LogoStyle

      // onMouseMove={handleMouseMove}
      >
        {showRedBall && (
          <RedBall
            showRedBall={showRedBall}
            x={ballPosition.x}
            y={ballPosition.y}
          />
        )}
        <Link to={"/"} className={props.mobile ? "mobile" : "non-mobile"}>
          {props.mobile ? "RBITS" : "RabbitHoles"}
        </Link>
      </LogoStyle>
    </>
  );
}

const LogoStyle = styled.div`
  position: absolute;
  z-index: 100;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  -o-backdrop-filter: blur(10px);
  -ms-backdrop-filter: blur(10px);
  border-radius: 2rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0;
  /* border-top-width: 0px; */
  border: 2px solid;
  border-color: none;
  color: var(--forrestGreen);
  /* background-color: var(--forrestGreen); */
  top: -2px;
  right: -2px;
  /* margin: 1rem; */

  text-decoration: none;
  font-weight: bold;

  align-items: center;
  font-size: clamp(20px, 6vw, 40px);
  margin-left: auto;
  padding: 0.5rem 1rem;
  /* writing-mode: vertical-lr; */

  /* font-family: "Lato"; */
  font-weight: 700;
  box-shadow: 0px 0px 5px 0px var(--forrestGreen);

  a {
    text-decoration: none;
    color: var(--forrestGreen);
  }

  .non-mobile {
    /* padding: 0 1rem; */
  }

  .mobile {
    /* margin: 0;
    padding: 1rem 0.5rem; */
    /* writing-mode: vertical-lr; */
  }

  :hover {
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    top: 1rem;
    right: 1rem;
  }
`;
