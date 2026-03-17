import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs><clipPath id=\"clip__asset\"><rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/></clipPath><mask id=\"mask20_68_6728\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"1685\" y=\"321\" width=\"10\" height=\"30\">\n<path d=\"M1686 324C1686 322.895 1686.9 322 1688 322H1692C1693.1 322 1694 322.895 1694 324V348C1694 349.105 1693.1 350 1692 350H1688C1686.9 350 1686 349.105 1686 348V324Z\" fill=\"#F0F0F0\" stroke=\"#F0F0F0\" id=\"n257\"/>\n</mask>\n</defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-1666.0 -312.0)\"><path d=\"M1689.59 313.57L1685.56 319.21C1685.33 319.54 1685.56 320 1685.97 320H1694.03C1694.44 320 1694.67 319.54 1694.44 319.21L1690.41 313.57C1690.21 313.291 1689.79 313.291 1689.59 313.57Z\" fill=\"#BEBEBE\" id=\"n254\"/>\n<circle cx=\"1690\" cy=\"336\" r=\"18\" fill=\"white\" stroke=\"#BEBEBE\" id=\"n255\"/>\n<path d=\"M1686 324C1686 322.895 1686.9 322 1688 322H1692C1693.1 322 1694 322.895 1694 324V348C1694 349.105 1693.1 350 1692 350H1688C1686.9 350 1686 349.105 1686 348V324Z\" fill=\"#F0F0F0\" stroke=\"#F0F0F0\" id=\"n256\"/>\n<g mask=\"url(#mask20_68_6728)\" id=\"n258\">\n<rect x=\"1686\" y=\"328\" width=\"8\" height=\"8\" fill=\"#535353\" stroke=\"#535353\" id=\"n259\"/>\n</g>\n</g>\n</svg>\n";

export type IndicatorsPropulsionPropulsionAzimuthStateNotInCommandProps = OpenBridgeAssetProps;

export const IndicatorsPropulsionPropulsionAzimuthStateNotInCommand = React.forwardRef(function IndicatorsPropulsionPropulsionAzimuthStateNotInCommand(props: IndicatorsPropulsionPropulsionAzimuthStateNotInCommandProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default IndicatorsPropulsionPropulsionAzimuthStateNotInCommand;
