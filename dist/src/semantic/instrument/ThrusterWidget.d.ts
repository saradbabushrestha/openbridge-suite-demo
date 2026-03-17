export type ThrusterWidgetProps = {
    priority?: 'regular' | 'in-command';
    styleMode?: 'bar' | 'propellar';
    state?: 'active' | 'input' | 'ready' | 'loading' | 'off';
    thrust?: number | string;
    title?: string;
};
export declare function ThrusterWidget({ priority, styleMode, state, thrust, title }: ThrusterWidgetProps): any;
export default ThrusterWidget;
