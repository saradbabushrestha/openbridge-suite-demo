import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-232.0 -2119.0)\"><path d=\"M266.298 2503C288.766 2541.92 321.083 2574.23 360 2596.7C398.917 2619.17 443.063 2631 488 2631C532.937 2631 577.083 2619.17 616 2596.7C654.917 2574.23 687.234 2541.92 709.703 2503L488 2375L266.298 2503Z\" stroke=\"#535353\" id=\"n7\"/>\n</g>\n</svg>\n";

export type BuildingBlocksCompassConfigCompassRadialAdviceDangerProps = OpenBridgeAssetProps;

export const BuildingBlocksCompassConfigCompassRadialAdviceDanger = React.forwardRef(function BuildingBlocksCompassConfigCompassRadialAdviceDanger(props: BuildingBlocksCompassConfigCompassRadialAdviceDangerProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksCompassConfigCompassRadialAdviceDanger;
