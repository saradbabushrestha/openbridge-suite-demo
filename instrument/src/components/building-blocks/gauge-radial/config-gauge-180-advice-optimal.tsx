import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-22184.0 -2447.0)\"><path d=\"M22649.7 2556.16C22636.9 2537.84 22621.7 2521.27 22604.6 2506.89L22440 2703L22649.7 2556.16Z\" stroke=\"#535353\" id=\"n737\"/>\n</g>\n</svg>\n";

export type BuildingBlocksGaugeRadialConfigGauge180AdviceOptimalProps = OpenBridgeAssetProps;

export const BuildingBlocksGaugeRadialConfigGauge180AdviceOptimal = React.forwardRef(function BuildingBlocksGaugeRadialConfigGauge180AdviceOptimal(props: BuildingBlocksGaugeRadialConfigGauge180AdviceOptimalProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksGaugeRadialConfigGauge180AdviceOptimal;
