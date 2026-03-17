import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-21226.0 -3107.0)\"><path d=\"M21663 3544.02C21686.8 3520.25 21705.6 3492.03 21718.5 3460.97C21731.4 3429.91 21738 3396.62 21738 3363H21482L21663 3544.02Z\" stroke=\"#535353\" id=\"n740\"/>\n</g>\n</svg>\n";

export type BuildingBlocksGaugeRadialConfigGauge270AdviceCautionProps = OpenBridgeAssetProps;

export const BuildingBlocksGaugeRadialConfigGauge270AdviceCaution = React.forwardRef(function BuildingBlocksGaugeRadialConfigGauge270AdviceCaution(props: BuildingBlocksGaugeRadialConfigGauge270AdviceCautionProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksGaugeRadialConfigGauge270AdviceCaution;
