import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-21226.0 -2447.0)\"><path d=\"M21703.7 2575C21681.2 2536.08 21648.9 2503.77 21610 2481.3L21482 2703L21703.7 2575Z\" stroke=\"#535353\" id=\"n736\"/>\n</g>\n</svg>\n";

export type BuildingBlocksGaugeRadialConfigGauge270AdviceOptimalProps = OpenBridgeAssetProps;

export const BuildingBlocksGaugeRadialConfigGauge270AdviceOptimal = React.forwardRef(function BuildingBlocksGaugeRadialConfigGauge270AdviceOptimal(props: BuildingBlocksGaugeRadialConfigGauge270AdviceOptimalProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksGaugeRadialConfigGauge270AdviceOptimal;
