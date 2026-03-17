export type MainEngineWidgetProps = {
    priority?: 'regular' | 'in-command';
    styleMode?: 'bar' | 'propellar';
    state?: 'active' | 'input' | 'ready' | 'loading' | 'off';
    value?: number | string;
    unit?: string;
    title?: string;
};
export declare function MainEngineWidget({ priority, styleMode, state, value, unit, title }: MainEngineWidgetProps): any;
export default MainEngineWidget;
