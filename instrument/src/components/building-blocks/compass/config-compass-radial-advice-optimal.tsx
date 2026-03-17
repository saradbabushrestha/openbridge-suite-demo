import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-232.0 -1519.0)\"><path d=\"M652.554 1578.89C618.13 1550.01 576.709 1530.69 532.454 1522.89L488 1775L652.554 1578.89Z\" stroke=\"#535353\" id=\"n5\"/>\n</g>\n</svg>\n";

export type BuildingBlocksCompassConfigCompassRadialAdviceOptimalProps = OpenBridgeAssetProps;

export const BuildingBlocksCompassConfigCompassRadialAdviceOptimal = React.forwardRef(function BuildingBlocksCompassConfigCompassRadialAdviceOptimal(props: BuildingBlocksCompassConfigCompassRadialAdviceOptimalProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksCompassConfigCompassRadialAdviceOptimal;
