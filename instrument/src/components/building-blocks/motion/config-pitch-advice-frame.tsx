import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-18376.0 -3875.0)\"><path d=\"M18813 3949.98C18777.2 3914.18 18731.6 3889.8 18681.9 3879.92C18632.3 3870.04 18580.8 3875.11 18534 3894.49C18487.3 3913.86 18447.3 3946.68 18419.1 3988.77C18391 4030.87 18376 4080.37 18376 4131C18376 4181.63 18391 4231.13 18419.1 4273.23C18447.3 4315.32 18487.3 4348.14 18534 4367.51C18580.8 4386.89 18632.3 4391.96 18681.9 4382.08C18731.6 4372.2 18777.2 4347.82 18813 4312.02L18632 4131L18813 3949.98Z\" stroke=\"#535353\" id=\"n1091\"/>\n</g>\n</svg>\n";

export type BuildingBlocksMotionConfigPitchAdviceFrameProps = OpenBridgeAssetProps;

export const BuildingBlocksMotionConfigPitchAdviceFrame = React.forwardRef(function BuildingBlocksMotionConfigPitchAdviceFrame(props: BuildingBlocksMotionConfigPitchAdviceFrameProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksMotionConfigPitchAdviceFrame;
