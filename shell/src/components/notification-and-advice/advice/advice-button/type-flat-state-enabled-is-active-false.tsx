import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-4032.0 -216.0)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4053 247L4056 250L4059 247H4064C4065.1 247 4066 246.105 4066 245V233C4066 231.895 4065.1 231 4064 231H4048C4046.9 231 4046 231.895 4046 233V245C4046 246.105 4046.9 247 4048 247H4053ZM4056 247.172L4058.17 245H4064V233H4048L4048 245H4053.83L4056 247.172Z\" fill=\"#535353\" id=\"n285\"/>\n<path d=\"M4053.73 242.66L4056 241.33L4058.27 242.66C4058.59 242.849 4058.98 242.559 4058.89 242.197L4058.3 239.728L4060.28 238.068C4060.57 237.824 4060.42 237.351 4060.04 237.322L4057.42 237.118L4056.39 234.754C4056.24 234.415 4055.76 234.415 4055.61 234.754L4054.58 237.118L4051.96 237.322C4051.58 237.351 4051.43 237.824 4051.72 238.068L4053.7 239.728L4053.11 242.197C4053.02 242.559 4053.41 242.849 4053.73 242.66Z\" fill=\"#535353\" id=\"n286\"/>\n</g>\n</svg>\n";

export type NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveFalseProps = OpenBridgeAssetProps;

export const NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveFalse = React.forwardRef(function NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveFalse(props: NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveFalseProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveFalse;
