export type AlertStackItem = {
    kind?: 'notification' | 'advice';
    title: string;
    detail?: string;
    severity?: 'normal' | 'warning' | 'critical';
};
export type AlertStackProps = {
    items: AlertStackItem[];
    className?: string;
};
export declare function AlertStack({ items, className }: AlertStackProps): any;
export default AlertStack;
