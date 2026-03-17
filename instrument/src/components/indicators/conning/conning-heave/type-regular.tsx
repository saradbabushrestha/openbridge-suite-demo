import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-1318.0 -291.0)\"><rect x=\"1354\" y=\"299\" width=\"4\" height=\"32\" rx=\"2\" fill=\"white\" stroke=\"#BEBEBE\" id=\"n189\"/>\n<path d=\"M1326 315L1358 315\" stroke=\"#BEBEBE\" stroke-linecap=\"square\" id=\"n190\"/>\n<path d=\"M1325.5 301C1325.5 299.619 1326.62 298.5 1328 298.5H1352V299.5H1328C1327.17 299.5 1326.5 300.172 1326.5 301H1325.5ZM1352 331.5H1328C1326.62 331.5 1325.5 330.381 1325.5 329H1326.5C1326.5 329.828 1327.17 330.5 1328 330.5H1352V331.5ZM1328 331.5C1326.62 331.5 1325.5 330.381 1325.5 329V301C1325.5 299.619 1326.62 298.5 1328 298.5V299.5C1327.17 299.5 1326.5 300.172 1326.5 301V329C1326.5 329.828 1327.17 330.5 1328 330.5V331.5ZM1352 299V331V299Z\" fill=\"#BEBEBE\" id=\"n191\"/>\n<path d=\"M1354 309H1358V315H1354V309Z\" fill=\"#535353\" id=\"n192\"/>\n<path d=\"M1358 315V315.5H1358.5V315H1358ZM1354 315H1353.5V315.5H1354V315ZM1357.5 309V315H1358.5V309H1357.5ZM1358 314.5H1354V315.5H1358V314.5ZM1354.5 315V309H1353.5V315H1354.5Z\" fill=\"#535353\" id=\"n193\"/>\n<path d=\"M1357.5 308.5C1357.77 308.5 1358 308.724 1358 309C1358 309.276 1357.77 309.5 1357.5 309.5L1342.5 309.5C1342.22 309.5 1342 309.276 1342 309C1342 308.724 1342.22 308.5 1342.5 308.5L1357.5 308.5Z\" fill=\"#535353\" stroke=\"#535353\" id=\"n194\"/>\n<path d=\"M1338 305H1346V311C1346 312.105 1345.1 313 1344 313H1340C1338.9 313 1338 312.105 1338 311V305Z\" fill=\"white\" stroke=\"#BEBEBE\" id=\"n195\"/>\n</g>\n</svg>\n";

export type IndicatorsConningConningHeaveTypeRegularProps = OpenBridgeAssetProps;

export const IndicatorsConningConningHeaveTypeRegular = React.forwardRef(function IndicatorsConningConningHeaveTypeRegular(props: IndicatorsConningConningHeaveTypeRegularProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default IndicatorsConningConningHeaveTypeRegular;
