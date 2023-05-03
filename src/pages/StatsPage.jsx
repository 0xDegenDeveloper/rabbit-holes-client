import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 2rem;
  user-select: none;

  h2 {
    color: var(--limeGreen);
    margin: 0.5rem 0 1rem;
    font-size: clamp(12px, 5vw, 24px);
  }

  h4 {
    font-size: clamp(8px, 4vw, 14px);
    margin: 0.5rem 0;
  }
`;

export default function StatsPage(props) {
  return (
    <>
      <div className="container">
        <Wrapper>
          <div className="outlined-boxx content">
            <h2>Metrics</h2>
            <h4>
              Supply: <em>12,345 RBITS</em>
            </h4>
            <h4>
              Dig Fee: <em>0.001Ξ</em>
            </h4>
            <h4>
              Dig Reward: <em>25 RBITS</em>
            </h4>
          </div>
          <div className="outlined-boxx content">
            <h2>Depth</h2>

            <h4>
              Total Digs: <em>111</em>
            </h4>
            <h4>
              Total Burns: <em>2356</em>
            </h4>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
