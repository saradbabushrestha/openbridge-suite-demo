import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"792.0\" height=\"116.0\" viewBox=\"0 0 792.0 116.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"792.0\" height=\"116.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-14652.0 -835.0)\"><path d=\"M15292 827L15292 1033\" stroke=\"#2D548B\" stroke-linecap=\"round\" id=\"n2317\"/>\n</g>\n</svg>\n";

export type NavigationDepthDocumentationTextProps = OpenBridgeAssetProps;

export const NavigationDepthDocumentationText = React.forwardRef(function NavigationDepthDocumentationText(props: NavigationDepthDocumentationTextProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 792.0, intrinsicHeight: 116.0 });
});

export default NavigationDepthDocumentationText;
