import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs><clipPath id=\"clip__asset\"><rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/></clipPath><mask id=\"mask25_68_6728\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"2593\" y=\"225\" width=\"14\" height=\"38\">\n<rect x=\"2594\" y=\"226\" width=\"12\" height=\"36\" rx=\"2\" fill=\"white\" stroke=\"white\" id=\"n346\"/>\n</mask>\n<clipPath id=\"clip12_68_6728\">\n<rect width=\"48\" height=\"48\" fill=\"white\" transform=\"translate(2576 220)\" id=\"n456\"/>\n</clipPath>\n</defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-2576.0 -220.0)\"><g clip-path=\"url(#clip12_68_6728)\" id=\"n344\">\n<rect x=\"2594\" y=\"226\" width=\"12\" height=\"36\" rx=\"2\" fill=\"white\" stroke=\"#BEBEBE\" id=\"n345\"/>\n<mask id=\"mask25_68_6728\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"2593\" y=\"225\" width=\"14\" height=\"38\">\n<rect x=\"2594\" y=\"226\" width=\"12\" height=\"36\" rx=\"2\" fill=\"white\" stroke=\"white\" id=\"n346\"/>\n</mask>\n<g mask=\"url(#mask25_68_6728)\" id=\"n347\">\n<rect x=\"2594\" y=\"246\" width=\"12\" height=\"16\" fill=\"#2D548B\" stroke=\"#2D548B\" id=\"n348\"/>\n</g>\n</g>\n</g>\n</svg>\n";

export type IndicatorsGaugesGaugeBarDirectionVerticalTypeFillProps = OpenBridgeAssetProps;

export const IndicatorsGaugesGaugeBarDirectionVerticalTypeFill = React.forwardRef(function IndicatorsGaugesGaugeBarDirectionVerticalTypeFill(props: IndicatorsGaugesGaugeBarDirectionVerticalTypeFillProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default IndicatorsGaugesGaugeBarDirectionVerticalTypeFill;
