import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserSearchBar(props) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const addr = "0x1234...abcd";

  function passInput() {
    console.log("addr entered: ", input);
    // need to check if addr is valid
    // setInput("");
    navigate(`/user/${input}`);
  }

  return (
    <>
      <SearchBox>
        <SearchBar
          placeholder={props.user == addr ? "Discorver users..." : props.user}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              passInput();
            }
          }}
        ></SearchBar>
        <SearchBtn id="h">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => {
              passInput();
            }}
          ></FontAwesomeIcon>
        </SearchBtn>
      </SearchBox>
    </>
  );
}

const SearchBox = styled.div`
  display: flex;
  gap: 1rem;
  font-size: clamp(25px, 4vw, 50px);
  align-items: center;

  border-radius: 2rem;
  padding: 1rem;
  border: 3px solid var(--forrestGreen);
  background-color: var(--forrestGreen);
  color: var(--limeGreen);
  /* text-transform: uppercase; */
  width: clamp(150px, 40vw, 500px);
  font-family: "Andale Mono", monospace;
  box-shadow: 0px 0px 5px 0px var(--forrestGreen);

  @media only screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0;

    #h {
      border-top: 1px solid var(--greyGreen);
      padding-top: 1rem;
    }
  }
`;

const SearchBar = styled.input`
  /* border-radius: 2rem; */
  padding: 0.5rem 0;
  border: none;
  /* border: 3px solid var(--greyGreen); */
  background-color: rgba(0, 0, 0, 0);
  color: var(--lightGreen);
  width: clamp(150px, 40vw, 500px);
  font-family: "Andale Mono", monospace;

  ::placeholder {
    color: var(--limeGreen);
  }
`;

const SearchBtn = styled.div`
  color: var(--limeGreen);
  font-size: 1.5rem;
  padding-right: 0.5rem;

  :hover {
    cursor: pointer;
    color: var(--lightGreen);
  }

  /* @media only screen and (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
  } */
`;
