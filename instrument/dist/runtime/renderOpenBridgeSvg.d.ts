export type OpenBridgeAssetProps = {
    size?: number | string;
    width?: number | string;
    height?: number | string;
    responsive?: boolean;
    title?: string;
    preserveAspectRatio?: string;
    intrinsicWidth?: number;
    intrinsicHeight?: number;
    className?: string;
    style?: Record<string, any>;
    [key: string]: any;
};
export declare function renderOpenBridgeSvg(svgMarkup: string, props: OpenBridgeAssetProps & {
    ref?: any;
}): any;
