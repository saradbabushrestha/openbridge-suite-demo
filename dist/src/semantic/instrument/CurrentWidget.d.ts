export type CurrentWidgetProps = {
    variant?: 'direction' | 'vessel';
    priority?: 'regular' | 'enhanced';
    title?: string;
    speed?: number | string;
    unit?: string;
};
export declare function CurrentWidget({ variant, priority, title, speed, unit }: CurrentWidgetProps): any;
export default CurrentWidget;
