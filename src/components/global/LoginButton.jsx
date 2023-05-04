import { useState } from "react";
import Navbar from "./Navbar";

import styled from "styled-components";

export default function LoginButton(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginBtn
      onClick={() => {
        setLoggedIn(!loggedIn);
      }}
    >
      Verify Keys
    </LoginBtn>
  );
  //0x1234...abcd
}

const LoginBtn = styled.div`
  position: absolute;
  max-width: fit-content;
  white-space: nowrap;
  background-color: var(--forrestGreen);
  color: var(--forrestGreen);
  border-color: var(--forrestGreen);
  border-style: solid;

  border-width: 2px;
  border-radius: 2rem;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;

  background-color: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  -moz-backdrop-filter: blur(2px);
  -o-backdrop-filter: blur(2px);
  -ms-backdrop-filter: blur(2px);
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.2);

  border-top-left-radius: 0;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 1rem;
  /* margin: 2rem 0rem 0rem 2rem; */
  /* margin-top: 1rem;
  margin-left: 1rem; */
  top: 0;
  top: -2px;

  left: -2px;
  padding: 1rem 1rem;
  z-index: 1000;
  overflow: hidden;

  font-family: "Lato";
  font-weight: 700;
  /* writing-mode: vertical-lr; */

  font-size: clamp(12px, 2vw, 17px);
  &:hover {
    cursor: pointer;
    color: var(--greyGreen);
    box-shadow: 0px 0px 5px 0px var(--forrestGreen);
    background-color: var(--forrestGreen);

    /* border-top-left-radius: 0;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0; */
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-top-right-radius: 2rem;

    top: 1rem;
    left: 1rem;
  }

  /* @media only screen and (max-width: 760px) {
    top: 4.5rem;
  } */
`;
