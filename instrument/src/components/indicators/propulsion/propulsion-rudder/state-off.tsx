import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-2033.0 -384.0)\"><path d=\"M2073 400C2074.1 400 2075.01 400.898 2074.89 401.996C2074.44 406.036 2072.63 409.826 2069.73 412.728C2066.35 416.104 2061.77 418 2057 418C2052.23 418 2047.65 416.104 2044.27 412.728C2041.37 409.826 2039.56 406.036 2039.11 401.996C2038.99 400.898 2039.9 400 2041 400L2073 400Z\" stroke=\"#BEBEBE\" id=\"n336\"/>\n<path d=\"M2057 400V418\" stroke=\"#BEBEBE\" stroke-width=\"2\" id=\"n337\"/>\n<path d=\"M2073 400C2074.1 400 2075.01 400.898 2074.89 401.996C2074.44 406.036 2072.63 409.826 2069.73 412.728C2066.35 416.104 2061.77 418 2057 418C2052.23 418 2047.65 416.104 2044.27 412.728C2041.37 409.826 2039.56 406.036 2039.11 401.996C2038.99 400.898 2039.9 400 2041 400L2073 400Z\" stroke=\"#BEBEBE\" id=\"n338\"/>\n<path d=\"M2060 400C2060 398.343 2058.66 397 2057 397C2055.35 397 2054 398.343 2054 400C2054 401.657 2056.91 413.921 2056.91 413.921C2056.92 413.974 2056.96 414 2057 414C2057.05 414 2057.09 413.974 2057.1 413.921C2057.12 413.816 2060 401.657 2060 400Z\" fill=\"#BEBEBE\" stroke=\"#BEBEBE\" stroke-linecap=\"square\" id=\"n339\"/>\n</g>\n</svg>\n";

export type IndicatorsPropulsionPropulsionRudderStateOffProps = OpenBridgeAssetProps;

export const IndicatorsPropulsionPropulsionRudderStateOff = React.forwardRef(function IndicatorsPropulsionPropulsionRudderStateOff(props: IndicatorsPropulsionPropulsionRudderStateOffProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default IndicatorsPropulsionPropulsionRudderStateOff;
