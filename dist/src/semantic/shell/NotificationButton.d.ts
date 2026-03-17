export type NotificationButtonProps = {
    variant?: 'flat' | 'normal' | 'enhanced';
    state?: 'enabled' | 'hover' | 'active' | 'focused';
    active?: boolean;
    count?: number;
    title?: string;
    size?: number | string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export declare function NotificationButton({ variant, state, active, count, title, size, className, onClick }: NotificationButtonProps): any;
export default NotificationButton;
