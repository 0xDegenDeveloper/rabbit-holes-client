import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowCircleUp,
  faArrowsToCircle,
  faDigging,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import fetchRabbitData from "./hooks/fetchRabbitData";

export default function Rabbits(props) {
  const [jump, setJump] = useState(props.holeDepth);
  const rabbitIds = props.rabbitIds ? props.rabbitIds : [0];

  const i =
    props.holeDepth > rabbitIds.length - 1
      ? rabbitIds.length - 1
      : props.holeDepth - 1;

  const rabbitId = rabbitIds[i];

  const maxDepth = 55; //props.maxDepth;

  const rabbitMeta = fetchRabbitData(rabbitId);

  useEffect(() => {
    setJump(props.holeDepth);
    document.getElementById("jumpR").value = props.holeDepth;
    document.getElementById("jumpR").placeholder = props.holeDepth;
  }, [props.holeDepth]);

  const navigate = useNavigate();

  // console.log(props.holeId);
  // console.log(rabbitIndex);

  function handleRabbitIndexJump(_jump) {
    if (_jump >= 0 && _jump <= maxDepth) {
      navigate(`/gallary/${props.holeId}/${_jump}`);
      // setRabbitIndex(parseInt(_jump));
      // setJump(parseInt(_jump));
      props.setHoleDepth(_jump);
    }
  }

  const increment = () => {
    const newIndex = parseInt(jump) + 1;

    if (newIndex <= rabbitIds.length) {
      setJump(newIndex);
      document.getElementById("jumpR").value = newIndex;
    }
  };

  const decrement = () => {
    const newIndex = parseInt(jump) - 1;
    if (newIndex >= 1) {
      setJump(newIndex);
      document.getElementById("jumpR").value = newIndex;
    } else {
      setJump(1);
    }
  };

  // useEffect(() => {
  //   setRabbitIndex(props.index);
  // }, [props.index]);

  return (
    <Wrapper>
      <div
        className={
          parseInt(props.holeDepth) == parseInt(jump)
            ? "outlined-boxx hole-itself"
            : "outlined-box hole-itself"
        }
      >
        <h4>
          Rabbit <em>#{rabbitId}</em>
        </h4>
        <h4>
          Burner: <em>{rabbitMeta.burner}</em>
        </h4>
        <h4>
          Message: <em>{rabbitMeta.msg}</em>
        </h4>
        <h4>
          Timestamp: <em>{rabbitMeta.timestamp}</em>
        </h4>
      </div>
      <Switchers className="switchers" mobile={props.mobile}>
        <input
          type="number"
          placeholder={props.holeDepth}
          id="jumpR"
          max={maxDepth}
          min={1}
          style={iconStyle2(parseInt(props.holeDepth) == parseInt(jump))}
          className="switcher two outlined-box-free-flex-2"
          onChange={(event) => {
            setJump(event.target.value);
          }}
          onKeyDown={(event) => {
            console.log("hit", event.key);
            if (event.key == "Enter") {
              handleRabbitIndexJump(jump);
            }
          }}
          // value={jump}
        ></input>
        <div
          className="switcher three outlined-box-free-flex"
          onClick={() => {
            handleRabbitIndexJump(jump);
          }}
          style={iconStyle(parseInt(props.holeDepth) == parseInt(jump))}
        >
          <FontAwesomeIcon icon={faArrowsToCircle} />
        </div>

        <div
          className="switcher one outlined-box-free-flex"
          onClick={() => {
            decrement(jump);
          }}
        >
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </div>
        <div
          className="switcher four outlined-box-free-flex"
          onClick={() => {
            increment(jump);
          }}
        >
          <FontAwesomeIcon icon={faArrowCircleDown} />
        </div>
        <div
          className="switcher five outlined-box-free-flex"
          onClick={() => {
            navigate(`/burn-rabbit/${props.holeDetails.title}`);
          }}
        >
          <FontAwesomeIcon icon={faDigging} />
        </div>
      </Switchers>
    </Wrapper>
  );
}

const iconStyle = (isActive) => ({
  color: !isActive ? "var(--limeGreen)" : "var(--forrestGreen)",
  transition: "color 0.2s",
});

const iconStyle2 = (isActive) => ({
  color: !isActive ? "var(--limeGreen)" : "var(--greyGreen)",
  transition: "color 0.2s",
});

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  align-items: right;
  align-content: right;
  justify-items: right;
  justify-content: right;
  text-align: center;

  .content {
    grid-column: 1;
    grid-row: 1;
  }

  .switchers {
    grid-column: 2;
    grid-row: 1;
  }

  #jumpR:hover {
    /* color: var(--limeGreen); */
  }
`;

const Switchers = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: right;
  justify-items: right;
  text-align: right;
  user-select: none;

  .switcher {
    border-color: rgba(0, 0, 0, 0.01);
    border-style: inset;

    &:hover {
      cursor: pointer;
      transition: color 0.2s;
      color: var(--limeGreen);
      border-style: inset;
    }
    overflow: hidden;
    font-size: clamp(10px, 3vw, 13px);
    box-shadow: 0px 0px 5px 0px var(--forrestGreen);

    height: clamp(10px, 3vw, 20px);
    width: clamp(10px, 3vw, 20px);
  }

  input {
    max-width: fit-content;
    overflow: hidden;
    width: 50px;
    color: var(--limeGreen);
    font-size: clamp(9px, 3vw, 14px);

    ::placeholder {
      color: var(--greyGreen);
    }

    :focus {
      outline: none;
    }
  }

  button:hover {
    cursor: pointer;
  }

  .five {
    grid-column: 1 / -1;
  }
`;
