import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs><clipPath id=\"clip__asset\"><rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/></clipPath><mask id=\"mask28_68_6728\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"2593\" y=\"305\" width=\"14\" height=\"38\">\n<rect x=\"2594\" y=\"306\" width=\"12\" height=\"36\" rx=\"2\" fill=\"white\" stroke=\"white\" id=\"n362\"/>\n</mask>\n<clipPath id=\"clip15_68_6728\">\n<rect width=\"48\" height=\"48\" fill=\"white\" transform=\"translate(2576 300)\" id=\"n459\"/>\n</clipPath>\n</defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-2576.0 -300.0)\"><g clip-path=\"url(#clip15_68_6728)\" id=\"n360\">\n<rect x=\"2594\" y=\"306\" width=\"12\" height=\"36\" rx=\"2\" fill=\"white\" stroke=\"#BEBEBE\" id=\"n361\"/>\n<mask id=\"mask28_68_6728\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"2593\" y=\"305\" width=\"14\" height=\"38\">\n<rect x=\"2594\" y=\"306\" width=\"12\" height=\"36\" rx=\"2\" fill=\"white\" stroke=\"white\" id=\"n362\"/>\n</mask>\n<g mask=\"url(#mask28_68_6728)\" id=\"n363\">\n<rect x=\"2594\" y=\"326\" width=\"12\" height=\"16\" fill=\"#9CC1F5\" stroke=\"#9CC1F5\" id=\"n364\"/>\n<path d=\"M2606 326H2594\" stroke=\"#2D548B\" stroke-width=\"2\" stroke-linecap=\"square\" id=\"n365\"/>\n</g>\n</g>\n</g>\n</svg>\n";

export type IndicatorsGaugesGaugeBarDirectionVerticalTypeTindedProps = OpenBridgeAssetProps;

export const IndicatorsGaugesGaugeBarDirectionVerticalTypeTinded = React.forwardRef(function IndicatorsGaugesGaugeBarDirectionVerticalTypeTinded(props: IndicatorsGaugesGaugeBarDirectionVerticalTypeTindedProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default IndicatorsGaugesGaugeBarDirectionVerticalTypeTinded;
