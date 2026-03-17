import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-1793.0 -384.0)\"><path d=\"M1799 404C1799 402.895 1799.9 402 1801 402H1833C1834.1 402 1835 402.895 1835 404V412C1835 413.105 1834.1 414 1833 414H1801C1799.9 414 1799 413.105 1799 412V404Z\" stroke=\"#BEBEBE\" id=\"n283\"/>\n<rect x=\"1816.5\" y=\"402\" width=\"1\" height=\"12\" rx=\"0.5\" fill=\"#BEBEBE\" stroke=\"#BEBEBE\" id=\"n284\"/>\n</g>\n</svg>\n";

export type IndicatorsPropulsionPropulsionTunnelThrusterStateOffProps = OpenBridgeAssetProps;

export const IndicatorsPropulsionPropulsionTunnelThrusterStateOff = React.forwardRef(function IndicatorsPropulsionPropulsionTunnelThrusterStateOff(props: IndicatorsPropulsionPropulsionTunnelThrusterStateOffProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default IndicatorsPropulsionPropulsionTunnelThrusterStateOff;
