import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-954.0 -1519.0)\"><path d=\"M1338 1553.3C1318.63 1542.11 1297.87 1533.51 1276.26 1527.72L1210 1775L1338 1553.3Z\" stroke=\"#535353\" id=\"n6\"/>\n</g>\n</svg>\n";

export type BuildingBlocksCompassConfigCompassArcAdviceOptimalProps = OpenBridgeAssetProps;

export const BuildingBlocksCompassConfigCompassArcAdviceOptimal = React.forwardRef(function BuildingBlocksCompassConfigCompassArcAdviceOptimal(props: BuildingBlocksCompassConfigCompassArcAdviceOptimalProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksCompassConfigCompassArcAdviceOptimal;
