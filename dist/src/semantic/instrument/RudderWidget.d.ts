export type RudderWidgetProps = {
    priority?: 'regular' | 'in-command';
    styleMode?: 'rudder' | 'bar';
    state?: 'active' | 'input' | 'ready' | 'loading' | 'off';
    angle?: number | string;
    title?: string;
};
export declare function RudderWidget({ priority, styleMode, state, angle, title }: RudderWidgetProps): any;
export default RudderWidget;
