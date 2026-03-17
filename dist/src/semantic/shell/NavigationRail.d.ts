export type NavigationRailProps = {
    mode?: 'full' | 'rail' | 'rail-labeled' | 'condensed';
    behavior?: 'regular' | 'tree-navigation' | 'flyout' | 'flyout-expanded';
    title?: string;
    size?: number | string;
    caption?: React.ReactNode;
};
export declare function NavigationRail({ mode, behavior, title, size, caption }: NavigationRailProps): any;
export default NavigationRail;
