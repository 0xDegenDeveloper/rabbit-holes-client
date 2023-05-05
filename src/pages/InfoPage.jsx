import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function InfoPage() {
  return (
    <>
      <div className="container">
        <Wrapper>
          <div className="outlined-boxxx box">
            <h1>RabbitHoles</h1>
            <h4>
              RabbitHoles (RBITS) is an ERC-20 contract abstracted to create a
              permanent and censorship-resistant discussion board. Users have
              the option to dig holes and burn rabbits.
            </h4>
            <h4>Digging a hole creates a discussion topic.</h4>
            <h4>Burning a rabbit adds a message to the discussion.</h4>
            <h1>Mechanics</h1>
            <h4>
              <em>Holes:</em>
            </h4>
            <h4>-Digs will cost ~0.001Ξ (dig fee)</h4>
            <h4>-Each dig will mint the digger ~25.0 RBITS (dig reward)</h4>
            <h4>
              <em>Rabbits:</em>
            </h4>
            <h4>
              -Every rabbit a user burns will burn 1.0 of their RBITS (burn fee)
            </h4>
            <h4>
              <em>Further:</em>
            </h4>
            <h4>
              -Additional details and the contract progress can be tracked{" "}
              <a
                target="_blank"
                href="https://github.com/0xDegenDeveloper/RabbitHoles"
              >
                here <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </h4>
          </div>
          <div className="token-logo">
            <img src="/logo.png" />
          </div>
          {/* <div className="outlined-boxxx box"></div> */}
        </Wrapper>
      </div>
    </>
  );
}

const Wrapper = styled.div`
  width: clamp(60vw, 40vw, 400px);
  display: grid;
  gap: 1rem;
  height: 70%;
  user-select: none;

  .token-logo {
    margin-top: 1rem;
    display: grid;
    place-items: center;

    img {
      width: clamp(50px, 30vw, 100px);

      :hover {
        cursor: pointer;
        animation: rotate360 3s infinite ease-in-out;
      }
    }

    @keyframes rotate360 {
      0% {
        transform: rotate(0deg);
      }
      50%,
      52% {
        transform: rotate(720deg);
      }

      75%,
      100% {
        transform: rotate(0deg);
      }
    }
  }

  h1 {
    font-size: clamp(14px, 2vw, 24px);
    padding: 0.1rem;
  }

  h4 {
    margin: 1rem 0;
  }
  a {
    color: var(--lightGreen);
    text-decoration: none;
  }

  h4,
  h2 {
    color: var(--limeGreen);
  }

  em {
    color: var(--lightGreen);
  }

  .box {
    overflow: scroll;
    border: none;
  }
`;
