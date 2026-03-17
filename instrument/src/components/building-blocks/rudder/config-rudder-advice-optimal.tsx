import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-14470.0 -2447.0)\"><path d=\"M14770.5 2955.11C14786.3 2952.32 14801.9 2948.03 14816.9 2942.32L14726 2703L14770.5 2955.11Z\" stroke=\"#535353\" id=\"n655\"/>\n</g>\n</svg>\n";

export type BuildingBlocksRudderConfigRudderAdviceOptimalProps = OpenBridgeAssetProps;

export const BuildingBlocksRudderConfigRudderAdviceOptimal = React.forwardRef(function BuildingBlocksRudderConfigRudderAdviceOptimal(props: BuildingBlocksRudderConfigRudderAdviceOptimalProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksRudderConfigRudderAdviceOptimal;
