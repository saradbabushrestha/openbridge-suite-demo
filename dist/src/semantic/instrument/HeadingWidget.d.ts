export type HeadingWidgetProps = {
    variant?: 'conning' | 'radial' | 'arc' | 'linear';
    advice?: 'regular' | 'optimal' | 'danger';
    heading?: number | string;
    target?: string;
    title?: string;
};
export declare function HeadingWidget({ variant, advice, heading, target, title }: HeadingWidgetProps): any;
export default HeadingWidget;
