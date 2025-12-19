"use client";

import Snowfall from "react-snowfall";

export default function SnowfallEffect() {
  return (
    <Snowfall
      snowflakeCount={150}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
      }}
    />
  );
}
