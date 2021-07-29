import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

export default function LineChart({ prices }) {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    data: [
      {
        type: "line",
        dataPoints: prices.map((point) => ({ x: point[0], y: point[1] }))
      }
    ]
  };
  return (
    <>
      <CanvasJSChart options={options} style={{height:'30px'}}/>
    </>
  );
}
