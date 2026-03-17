export type DepthWidgetProps = {
    variant?: 'regular' | 'shallow' | 'deep' | 'prediction' | 'scanned';
    title?: string;
    depth?: number | string;
    unit?: string;
};
export declare function DepthWidget({ variant, title, depth, unit }: DepthWidgetProps): any;
export default DepthWidget;
