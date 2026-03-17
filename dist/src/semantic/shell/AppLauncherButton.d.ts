export type AppLauncherButtonProps = {
    pinned?: boolean;
    className?: string;
    title?: string;
    size?: number | string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export declare function AppLauncherButton({ pinned, className, title, size, onClick }: AppLauncherButtonProps): any;
export default AppLauncherButton;
