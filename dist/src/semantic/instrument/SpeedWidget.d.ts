export type SpeedWidgetProps = {
    variant?: 'conning' | 'radial';
    advice?: 'regular' | 'optimal' | 'danger';
    speed?: number | string;
    title?: string;
    secondary?: string;
};
export declare function SpeedWidget({ variant, advice, speed, title, secondary }: SpeedWidgetProps): any;
export default SpeedWidget;
