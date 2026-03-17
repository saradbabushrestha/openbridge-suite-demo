export type UserMenuProps = {
    size?: 'regular' | 'small';
    state?: 'sign-in' | 'signed-in' | 'user-sign-in' | 'loading';
    title?: string;
    subtitle?: React.ReactNode;
};
export declare function UserMenu({ size, state, title, subtitle }: UserMenuProps): any;
export default UserMenu;
