import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"36.0\" height=\"36.0\" viewBox=\"0 0 36.0 36.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"36.0\" height=\"36.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-2381.0 -300.0)\"><path d=\"M2387 324C2387 321.636 2387.47 319.296 2388.37 317.112C2389.27 314.928 2390.6 312.944 2392.27 311.272L2405 324L2387 324Z\" fill=\"#9CC1F5\" stroke=\"#9CC1F5\" id=\"n408\"/>\n<path d=\"M2387 324H2405\" stroke=\"#BEBEBE\" stroke-linecap=\"square\" id=\"n409\"/>\n<path d=\"M2392.27 336.728C2389.75 334.211 2388.04 331.003 2387.35 327.512C2386.65 324.02 2387.01 320.401 2388.37 317.112C2389.73 313.823 2392.04 311.011 2395 309.034C2397.96 307.056 2401.44 306 2405 306C2408.56 306 2412.04 307.056 2415 309.034C2417.96 311.011 2420.27 313.823 2421.63 317.112C2422.99 320.401 2423.35 324.02 2422.65 327.512C2421.96 331.003 2420.25 334.211 2417.73 336.728\" stroke=\"#BEBEBE\" stroke-linecap=\"round\" id=\"n410\"/>\n<rect x=\"2390.86\" y=\"311.979\" width=\"3\" height=\"21\" rx=\"1.5\" transform=\"rotate(-45 2390.86 311.979)\" fill=\"#2D548B\" stroke=\"#F7F7F7\" id=\"n411\"/>\n<circle cx=\"2405\" cy=\"324.003\" r=\"3\" transform=\"rotate(-45 2405 324.003)\" fill=\"#2D548B\" id=\"n412\"/>\n</g>\n</svg>\n";

export type IndicatorsGaugesGaugeRadialSector270StyleFlatNArrowFrameTrackProps = OpenBridgeAssetProps;

export const IndicatorsGaugesGaugeRadialSector270StyleFlatNArrowFrameTrack = React.forwardRef(function IndicatorsGaugesGaugeRadialSector270StyleFlatNArrowFrameTrack(props: IndicatorsGaugesGaugeRadialSector270StyleFlatNArrowFrameTrackProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 36.0, intrinsicHeight: 36.0 });
});

export default IndicatorsGaugesGaugeRadialSector270StyleFlatNArrowFrameTrack;
