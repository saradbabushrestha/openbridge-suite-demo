import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-5777.0 -1519.0)\"><path d=\"M6197.55 1578.89C6163.13 1550.01 6121.71 1530.69 6077.45 1522.89L6033 1775L6197.55 1578.89Z\" stroke=\"#535353\" id=\"n272\"/>\n</g>\n</svg>\n";

export type BuildingBlocksRateOfTurnConfigRotArcAdviceOptimalProps = OpenBridgeAssetProps;

export const BuildingBlocksRateOfTurnConfigRotArcAdviceOptimal = React.forwardRef(function BuildingBlocksRateOfTurnConfigRotArcAdviceOptimal(props: BuildingBlocksRateOfTurnConfigRotArcAdviceOptimalProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksRateOfTurnConfigRotArcAdviceOptimal;
