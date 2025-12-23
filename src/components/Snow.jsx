import Snowfall from "react-snowfall";

export default function Snow() {
  return (
    <Snowfall
      snowflakeCount={220}
      speed={[0.6, 3]}
      wind={[-0.5, 1]}
      radius={[1, 4]}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 50,
      }}
    />
  );
}
