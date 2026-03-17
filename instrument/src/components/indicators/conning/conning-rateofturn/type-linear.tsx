import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"48.0\" height=\"48.0\" viewBox=\"0 0 48.0 48.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"48.0\" height=\"48.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-680.0 -311.0)\"><rect x=\"686\" y=\"331\" width=\"36\" height=\"8\" rx=\"4\" fill=\"white\" stroke=\"#BEBEBE\" id=\"n103\"/>\n<path d=\"M693 335C693 332.791 694.791 331 697 331H704V339H697C694.791 339 693 337.209 693 335Z\" fill=\"#FCD2CF\" stroke=\"#FCD2CF\" id=\"n104\"/>\n<circle cx=\"697\" cy=\"335\" r=\"3\" fill=\"#AF5655\" id=\"n105\"/>\n</g>\n</svg>\n";

export type IndicatorsConningConningRateofturnTypeLinearProps = OpenBridgeAssetProps;

export const IndicatorsConningConningRateofturnTypeLinear = React.forwardRef(function IndicatorsConningConningRateofturnTypeLinear(props: IndicatorsConningConningRateofturnTypeLinearProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 48.0, intrinsicHeight: 48.0 });
});

export default IndicatorsConningConningRateofturnTypeLinear;
