import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24.0\" height=\"32.0\" viewBox=\"0 0 24.0 32.0\" fill=\"none\">\n  <defs>\n    <clipPath id=\"clip__asset\">\n      <rect x=\"0\" y=\"0\" width=\"24.0\" height=\"32.0\"/>\n    </clipPath>\n  </defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-9595.0 -609.0)\"><path d=\"M9618.2 634.16H9614.33V641H9608.97V634.16H9595.88V629.975L9608.97 608.78H9614.33V629.66H9618.2V634.16ZM9608.93 621.74C9608.93 621.23 9608.93 620.675 9608.93 620.075C9608.96 619.475 9608.99 618.875 9609.02 618.275C9609.05 617.675 9609.06 617.12 9609.06 616.61C9609.09 616.1 9609.12 615.71 9609.15 615.44H9608.97C9608.73 616.07 9608.46 616.685 9608.16 617.285C9607.86 617.885 9607.55 618.455 9607.22 618.995L9600.74 629.66H9608.93V621.74Z\" fill=\"black\" id=\"n748\"/>\n</g>\n</svg>\n";

export type GaugesWatchDigitalNumbersBetaNumber4TypeHourProps = OpenBridgeAssetProps;

export const GaugesWatchDigitalNumbersBetaNumber4TypeHour = React.forwardRef(function GaugesWatchDigitalNumbersBetaNumber4TypeHour(props: GaugesWatchDigitalNumbersBetaNumber4TypeHourProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 24.0, intrinsicHeight: 32.0 });
});

export default GaugesWatchDigitalNumbersBetaNumber4TypeHour;
