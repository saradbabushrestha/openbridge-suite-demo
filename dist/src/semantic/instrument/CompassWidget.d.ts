export type CompassWidgetProps = {
    variant?: 'conning' | 'radial' | 'arc' | 'linear';
    advice?: 'regular' | 'optimal' | 'danger';
    heading?: number | string;
    target?: string;
    title?: string;
};
export declare function CompassWidget({ variant, advice, heading, target, title }: CompassWidgetProps): any;
export default CompassWidget;
