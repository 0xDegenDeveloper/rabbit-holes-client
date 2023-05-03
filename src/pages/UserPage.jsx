import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";

import UserSearchBar from "../components/UserSearchBar";

import fetchUserData from "../components/hooks/fetchUserData";

export default function UserPage(props) {
  const { key, key2 } = useParams();

  const [isHoles, setIsHoles] = useState(true);

  const [user, setUser] = useState(key ? key : "0x1234...abcd");

  const navigate = useNavigate();

  const userData = fetchUserData(user);

  return (
    <>
      <div className="container">
        <Wrapper isHoles={isHoles}>
          <UserSearchBar user={user} />

          <div className="wrapper3">
            <h1
              onClick={() => {
                setIsHoles(true);
              }}
              className={`a sel ${isHoles ? "active" : ""}`}
            >
              Holes
            </h1>
            <VBar />
            <h1
              onClick={() => {
                setIsHoles(false);
              }}
              className={`b sel ${isHoles ? "" : "active"}`}
            >
              Rabbits
            </h1>
          </div>
          {isHoles && !key && (
            <div className="user-holes-section">
              <div className="outlined-box user-holes">
                {userData.holes.map((hole, index) => (
                  <React.Fragment key={"hole" + index}>
                    <div
                      className="hole-link"
                      // key={"hole" + index}
                      onClick={() => {
                        navigate(`/archive/${hole.id}`);
                      }}
                    >
                      <h4>
                        Hole #{hole.id} <em>"{hole.title}"</em>
                      </h4>
                      <h4>
                        Depth: <em>{hole.depth}</em>
                      </h4>
                    </div>
                    <Bar />
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
          {!isHoles && !key && (
            <div className="user-holes-section">
              <div className="outlined-box user-holes">
                {userData.rabbits.map((rabbit, index) => (
                  <React.Fragment key={"rabbit" + index}>
                    <div
                      className="hole-link"
                      // key={"rabbit" + index}
                      onClick={() => {
                        navigate(`/archive/${rabbit.hole_id}/${rabbit.id}`);
                      }}
                    >
                      <h4>
                        Rabbit <em>#{rabbit.global_id}</em>
                      </h4>
                      <h4>
                        Hole :<em>"{rabbit.title}"</em>
                      </h4>
                      <h4>
                        Message: <em>{rabbit.msg}</em>
                      </h4>
                    </div>
                    <Bar />
                  </React.Fragment>
                ))}
              </div>
              {/* <div className="switcher one outlined-box-free-flex"></div> */}
            </div>
          )}

          {key && (
            <div className="user-holes-section">
              <div className="outlined-box user-holes">
                <div className="hole-link"></div>
                <Bar />
              </div>
            </div>
          )}

          <div className="wrapper2">
            <div className="outlined-box-free-flex-3 stat">
              <h4>
                Digs: <em>{key ? 0 : userData.holes.length}</em>
              </h4>
            </div>

            <div className="outlined-box-free-flex-3 stat">
              <h4>
                Burns: <em>{key ? 0 : userData.rabbits.length}</em>
              </h4>
            </div>
            <div className="outlined-box-free-flex-3 stat tt">
              <h4>
                Balance:{" "}
                <em>
                  {key
                    ? 0
                    : parseInt(userData.holes.length) * 25 -
                      parseInt(userData.rabbits.length)}{" "}
                  RBIT
                </em>
              </h4>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

const Bar = styled.div`
  width: 100%;
  margin: 1rem auto;
  border-bottom: 1px solid var(--forrestGreen);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
  color: var(--forrestGreen);
  place-items: center;
  user-select: none;

  .wrapper2 {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
    padding-top: 1rem;

    &:hover {
      cursor: default;
    }
  }

  .sel {
    color: var(--forrestGreen);
  }

  .active {
    color: var(--lightGreen);
  }

  .activeR {
    color: var(--limeGreen);
  }

  .activeH {
    color: var(--lightGreen);
  }

  .wrapper3 {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 0.5rem;
    font-size: clamp(9px, 3vw, 14px);

    .a {
      margin-left: auto;
    }
    .b {
      margin-right: auto;
    }

    h1:hover {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 760px) {
    .wrapper2 {
      grid-template-columns: auto auto;
    }

    .tt {
      margin: 0 auto;
      grid-column: 1/-1;
    }
  }

  h4 {
    margin: 0;
    /* padding: 0; */
    padding-bottom: 0.5rem;
  }

  .stat {
    padding: 0.75rem;
    font-size: clamp(9px, 3vw, 14px);
    border: none;
    box-shadow: 0px 0px 5px 0px var(--forrestGreen);
    color: var(--lightGreen);

    h4 {
      padding: 0;
    }
  }

  h2 {
    color: var(--limeGreen);
  }

  .user-holes-section {
  }

  .hole-link {
    padding: 1rem;
    &:hover {
      cursor: pointer;
      color: var(--lightGreen);
      background-color: var(--forrestGreen);

      border-radius: 1rem;
      em {
        color: var(--limeGreen);
      }
    }
  }

  .user-holes {
    max-height: 200px;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: auto;
    gap: 0rem;

    color: var(--forrestGreen);
    em {
      color: var(--lightGreen);
    }
  }

  .user-holes:hover {
  }

  .user-holes::-webkit-scrollbar-thumb {
    /* border-radius: 10px; */
    /* height: 0; */
    /* border-radius: inherit; */

    background-color: var(--limeGreen);
    color: var(--limeGreen);
  }
`;

const VBar = styled.div`
  width: 0;
  height: 50%;
  margin: auto auto;
  border-left: 2px solid var(--forrestGreen);
`;
