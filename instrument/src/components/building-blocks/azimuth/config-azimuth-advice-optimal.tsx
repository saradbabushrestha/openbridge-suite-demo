import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-9231.0 -2447.0)\"><path d=\"M9359 2481.3C9339.63 2492.48 9321.8 2506.16 9305.98 2521.98L9487 2703L9359 2481.3Z\" stroke=\"#535353\" id=\"n551\"/>\n</g>\n</svg>\n";

export type BuildingBlocksAzimuthConfigAzimuthAdviceOptimalProps = OpenBridgeAssetProps;

export const BuildingBlocksAzimuthConfigAzimuthAdviceOptimal = React.forwardRef(function BuildingBlocksAzimuthConfigAzimuthAdviceOptimal(props: BuildingBlocksAzimuthConfigAzimuthAdviceOptimalProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksAzimuthConfigAzimuthAdviceOptimal;
