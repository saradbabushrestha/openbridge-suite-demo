import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24.0\" height=\"32.0\" viewBox=\"0 0 24.0 32.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"24.0\" height=\"32.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-9869.0 -559.0)\"><path d=\"M9890.23 591H9871.38V588.435L9879.34 579.255C9880.81 577.605 9882.01 576.135 9882.94 574.845C9883.9 573.525 9884.62 572.25 9885.1 571.02C9885.58 569.76 9885.82 568.395 9885.82 566.925C9885.82 565.095 9885.33 563.685 9884.34 562.695C9883.35 561.705 9882 561.21 9880.29 561.21C9879 561.21 9877.81 561.45 9876.73 561.93C9875.65 562.38 9874.59 563.055 9873.54 563.955L9871.83 561.705C9872.64 561.015 9873.48 560.43 9874.35 559.95C9875.25 559.44 9876.19 559.065 9877.18 558.825C9878.2 558.555 9879.27 558.42 9880.38 558.42C9882.18 558.42 9883.72 558.765 9885.01 559.455C9886.33 560.145 9887.34 561.12 9888.03 562.38C9888.75 563.61 9889.11 565.08 9889.11 566.79C9889.11 568.08 9888.94 569.295 9888.61 570.435C9888.31 571.545 9887.85 572.64 9887.22 573.72C9886.62 574.77 9885.88 575.85 9885.01 576.96C9884.14 578.04 9883.15 579.18 9882.04 580.38L9875.38 587.94V588.075H9890.23V591Z\" fill=\"black\" id=\"n745\"/>\n</g>\n</svg>\n";

export type GaugesWatchDigitalNumbersBetaNumber2TypeMinuteProps = OpenBridgeAssetProps;

export const GaugesWatchDigitalNumbersBetaNumber2TypeMinute = React.forwardRef(function GaugesWatchDigitalNumbersBetaNumber2TypeMinute(props: GaugesWatchDigitalNumbersBetaNumber2TypeMinuteProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 24.0, intrinsicHeight: 32.0 });
});

export default GaugesWatchDigitalNumbersBetaNumber2TypeMinute;
