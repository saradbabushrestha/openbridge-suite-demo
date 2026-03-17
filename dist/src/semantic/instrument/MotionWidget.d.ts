declare const map: {
    readonly 'surge-sway-yaw': any;
    readonly 'draft-trim': any;
    readonly slamming: any;
    readonly vibrations: any;
    readonly heave: any;
};
export type MotionWidgetProps = {
    mode?: keyof typeof map;
    value?: number | string;
    unit?: string;
    title?: string;
};
export declare function MotionWidget({ mode, value, unit, title }: MotionWidgetProps): any;
export default MotionWidget;
