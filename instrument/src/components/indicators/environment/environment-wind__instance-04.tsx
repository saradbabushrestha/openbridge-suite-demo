import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-3148.0 -416.0)\"><path d=\"M3171.59 417.57L3167.56 423.209C3167.33 423.54 3167.56 424 3167.97 424H3176.03C3176.44 424 3176.67 423.54 3176.44 423.209L3172.41 417.57C3172.21 417.29 3171.79 417.29 3171.59 417.57Z\" fill=\"#BEBEBE\" id=\"n232\"/>\n<circle cx=\"3172\" cy=\"440\" r=\"18\" fill=\"white\" stroke=\"#BEBEBE\" id=\"n233\"/>\n<circle cx=\"3172\" cy=\"440\" r=\"2\" fill=\"#535353\" id=\"n234\"/>\n<path d=\"M3172 440V435M3179 426L3172 428V431.5M3172 431.5L3179 429.5M3172 431.5V435M3172 435L3176.5 433.5\" stroke=\"#535353\" stroke-width=\"2\" id=\"n235\"/>\n</g>\n</svg>\n";

export type IndicatorsEnvironmentEnvironmentWindInstance04Props = OpenBridgeAssetProps;

export const IndicatorsEnvironmentEnvironmentWindInstance04 = React.forwardRef(function IndicatorsEnvironmentEnvironmentWindInstance04(props: IndicatorsEnvironmentEnvironmentWindInstance04Props, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default IndicatorsEnvironmentEnvironmentWindInstance04;
