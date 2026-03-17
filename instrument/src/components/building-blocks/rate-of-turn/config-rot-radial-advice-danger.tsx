import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-5084.0 -2119.0)\"><path d=\"M5118.3 2503C5140.77 2541.92 5173.08 2574.23 5212 2596.7C5250.92 2619.17 5295.06 2631 5340 2631C5384.94 2631 5429.08 2619.17 5468 2596.7C5506.92 2574.23 5539.23 2541.92 5561.7 2503L5340 2375L5118.3 2503Z\" stroke=\"#535353\" id=\"n273\"/>\n</g>\n</svg>\n";

export type BuildingBlocksRateOfTurnConfigRotRadialAdviceDangerProps = OpenBridgeAssetProps;

export const BuildingBlocksRateOfTurnConfigRotRadialAdviceDanger = React.forwardRef(function BuildingBlocksRateOfTurnConfigRotRadialAdviceDanger(props: BuildingBlocksRateOfTurnConfigRotRadialAdviceDangerProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksRateOfTurnConfigRotRadialAdviceDanger;
