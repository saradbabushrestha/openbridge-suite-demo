declare const map: {
    readonly default: any;
    readonly 'command-other-place': any;
    readonly 'propulsion-command': any;
    readonly 'automation-command': any;
};
export type CommandMenuProps = {
    variant?: keyof typeof map;
    title?: string;
    footer?: React.ReactNode;
};
export declare function CommandMenu({ variant, title, footer }: CommandMenuProps): any;
export default CommandMenu;
