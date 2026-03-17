import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-17372.0 -3156.0)\"><path d=\"M17500 3633.7C17451.2 3605.53 17413.1 3562.03 17391.5 3509.97C17369.9 3457.9 17366.1 3400.18 17380.7 3345.74C17395.3 3291.31 17427.4 3243.21 17472.2 3208.9C17516.9 3174.6 17571.6 3156 17628 3156C17684.4 3156 17739.1 3174.6 17783.8 3208.9C17828.6 3243.21 17860.7 3291.31 17875.3 3345.74C17889.9 3400.18 17886.1 3457.9 17864.5 3509.97C17842.9 3562.03 17804.8 3605.53 17756 3633.7L17628 3412L17500 3633.7Z\" stroke=\"#535353\" id=\"n1093\"/>\n</g>\n</svg>\n";

export type BuildingBlocksMotionConfigRollAdviceDangerProps = OpenBridgeAssetProps;

export const BuildingBlocksMotionConfigRollAdviceDanger = React.forwardRef(function BuildingBlocksMotionConfigRollAdviceDanger(props: BuildingBlocksMotionConfigRollAdviceDangerProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksMotionConfigRollAdviceDanger;
