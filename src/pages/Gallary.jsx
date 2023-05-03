import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Rabbits from "../components/Rabbits";
import Holes from "../components/Holes";

import fetchHoleData from "../components/hooks/fetchHoleData";

export default function Gallary(props) {
  let { key, key2 } = useParams();
  if (!key || parseInt(key) == 0) key = 1;
  if (!key2 || parseInt(key2) == 0) key2 = 1;
  const [holeId, setHoleId] = useState(key);
  const [holeDepth, setHoleDepth] = useState(key2);

  const exData = useMemo(() => {
    const res = fetchHoleData(holeId);
    return res;
  }, [holeId]);

  return (
    <>
      <div className="container">
        <Wrapper>
          <Holes
            setHoleId={setHoleId}
            holeData={exData}
            setHoleDepth={setHoleDepth}
          />
          <Rabbits
            holeId={holeId}
            holeDepth={holeDepth}
            setHoleDepth={setHoleDepth}
            rabbitIds={exData.rabbitIds}
            holeDetails={exData}
          />
        </Wrapper>
        {/* <Holes /> */}
      </div>
    </>
  );
}

const Wrapper = styled.div`
  /* margin-top: 10vh; */
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  gap: 1rem;
  text-align: center;
  margin: auto 0;
  user-select: none;

  .rabbits {
    display: grid;
    justify-content: center;
    grid-column: 1/-1;
  }
`;
