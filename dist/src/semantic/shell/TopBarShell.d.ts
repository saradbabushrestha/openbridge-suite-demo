declare const backgrounds: {
    readonly regular: any;
    readonly small: any;
    readonly tall: any;
    readonly 'wide-rail': any;
    readonly double: any;
    readonly split: any;
    readonly 'sub-page': any;
    readonly 'floating-window': any;
    readonly overlay: any;
};
export type TopBarShellProps = {
    layout?: keyof typeof backgrounds;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    pinnedApps?: boolean;
    compactUser?: boolean;
    compactSystem?: boolean;
    notificationCount?: number;
    className?: string;
};
export declare function TopBarShell({ layout, title, subtitle, pinnedApps, compactUser, compactSystem, notificationCount, className }: TopBarShellProps): any;
export default TopBarShell;
