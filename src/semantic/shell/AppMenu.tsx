import * as React from 'react';
import CollapsedSmall from '../../../shell/src/components/top-bar/app/app-menu/expand-false-size-small';
import CollapsedLarge from '../../../shell/src/components/top-bar/app/app-menu/expand-false-size-large';
import ExpandedSmall from '../../../shell/src/components/top-bar/app/app-menu/expand-true-size-small';
import ExpandedLarge from '../../../shell/src/components/top-bar/app/app-menu/expand-true-size-large';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';

const map = {
  small: { false: CollapsedSmall, true: ExpandedSmall },
  large: { false: CollapsedLarge, true: ExpandedLarge },
} as const;

export type AppMenuProps = {
  expanded?: boolean;
  size?: 'small' | 'large';
  title?: string;
  footer?: React.ReactNode;
};

export function AppMenu({ expanded = false, size = 'large', title = 'App menu', footer }: AppMenuProps) {
  const Asset = map[size][String(expanded) as 'false' | 'true'];
  return (
    <OpenBridgeFrame title={title} subtitle={`${size} · ${expanded ? 'expanded' : 'collapsed'}`} footer={footer}>
      <Asset responsive width='100%' title={title} />
    </OpenBridgeFrame>
  );
}

export default AppMenu;
