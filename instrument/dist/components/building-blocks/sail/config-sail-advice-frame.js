import * as React from "react";
import { renderOpenBridgeSvg } from "../../../runtime/renderOpenBridgeSvg";
const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-15898.0 -3767.0)\"><path d=\"M16282 4244.7C16243.1 4267.17 16198.9 4279 16154 4279C16109.1 4279 16064.9 4267.17 16026 4244.7L16154 4023L16282 4244.7Z\" stroke=\"#535353\" id=\"n913\"/>\n</g>\n</svg>\n";
export const BuildingBlocksSailConfigSailAdviceFrame = React.forwardRef(function BuildingBlocksSailConfigSailAdviceFrame(props, ref) {
    return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});
export default BuildingBlocksSailConfigSailAdviceFrame;
