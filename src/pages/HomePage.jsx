import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function passInput() {
    let url = "";

    if (input.toLocaleUpperCase() == "JEFFERY EPSTEIN") url = "/archive/4";
    else if (input.toLocaleUpperCase() == "BREATHWORK") url = "/archive/2";
    else if (input.toLocaleUpperCase() == "SHOWER THOUGHTS") url = "/archive/1";
    else if (input.toLocaleUpperCase() == "CONSPIRACY THEORIES")
      url = "/archive/3";
    else url = "/dig-hole/" + input.toUpperCase();

    navigate(url);
  }

  function setTheInput(_input) {
    setInput(_input);
  }

  return (
    <>
      <div className="container">
        <SearchBox>
          <SearchBar
            placeholder="Enter the RabbitHole..."
            onChange={(event) => setTheInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                passInput();
              }
            }}
          ></SearchBar>
          <SearchBtn className={input == "" ? "one" : "two"}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={() => {
                passInput();
              }}
            ></FontAwesomeIcon>
          </SearchBtn>
        </SearchBox>
      </div>
    </>
  );
}

const SearchBox = styled.div`
  display: flex;
  gap: 1rem;
  font-size: clamp(25px, 4vw, 50px);
  align-items: center;
  border-radius: 2rem;
  border: 3px solid var(--forrestGreen);
  background-color: var(--forrestGreen);
  color: var(--lightGreen);
  box-shadow: 0px 0px 5px 0px var(--forrestGreen);
`;

const SearchBar = styled.input`
  border-radius: 2rem;
  padding: 0.5rem;
  border: 3px solid var(--forrestGreen);
  background-color: rgba(0, 0, 0, 0);
  color: var(--lightGreen);
  text-transform: uppercase;
  width: clamp(100px, 35vw, 500px);
  font-family: "Andale Mono", monospace;
  font-size: clamp(6px, 2vw, 10px);

  ::placeholder {
    color: var(--limeGreen);
  }

  :focus {
    outline: none;
  }
`;

const SearchBtn = styled.div`
  font-size: clamp(15px, 4vw, 20px);
  padding: 0.5rem;
  padding-right: 1rem;

  &.one {
    color: var(--forrestGreen);
  }

  &.two {
    color: var(--limeGreen);
  }

  :hover {
    cursor: pointer;
    color: var(--lightGreen);
  }
`;
