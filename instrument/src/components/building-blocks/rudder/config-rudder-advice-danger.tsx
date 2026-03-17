import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-15075.0 -3107.0)\"><path d=\"M15109.3 3491C15131.8 3529.92 15164.1 3562.23 15203 3584.7C15241.9 3607.17 15286.1 3619 15331 3619C15375.9 3619 15420.1 3607.17 15459 3584.7C15497.9 3562.23 15530.2 3529.92 15552.7 3491L15331 3363L15109.3 3491Z\" stroke=\"#535353\" id=\"n658\"/>\n</g>\n</svg>\n";

export type BuildingBlocksRudderConfigRudderAdviceDangerProps = OpenBridgeAssetProps;

export const BuildingBlocksRudderConfigRudderAdviceDanger = React.forwardRef(function BuildingBlocksRudderConfigRudderAdviceDanger(props: BuildingBlocksRudderConfigRudderAdviceDangerProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksRudderConfigRudderAdviceDanger;
