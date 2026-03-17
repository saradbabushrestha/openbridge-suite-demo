import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-9836.0 -2495.0)\"><path d=\"M9870.3 2879C9892.77 2917.92 9925.08 2950.23 9964 2972.7C10002.9 2995.17 10047.1 3007 10092 3007C10136.9 3007 10181.1 2995.17 10220 2972.7C10258.9 2950.23 10291.2 2917.92 10313.7 2879L10092 2751L9870.3 2879Z\" stroke=\"#535353\" id=\"n554\"/>\n</g>\n</svg>\n";

export type BuildingBlocksAzimuthConfigAzimuthAdviceDangerProps = OpenBridgeAssetProps;

export const BuildingBlocksAzimuthConfigAzimuthAdviceDanger = React.forwardRef(function BuildingBlocksAzimuthConfigAzimuthAdviceDanger(props: BuildingBlocksAzimuthConfigAzimuthAdviceDangerProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksAzimuthConfigAzimuthAdviceDanger;
