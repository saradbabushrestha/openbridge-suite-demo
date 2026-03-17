import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-3085.0 -416.0)\"><path d=\"M3108.59 417.57L3104.56 423.209C3104.33 423.54 3104.56 424 3104.97 424H3113.03C3113.44 424 3113.67 423.54 3113.44 423.209L3109.41 417.57C3109.21 417.29 3108.79 417.29 3108.59 417.57Z\" fill=\"#BEBEBE\" id=\"n218\"/>\n<circle cx=\"3109\" cy=\"440\" r=\"18\" fill=\"white\" stroke=\"#BEBEBE\" id=\"n219\"/>\n<circle cx=\"3109\" cy=\"440\" r=\"2\" fill=\"#535353\" id=\"n220\"/>\n<path d=\"M3109 440V433M3116 426H3109V429.5M3109 429.5H3116M3109 429.5V433M3109 433H3113\" stroke=\"#535353\" stroke-width=\"2\" id=\"n221\"/>\n</g>\n</svg>\n";

export type IndicatorsEnvironmentEnvironmentWindInstance02Props = OpenBridgeAssetProps;

export const IndicatorsEnvironmentEnvironmentWindInstance02 = React.forwardRef(function IndicatorsEnvironmentEnvironmentWindInstance02(props: IndicatorsEnvironmentEnvironmentWindInstance02Props, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default IndicatorsEnvironmentEnvironmentWindInstance02;
