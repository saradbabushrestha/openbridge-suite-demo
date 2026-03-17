import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-4128.0 -216.0)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4144 247C4142.9 247 4142 246.105 4142 245V233C4142 231.895 4142.9 231 4144 231H4160C4161.1 231 4162 231.895 4162 233V245C4162 246.105 4161.1 247 4160 247H4155L4152 250L4149 247H4144ZM4152 241.576L4149.32 243.149C4148.94 243.373 4148.48 243.03 4148.58 242.601L4149.28 239.681L4146.94 237.718C4146.6 237.431 4146.78 236.871 4147.22 236.837L4150.33 236.595L4151.54 233.8C4151.72 233.399 4152.28 233.399 4152.46 233.8L4153.67 236.595L4156.78 236.837C4157.22 236.871 4157.4 237.431 4157.06 237.718L4154.72 239.681L4155.42 242.601C4155.52 243.03 4155.06 243.373 4154.68 243.149L4152 241.576Z\" fill=\"#00805E\" id=\"n287\"/>\n</g>\n</svg>\n";

export type NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveTrueProps = OpenBridgeAssetProps;

export const NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveTrue = React.forwardRef(function NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveTrue(props: NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveTrueProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default NotificationAndAdviceAdviceAdviceButtonTypeFlatStateEnabledIsActiveTrue;
