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
  padding: 0.5rem;
  border: 3px solid var(--forrestGreen);
  background-color: var(--forrestGreen);
  color: var(--limeGreen);
  font-family: "Andale Mono", monospace;
  box-shadow: 0px 0px 5px 0px var(--forrestGreen);
`;

const SearchBar = styled.input`
  /* padding: 0.5rem 0; */
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: var(--lightGreen);
  width: clamp(150px, 40vw, 500px);
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
  color: var(--limeGreen);
  font-size: 1.5rem;
  padding-right: 0.5rem;
  font-size: clamp(15px, 4vw, 20px);

  :hover {
    cursor: pointer;
    color: var(--lightGreen);
  }
`;
