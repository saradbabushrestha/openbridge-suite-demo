import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"160.0\" height=\"160.0\" viewBox=\"0 0 160.0 160.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"160.0\" height=\"160.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-1444.0 -240.0)\"><path d=\"M1591.48 320L1590.81 321.598C1589.41 324.942 1586.14 327.118 1582.51 327.118H1465.39V323.039L1456.48 320C1456.48 317.538 1458.48 315.541 1460.94 315.541H1465L1474.5 296.5H1476H1478.5H1480.5L1477.5 315.541H1480.59L1492.83 304.124H1544.01H1571.5L1589.46 306.819C1591.93 307.189 1593.59 309.552 1593.09 312L1591.48 320Z\" fill=\"white\" id=\"n263\"/>\n<path d=\"M1456.48 320L1465.39 323.039V327.118H1582.51C1586.14 327.118 1589.41 324.942 1590.81 321.598L1591.48 320L1593.09 312M1456.48 320H1551.04C1560.3 320 1569.52 318.713 1578.43 316.177L1593.09 312M1456.48 320C1456.48 317.538 1458.48 315.541 1460.94 315.541H1465M1465 315.541L1474.5 296.5H1476M1465 315.541H1477.5M1477.5 315.541H1480.59L1492.83 304.124H1544.01H1571.5L1589.46 306.819C1591.93 307.189 1593.59 309.552 1593.09 312M1477.5 315.541L1480.5 296.5H1478.5M1478.5 296.5V288.5M1478.5 296.5H1476M1476 296.5V293\" stroke=\"#8E8E8E\" id=\"n264\"/>\n</g>\n</svg>\n";

export type ObjectsVesselsVesselTypeUsvSmallViewSideCcrpFalseProps = OpenBridgeAssetProps;

export const ObjectsVesselsVesselTypeUsvSmallViewSideCcrpFalse = React.forwardRef(function ObjectsVesselsVesselTypeUsvSmallViewSideCcrpFalse(props: ObjectsVesselsVesselTypeUsvSmallViewSideCcrpFalseProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 160.0, intrinsicHeight: 160.0 });
});

export default ObjectsVesselsVesselTypeUsvSmallViewSideCcrpFalse;
