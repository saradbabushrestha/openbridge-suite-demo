import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"160.0\" height=\"160.0\" viewBox=\"0 0 160.0 160.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"160.0\" height=\"160.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-2109.0 -467.0)\"><path d=\"M2175.5 613.75L2175.5 499.14C2175.5 478.5 2189 476.25 2189 476.25C2189 476.25 2202.5 478.5 2202.5 499.14L2202.5 613.75C2202.5 614.855 2201.6 615.75 2200.5 615.75L2199.13 615.75L2178.88 615.75L2177.5 615.75C2176.4 615.75 2175.5 614.855 2175.5 613.75Z\" fill=\"white\" stroke=\"#8E8E8E\" id=\"n119\"/>\n<path d=\"M2183 589L2173 589L2173 585L2181 585L2184 581L2194 581L2197 585L2205 585L2205 589L2195 589L2195 605.75L2183 605.75L2183 589Z\" fill=\"white\" stroke=\"#8E8E8E\" id=\"n120\"/>\n<circle cx=\"2189\" cy=\"511\" r=\"11.5\" fill=\"white\" stroke=\"#8E8E8E\" id=\"n121\"/>\n<circle cx=\"2189\" cy=\"537\" r=\"11.5\" fill=\"white\" stroke=\"#8E8E8E\" id=\"n122\"/>\n<circle cx=\"2189\" cy=\"563\" r=\"11.5\" fill=\"white\" stroke=\"#8E8E8E\" id=\"n123\"/>\n</g>\n</svg>\n";

export type ObjectsVesselsVesselTypeTankerViewTopCcrpFalseProps = OpenBridgeAssetProps;

export const ObjectsVesselsVesselTypeTankerViewTopCcrpFalse = React.forwardRef(function ObjectsVesselsVesselTypeTankerViewTopCcrpFalse(props: ObjectsVesselsVesselTypeTankerViewTopCcrpFalseProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 160.0, intrinsicHeight: 160.0 });
});

export default ObjectsVesselsVesselTypeTankerViewTopCcrpFalse;
