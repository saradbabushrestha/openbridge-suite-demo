import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512.0\" height=\"512.0\" viewBox=\"0 0 512.0 512.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"512.0\" height=\"512.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-19419.0 -3875.0)\"><path d=\"M19896.7 4003C19868.5 3954.2 19825 3916.05 19773 3894.49C19720.9 3872.92 19663.2 3869.14 19608.7 3883.72C19554.3 3898.31 19506.2 3930.45 19471.9 3975.16C19437.6 4019.87 19419 4074.65 19419 4131C19419 4187.35 19437.6 4242.13 19471.9 4286.84C19506.2 4331.55 19554.3 4363.69 19608.7 4378.28C19663.2 4392.86 19720.9 4389.08 19773 4367.51C19825 4345.95 19868.5 4307.8 19896.7 4259L19675 4131L19896.7 4003Z\" stroke=\"#535353\" id=\"n1092\"/>\n</g>\n</svg>\n";

export type BuildingBlocksMotionConfigPitchrollPitchAdviceFrameProps = OpenBridgeAssetProps;

export const BuildingBlocksMotionConfigPitchrollPitchAdviceFrame = React.forwardRef(function BuildingBlocksMotionConfigPitchrollPitchAdviceFrame(props: BuildingBlocksMotionConfigPitchrollPitchAdviceFrameProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 512.0, intrinsicHeight: 512.0 });
});

export default BuildingBlocksMotionConfigPitchrollPitchAdviceFrame;
