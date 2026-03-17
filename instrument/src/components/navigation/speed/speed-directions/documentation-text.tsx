import * as React from "react";
import { renderOpenBridgeSvg, type OpenBridgeAssetProps } from "../../../../runtime/renderOpenBridgeSvg";

const svgMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"792.0\" height=\"116.0\" viewBox=\"0 0 792.0 116.0\" fill=\"none\">\n  <defs><clipPath id=\"clip__asset\"><rect x=\"0\" y=\"0\" width=\"792.0\" height=\"116.0\"/></clipPath><clipPath id=\"clip106_68_6728\">\n<rect width=\"64\" height=\"64\" fill=\"white\" transform=\"translate(11544 855)\" id=\"n2885\"/>\n</clipPath>\n<clipPath id=\"clip110_68_6728\">\n<rect width=\"48\" height=\"48\" fill=\"white\" transform=\"translate(12052 923) rotate(90)\" id=\"n2889\"/>\n</clipPath>\n<clipPath id=\"clip112_68_6728\">\n<rect width=\"48\" height=\"48\" fill=\"white\" transform=\"translate(11956 875)\" id=\"n2891\"/>\n</clipPath>\n</defs>\n  <g clip-path=\"url(#clip__asset)\" transform=\"translate(-11340.0 -835.0)\"><g clip-path=\"url(#clip106_68_6728)\" id=\"n1990\">\n<path d=\"M11560 905.667L11570.7 887L11560 868.334L11549.3 868.333L11560 887L11549.3 905.667L11560 905.667Z\" fill=\"#2D548B\" id=\"n1991\"/>\n</g>\n<path d=\"M12148 947L11812 947\" stroke=\"#BEBEBE\" stroke-linecap=\"round\" id=\"n2012\"/>\n<g clip-path=\"url(#clip110_68_6728)\" id=\"n2013\">\n<path d=\"M12016 961L12024 947L12016 933L12008 933L12016 947L12008 961L12016 961Z\" fill=\"#2D548B\" id=\"n2014\"/>\n</g>\n<g clip-path=\"url(#clip112_68_6728)\" id=\"n2019\">\n<path d=\"M11994 899L11980 891L11966 899L11966 907L11980 899L11994 907L11994 899Z\" fill=\"#2D548B\" id=\"n2020\"/>\n<path d=\"M11994 911L11980 903L11966 911L11966 919L11980 911L11994 919L11994 911Z\" fill=\"#2D548B\" id=\"n2021\"/>\n</g>\n</g>\n</svg>\n";

export type NavigationSpeedSpeedDirectionsDocumentationTextProps = OpenBridgeAssetProps;

export const NavigationSpeedSpeedDirectionsDocumentationText = React.forwardRef(function NavigationSpeedSpeedDirectionsDocumentationText(props: NavigationSpeedSpeedDirectionsDocumentationTextProps, ref: any) {
  return renderOpenBridgeSvg(svgMarkup, { ...props, ref, intrinsicWidth: 792.0, intrinsicHeight: 116.0 });
});

export default NavigationSpeedSpeedDirectionsDocumentationText;
