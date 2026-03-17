import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24.0\" height=\"24.0\" viewBox=\"0 0 24.0 24.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"24.0\" height=\"24.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-2456.0 -300.0)\"><path d=\"M2462 324C2462 321.636 2462.47 319.296 2463.37 317.112C2464.27 314.928 2465.6 312.944 2467.27 311.272L2480 324L2462 324Z\" fill=\"#9CC1F5\" stroke=\"#9CC1F5\" id=\"n415\"/>\n<path d=\"M2462 324H2480\" stroke=\"#BEBEBE\" stroke-linecap=\"square\" id=\"n416\"/>\n<path d=\"M2462 324C2462 319.226 2463.9 314.648 2467.27 311.272C2470.65 307.896 2475.23 306 2480 306C2484.77 306 2489.35 307.896 2492.73 311.272C2496.1 314.648 2498 319.226 2498 324\" stroke=\"#BEBEBE\" stroke-linecap=\"round\" id=\"n417\"/>\n<rect x=\"2465.86\" y=\"311.979\" width=\"3\" height=\"21\" rx=\"1.5\" transform=\"rotate(-45 2465.86 311.979)\" fill=\"#2D548B\" stroke=\"#F7F7F7\" id=\"n418\"/>\n</g>\n</svg>\n";

export type IndicatorsGaugesGaugeRadialSector180StyleFlatWind7Props = OpenBridgeAssetProps;

export const IndicatorsGaugesGaugeRadialSector180StyleFlatWind7 = React.forwardRef(function IndicatorsGaugesGaugeRadialSector180StyleFlatWind7(props: IndicatorsGaugesGaugeRadialSector180StyleFlatWind7Props, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 24.0, intrinsicHeight: 24.0 });
});

export default IndicatorsGaugesGaugeRadialSector180StyleFlatWind7;
