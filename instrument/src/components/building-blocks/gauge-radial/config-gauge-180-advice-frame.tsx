import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-22184.0 -3767.0)\"><path d=\"M22184 4023C22184 4090.9 22211 4156.01 22259 4204.02C22307 4252.03 22372.1 4279 22440 4279C22507.9 4279 22573 4252.03 22621 4204.02C22669 4156.01 22696 4090.9 22696 4023L22440 4023L22184 4023Z\" stroke=\"#535353\" id=\"n739\"/>\n</g>\n</svg>\n";

export type BuildingBlocksGaugeRadialConfigGauge180AdviceFrameProps = OpenBridgeAssetProps;

export const BuildingBlocksGaugeRadialConfigGauge180AdviceFrame = React.forwardRef(function BuildingBlocksGaugeRadialConfigGauge180AdviceFrame(props: BuildingBlocksGaugeRadialConfigGauge180AdviceFrameProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksGaugeRadialConfigGauge180AdviceFrame;
