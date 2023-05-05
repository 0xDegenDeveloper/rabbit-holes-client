export default function StatsPage() {
  return (
    <>
      <div className="container">
        <div className="dark-box-600w">
          <h2 style={{ color: "var(--limeGreen)" }}>Metrics</h2>
          <h4>
            Supply: <em>12,345 RBITS</em>
          </h4>
          <h4>
            Dig Fee: <em>0.001Ξ</em>
          </h4>
          <h4>
            Dig Reward: <em>25 RBITS</em>
          </h4>
          <h2 style={{ color: "var(--limeGreen)" }}>Depth</h2>
          <h4>
            Total Digs: <em>111</em>
          </h4>
          <h4>
            Total Burns: <em>2356</em>
          </h4>
        </div>
      </div>
    </>
  );
}
