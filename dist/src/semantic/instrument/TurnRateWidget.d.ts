export type TurnRateWidgetProps = {
    variant?: 'linear' | 'radial' | 'sector';
    style?: 'regular' | 'enhanced' | 'port-stbd';
    title?: string;
    value?: number | string;
    unit?: string;
};
export declare function TurnRateWidget({ variant, style, title, value, unit }: TurnRateWidgetProps): any;
export default TurnRateWidget;
