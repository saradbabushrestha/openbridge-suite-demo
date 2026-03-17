import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-312.0 -312.0)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M328 332H332V328H328V332ZM334 344H338V340H334V344ZM328 344H332V340H328V344ZM328 338H332V334H328V338ZM334 338H338V334H334V338ZM340 328V332H344V328H340ZM334 332H338V328H334V332ZM340 338H344V334H340V338ZM340 344H344V340H340V344Z\" fill=\"#535353\" id=\"n401\"/>\n</g>\n</svg>\n";

export type TopBarAppAppButtonTypeRegularProps = OpenBridgeAssetProps;

export const TopBarAppAppButtonTypeRegular = React.forwardRef(function TopBarAppAppButtonTypeRegular(props: TopBarAppAppButtonTypeRegularProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default TopBarAppAppButtonTypeRegular;
