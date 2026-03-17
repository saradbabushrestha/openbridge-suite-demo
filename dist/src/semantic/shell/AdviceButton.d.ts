export type AdviceButtonProps = {
    variant?: 'flat' | 'normal' | 'enhanced';
    state?: 'enabled' | 'hover' | 'active' | 'focused';
    active?: boolean;
    title?: string;
    size?: number | string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export declare function AdviceButton({ variant, state, active, title, size, className, onClick }: AdviceButtonProps): any;
export default AdviceButton;
