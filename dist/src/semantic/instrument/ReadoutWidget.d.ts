export type ReadoutWidgetProps = {
    size?: 'regular' | 'medium' | 'large';
    alignment?: 'left' | 'center' | 'vertical';
    priority?: 'regular' | 'enhanced' | 'input' | 'invalid' | 'low-integrity';
    value?: number | string;
    unit?: string;
    title?: string;
    secondary?: string;
};
export declare function ReadoutWidget({ size, alignment, priority, value, unit, title, secondary }: ReadoutWidgetProps): any;
export default ReadoutWidget;
