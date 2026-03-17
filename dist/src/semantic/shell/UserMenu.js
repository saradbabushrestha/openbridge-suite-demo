import { jsx as _jsx } from "react/jsx-runtime";
import SignInRegular from '../../../shell/src/components/top-bar/user/user-menu/type-sign-in-size-regular';
import SignInSmall from '../../../shell/src/components/top-bar/user/user-menu/type-sign-in-size-small';
import SignedInRegular from '../../../shell/src/components/top-bar/user/user-menu/type-signed-in-size-regular';
import SignedInSmall from '../../../shell/src/components/top-bar/user/user-menu/type-signed-in-size-small';
import UserSignInRegular from '../../../shell/src/components/top-bar/user/user-menu/type-user-sign-in-size-regular';
import UserSignInSmall from '../../../shell/src/components/top-bar/user/user-menu/type-user-sign-in-size-small';
import LoadingRegular from '../../../shell/src/components/top-bar/user/user-menu/type-loading-sign-in-size-regular';
import LoadingSmall from '../../../shell/src/components/top-bar/user/user-menu/type-loading-sign-in-size-small';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
const map = {
    regular: { 'sign-in': SignInRegular, 'signed-in': SignedInRegular, 'user-sign-in': UserSignInRegular, loading: LoadingRegular },
    small: { 'sign-in': SignInSmall, 'signed-in': SignedInSmall, 'user-sign-in': UserSignInSmall, loading: LoadingSmall },
};
export function UserMenu({ size = 'regular', state = 'signed-in', title = 'User menu', subtitle }) {
    const Asset = map[size][state];
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: subtitle ?? `${size} · ${state}`, children: _jsx(Asset, { responsive: true, width: '100%', title: title }) }));
}
export default UserMenu;
