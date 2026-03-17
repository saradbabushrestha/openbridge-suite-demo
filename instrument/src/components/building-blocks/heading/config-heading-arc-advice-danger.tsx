import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-3388.0 -2119.0)\"><path d=\"M3462.98 2193.98C3427.18 2229.78 3402.8 2275.4 3392.92 2325.06C3383.04 2374.72 3388.11 2426.19 3407.49 2472.97C3426.86 2519.74 3459.68 2559.73 3501.77 2587.86C3543.87 2615.99 3593.37 2631 3644 2631C3694.63 2631 3744.13 2615.99 3786.23 2587.86C3828.32 2559.73 3861.14 2519.74 3880.51 2472.97C3899.89 2426.19 3904.96 2374.72 3895.08 2325.06C3885.2 2275.4 3860.82 2229.78 3825.02 2193.98L3644 2375L3462.98 2193.98Z\" stroke=\"#535353\" id=\"n135\"/>\n</g>\n</svg>\n";

export type BuildingBlocksHeadingConfigHeadingArcAdviceDangerProps = OpenBridgeAssetProps;

export const BuildingBlocksHeadingConfigHeadingArcAdviceDanger = React.forwardRef(function BuildingBlocksHeadingConfigHeadingArcAdviceDanger(props: BuildingBlocksHeadingConfigHeadingArcAdviceDangerProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksHeadingConfigHeadingArcAdviceDanger;
