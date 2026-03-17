import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-312.0 -288.0)\"><path d=\"M320 305.6C320 302.24 320 300.56 320.654 299.276C321.229 298.147 322.147 297.229 323.276 296.654C324.56 296 326.24 296 329.6 296H342.4C345.76 296 347.44 296 348.724 296.654C349.853 297.229 350.771 298.147 351.346 299.276C352 300.56 352 302.24 352 305.6V318.4C352 321.76 352 323.44 351.346 324.724C350.771 325.853 349.853 326.771 348.724 327.346C347.44 328 345.76 328 342.4 328H329.6C326.24 328 324.56 328 323.276 327.346C322.147 326.771 321.229 325.853 320.654 324.724C320 323.44 320 321.76 320 318.4V305.6Z\" fill=\"black\" fill-opacity=\"0.04\" id=\"n21\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M329 304C327.895 304 327 304.895 327 306V316C327 317.105 327.895 318 329 318H333L336 321L339 318H343C344.105 318 345 317.105 345 316V306C345 304.895 344.105 304 343 304H329Z\" fill=\"#2D548B\" id=\"n22\"/>\n</g>\n</svg>\n";

export type NotificationAndAdviceNotificationNotificationButtonTypeFlatStateHoverIsActiveTrueProps = OpenBridgeAssetProps;

export const NotificationAndAdviceNotificationNotificationButtonTypeFlatStateHoverIsActiveTrue = React.forwardRef(function NotificationAndAdviceNotificationNotificationButtonTypeFlatStateHoverIsActiveTrue(props: NotificationAndAdviceNotificationNotificationButtonTypeFlatStateHoverIsActiveTrueProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default NotificationAndAdviceNotificationNotificationButtonTypeFlatStateHoverIsActiveTrue;
