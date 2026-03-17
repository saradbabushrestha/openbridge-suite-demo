import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-25823.0 -3107.0)\"><path d=\"M26260 3544.02C26283.8 3520.25 26302.6 3492.03 26315.5 3460.97C26328.4 3429.91 26335 3396.62 26335 3363H26079L26260 3544.02Z\" stroke=\"#535353\" id=\"n895\"/>\n</g>\n</svg>\n";

export type BuildingBlocksWatchConfigWatchAdviceCautionProps = OpenBridgeAssetProps;

export const BuildingBlocksWatchConfigWatchAdviceCaution = React.forwardRef(function BuildingBlocksWatchConfigWatchAdviceCaution(props: BuildingBlocksWatchConfigWatchAdviceCautionProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksWatchConfigWatchAdviceCaution;
