import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-1318.0 -220.0)\"><rect x=\"1354\" y=\"228\" width=\"4\" height=\"32\" rx=\"2\" fill=\"white\" stroke=\"#BEBEBE\" id=\"n182\"/>\n<path d=\"M1326 244L1358 244\" stroke=\"#BEBEBE\" stroke-linecap=\"square\" id=\"n183\"/>\n<path d=\"M1325.5 230C1325.5 228.619 1326.62 227.5 1328 227.5H1352V228.5H1328C1327.17 228.5 1326.5 229.172 1326.5 230H1325.5ZM1352 260.5H1328C1326.62 260.5 1325.5 259.381 1325.5 258H1326.5C1326.5 258.828 1327.17 259.5 1328 259.5H1352V260.5ZM1328 260.5C1326.62 260.5 1325.5 259.381 1325.5 258V230C1325.5 228.619 1326.62 227.5 1328 227.5V228.5C1327.17 228.5 1326.5 229.172 1326.5 230V258C1326.5 258.828 1327.17 259.5 1328 259.5V260.5ZM1352 228V260V228Z\" fill=\"#BEBEBE\" id=\"n184\"/>\n<path d=\"M1354 238H1358V244H1354V238Z\" fill=\"#2D548B\" id=\"n185\"/>\n<path d=\"M1358 244V244.5H1358.5V244H1358ZM1354 244H1353.5V244.5H1354V244ZM1357.5 238V244H1358.5V238H1357.5ZM1358 243.5H1354V244.5H1358V243.5ZM1354.5 244V238H1353.5V244H1354.5Z\" fill=\"#2D548B\" id=\"n186\"/>\n<path d=\"M1357.5 237.5C1357.77 237.5 1358 237.724 1358 238C1358 238.276 1357.77 238.5 1357.5 238.5L1342.5 238.5C1342.22 238.5 1342 238.276 1342 238C1342 237.724 1342.22 237.5 1342.5 237.5L1357.5 237.5Z\" fill=\"#2D548B\" stroke=\"#2D548B\" id=\"n187\"/>\n<path d=\"M1338 234H1346V240C1346 241.105 1345.1 242 1344 242H1340C1338.9 242 1338 241.105 1338 240V234Z\" fill=\"white\" stroke=\"#BEBEBE\" id=\"n188\"/>\n</g>\n</svg>\n";

export type IndicatorsConningConningHeaveTypeEnhancedProps = OpenBridgeAssetProps;

export const IndicatorsConningConningHeaveTypeEnhanced = React.forwardRef(function IndicatorsConningConningHeaveTypeEnhanced(props: IndicatorsConningConningHeaveTypeEnhancedProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default IndicatorsConningConningHeaveTypeEnhanced;
