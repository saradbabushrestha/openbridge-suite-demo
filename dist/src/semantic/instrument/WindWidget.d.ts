export type WindWidgetProps = {
    mode?: 'histogram' | 'direction' | 'force';
    priority?: 'regular' | 'enhanced';
    value?: number | string;
    unit?: string;
    title?: string;
    secondary?: string;
};
export declare function WindWidget({ mode, priority, value, unit, title, secondary }: WindWidgetProps): any;
export default WindWidget;
