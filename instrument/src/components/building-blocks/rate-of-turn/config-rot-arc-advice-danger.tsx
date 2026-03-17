import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-5777.0 -2119.0)\"><path d=\"M5851.98 2193.98C5816.18 2229.78 5791.8 2275.4 5781.92 2325.06C5772.04 2374.72 5777.11 2426.19 5796.49 2472.97C5815.86 2519.74 5848.68 2559.73 5890.77 2587.86C5932.87 2615.99 5982.37 2631 6033 2631C6083.63 2631 6133.13 2615.99 6175.23 2587.86C6217.32 2559.73 6250.14 2519.74 6269.51 2472.97C6288.89 2426.19 6293.96 2374.72 6284.08 2325.06C6274.2 2275.4 6249.82 2229.78 6214.02 2193.98L6033 2375L5851.98 2193.98Z\" stroke=\"#535353\" id=\"n274\"/>\n</g>\n</svg>\n";

export type BuildingBlocksRateOfTurnConfigRotArcAdviceDangerProps = OpenBridgeAssetProps;

export const BuildingBlocksRateOfTurnConfigRotArcAdviceDanger = React.forwardRef(function BuildingBlocksRateOfTurnConfigRotArcAdviceDanger(props: BuildingBlocksRateOfTurnConfigRotArcAdviceDangerProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksRateOfTurnConfigRotArcAdviceDanger;
