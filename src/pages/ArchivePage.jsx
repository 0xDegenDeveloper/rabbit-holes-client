import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import fetchHoleData from "../components/hooks/fetchHoleData";
import fetchRabbitData from "../components/hooks/fetchRabbitData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsToCircle,
  faCircleArrowLeft,
  faCircleArrowRight,
  faFireAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ArchivePage(props) {
  const navigate = useNavigate();
  let { key, key2 } = useParams();
  if (!key || parseInt(key) == 0) key = 1;
  if (!key2 || parseInt(key2) == 0) key2 = 1;

  const [holeId, setHoleId] = useState(key);
  const [holeJump, setHoleJump] = useState(key);
  const [rabbitJump, setRabbitJump] = useState(key2);
  const [depthIndex, setDepthIndex] = useState(key2);

  //   const [rabbitId, setRabbitId] = useState(key2);

  const totalDigs = 1111;

  const holeData = useMemo(() => {
    return fetchHoleData(holeId);
  }, [holeId]);

  const rabbitId = holeData.rabbitIds[depthIndex - 1];
  const rabbitData = useMemo(() => {
    return fetchRabbitData(rabbitId);
  }, [rabbitId]);

  function holeJumpRight() {
    const newIndex = parseInt(holeJump ? holeJump : holeId) + 1;
    if (newIndex <= totalDigs) {
      setHoleJump(newIndex);
      document.getElementById("hole-jump").value = newIndex;
    }
  }
  function rabbitJumpRight() {
    const newIndex = parseInt(rabbitJump ? rabbitJump : depthIndex) + 1;
    if (newIndex <= holeData.depth) {
      setRabbitJump(newIndex);
      document.getElementById("rabbit-jump").value = newIndex;
    }
  }

  function holeJumpLeft() {
    const newIndex = parseInt(holeJump ? holeJump : holeId) - 1;
    if (newIndex >= 1) {
      setHoleJump(newIndex);
      document.getElementById("hole-jump").value = newIndex;
    }
  }

  function rabbitJumpLeft() {
    const newIndex = parseInt(rabbitJump ? rabbitJump : depthIndex) - 1;
    if (newIndex >= 1) {
      setRabbitJump(newIndex);
      document.getElementById("rabbit-jump").value = newIndex;
    }
  }

  function holeJumpFunc() {
    if (holeJump != holeId && holeJump > 0) {
      setHoleId(holeJump);
      setDepthIndex(1);
      setRabbitJump(1);
      navigate(`/archive/${holeJump}/1`);
    }
  }

  function rabbitJumpFunc() {
    if (rabbitJump != depthIndex && depthIndex > 0) {
      setDepthIndex(rabbitJump);
      navigate(`/archive/${holeJump}/${rabbitJump}`);
    }
  }

  return (
    <>
      <div className="container">
        <Wrapper className="outlined-boxxx">
          <div className="holes">
            <div className="hole">
              <h4>
                hole #{holeId}: <em>"{holeData.title}"</em>
              </h4>
              <h4>
                digger: <em>{holeData.digger}</em>
              </h4>
              <h4>
                timestamp: <em>{holeData.timestamp}</em>
              </h4>
              <h4>
                depth: <em>{holeData.depth}</em>
              </h4>
            </div>
            <div className="sels">
              <input
                className="sel hole-jump"
                value={holeJump}
                type="number"
                min={1}
                max={totalDigs}
                id="hole-jump"
                style={inputStyle(parseInt(holeId) == parseInt(holeJump))}
                onChange={(e) => {
                  setHoleJump(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") holeJumpFunc();
                }}
                // size={calculateSize(holeJump)}
              ></input>
              <div
                className="sel outlined-box-free-flex"
                onClick={() => {
                  holeJumpLeft();
                }}
              >
                <FontAwesomeIcon icon={faCircleArrowLeft} />
              </div>
              <div
                className="sel outlined-box-free-flex"
                onClick={() => {
                  holeJumpRight();
                }}
              >
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>
              <div
                className={`sel jump-sel outlined-box-free-flex ${
                  parseInt(holeId) == parseInt(holeJump) ? "inactive" : "active"
                }`}
                onClick={() => {
                  holeJumpFunc();
                }}
              >
                <FontAwesomeIcon icon={faArrowsToCircle} />
              </div>
            </div>
          </div>

          <HBar />
          <div className="rabbits">
            <div className="rabbit">
              <h4>
                rabbit <em>#{rabbitId}</em>
              </h4>
              <h4>
                burner: <em>{rabbitData.burner}</em>
              </h4>
              <h4>
                timestamp: <em>{rabbitData.timestamp}</em>
              </h4>
              <h4>
                msg: <em>{rabbitData.msg}</em>
              </h4>
            </div>
            <div className="sels">
              <div
                className="sel burn outlined-box-free-flex"
                onClick={() => {
                  navigate(`/burn-rabbit/${holeData.title}`);
                }}
              >
                <FontAwesomeIcon icon={faFireAlt} />
              </div>
              <input
                className="sel rabbit-jump"
                value={rabbitJump}
                type="number"
                min={1}
                max={holeData.depth}
                id="rabbit-jump"
                style={inputStyle(parseInt(depthIndex) == parseInt(rabbitJump))}
                onChange={(e) => {
                  setRabbitJump(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") rabbitJumpFunc();
                }}
                // size={calculateSize(holeJump)}
              ></input>
              <div
                className="sel outlined-box-free-flex"
                onClick={() => {
                  rabbitJumpLeft();
                }}
              >
                <FontAwesomeIcon icon={faCircleArrowLeft} />
              </div>
              <div
                className="sel outlined-box-free-flex"
                onClick={() => {
                  rabbitJumpRight();
                }}
              >
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>

              <div
                className={`sel jump-sel outlined-box-free-flex ${
                  parseInt(depthIndex) == parseInt(rabbitJump)
                    ? "inactive"
                    : "active"
                }`}
                onClick={() => {
                  rabbitJumpFunc();
                }}
              >
                <FontAwesomeIcon icon={faArrowsToCircle} />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

const Wrapper = styled.div`
  border: none;
  /* margin-top: 10vh; */
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto 1fr;
  gap: 1rem;
  max-height: 60%;
  border: none;

  /*width:fit-content*/ /*text-align:center*/ /*margin:auto0*/
  user-select: none;

  .holes,
  .rabbits {
    display: flex;
    /* grid-template-columns: 1fr; */
    /* gap: 0.5rem; */
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    h4 {
      margin: 0.5rem;
    }
  }

  .hole,
  .rabbit {
    padding: 0.5rem;
  }

  .rabbit {
    min-height: 110px;
    overflow-y: scroll;
  }

  input {
    :focus {
      outline: none;
    }
    ::placeholder {
      color: var(--lightGreen);
    }
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    color: var(--lightGreen);
    text-align: right;
  }

  .sels {
    margin-top: auto;
    display: flex;
    justify-content: center;
    margin-left: auto;
    /* margin-right: 0.5rem; */

    /* padding: 0.25rem; */

    /* overflow: hidden; */
    /* justify-content: ; */
    /* flex-direction: column; */
  }

  .sel {
    border: none;
    /* max-width: fit-content; */
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 0);
    color: var(--lightGreen);
    overflow: hidden;
    padding: 0.5rem;
    width: fit-content;

    :hover {
      cursor: pointer;
      color: var(--limeGreen);
    }

    &.burn {
      color: var(--limeGreen);

      :hover {
        cursor: pointer;
        color: var(--lightGreen);
      }
    }
  }

  .jump-sel {
    color: var(--limeGreen);

    &.active {
      color: var(--limeGreen);

      :hover {
        cursor: pointer;
      }
    }

    &.inactive {
      color: var(--forrestGreen);
    }

    :hover {
      cursor: default;
    }
  }

  width: clamp(400px, 40vw, 500px);
  @media only screen and (max-width: 760px) {
    width: 55%;
  }
`;

function inputStyle(isActive) {
  return {
    color: !isActive ? "var(--limeGreen)" : "var(--lightGreen)",
    transition: "color 0.2s",
  };
}

const HBar = styled.div`
  width: 90%;
  height: 1px;
  background-color: var(--limeGreen);
  margin: 0 auto;
`;
