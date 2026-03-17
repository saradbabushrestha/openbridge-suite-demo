import * as React from 'react';
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
} as const;

export type UserMenuProps = {
  size?: 'regular' | 'small';
  state?: 'sign-in' | 'signed-in' | 'user-sign-in' | 'loading';
  title?: string;
  subtitle?: React.ReactNode;
};

export function UserMenu({ size = 'regular', state = 'signed-in', title = 'User menu', subtitle }: UserMenuProps) {
  const Asset = map[size][state];
  return (
    <OpenBridgeFrame title={title} subtitle={subtitle ?? `${size} · ${state}`}>
      <Asset responsive width='100%' title={title} />
    </OpenBridgeFrame>
  );
}

export default UserMenu;
