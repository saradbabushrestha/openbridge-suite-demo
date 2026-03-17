import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"684.0\" height=\"1137.0\" viewBox=\"0 0 684.0 1137.0\" fill=\"none\">\n  <defs><clipPath id=\"clip__asset\"><rect x=\"0\" y=\"0\" width=\"684.0\" height=\"1137.0\"/></clipPath><clipPath id=\"clip9_68_6728\">\n<rect x=\"1708\" y=\"200\" width=\"684\" height=\"1137\" rx=\"5\" fill=\"white\" id=\"n2030\"/>\n</clipPath>\n</defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-1708.0 -200.0)\"><g clip-path=\"url(#clip9_68_6728)\" id=\"n119\">\n<rect x=\"1708\" y=\"200\" width=\"684\" height=\"1137\" rx=\"5\" fill=\"#F0F0F0\" id=\"n120\"/>\n<path d=\"M2008 212V240\" stroke=\"#BEBEBE\" id=\"n121\"/>\n<rect x=\"2012.5\" y=\"228.5\" width=\"46.9998\" height=\"7\" rx=\"3.5\" fill=\"#CADEFC\" stroke=\"#2D548B\" id=\"n122\"/>\n<path d=\"M2064 212V240\" stroke=\"#BEBEBE\" id=\"n123\"/>\n<path d=\"M2008 732V704\" stroke=\"#BEBEBE\" id=\"n124\"/>\n<rect x=\"0.5\" y=\"-0.5\" width=\"46.9998\" height=\"7\" rx=\"3.5\" transform=\"matrix(1 0 0 -1 2012 715)\" fill=\"#CADEFC\" stroke=\"#2D548B\" id=\"n125\"/>\n<path d=\"M2064 732V704\" stroke=\"#BEBEBE\" id=\"n126\"/>\n<path d=\"M2008 240V704M2064 240V704\" stroke=\"#F7F7F7\" stroke-linecap=\"square\" id=\"n127\"/>\n<path d=\"M2008 240V704M2064 240V704\" stroke=\"#2D548B\" stroke-linecap=\"square\" stroke-dasharray=\"1 2\" id=\"n128\"/>\n</g>\n</g>\n</svg>\n";

export type BuildingBlocksCompassConfigCompassLinearAdviceProps = OpenBridgeAssetProps;

export const BuildingBlocksCompassConfigCompassLinearAdvice = React.forwardRef(function BuildingBlocksCompassConfigCompassLinearAdvice(props: BuildingBlocksCompassConfigCompassLinearAdviceProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 684.0, intrinsicHeight: 1137.0 });
});

export default BuildingBlocksCompassConfigCompassLinearAdvice;
