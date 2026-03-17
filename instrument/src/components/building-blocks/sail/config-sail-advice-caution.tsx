import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-15898.0 -3107.0)\"><path d=\"M15932.3 3491C15954.8 3529.92 15987.1 3562.23 16026 3584.7C16064.9 3607.17 16109.1 3619 16154 3619C16198.9 3619 16243.1 3607.17 16282 3584.7C16320.9 3562.23 16353.2 3529.92 16375.7 3491L16154 3363L15932.3 3491Z\" stroke=\"#535353\" id=\"n914\"/>\n</g>\n</svg>\n";

export type BuildingBlocksSailConfigSailAdviceCautionProps = OpenBridgeAssetProps;

export const BuildingBlocksSailConfigSailAdviceCaution = React.forwardRef(function BuildingBlocksSailConfigSailAdviceCaution(props: BuildingBlocksSailConfigSailAdviceCautionProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksSailConfigSailAdviceCaution;
