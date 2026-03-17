import * as React from 'react';
import TopbarRegular from '../../../shell/src/components/main-navigation-elements/topbar/type-regular';
import TopbarSmall from '../../../shell/src/components/main-navigation-elements/topbar/type-small';
import TopbarTall from '../../../shell/src/components/main-navigation-elements/topbar/type-tall';
import TopbarWideRail from '../../../shell/src/components/main-navigation-elements/topbar/type-wide-rail';
import TopbarDouble from '../../../shell/src/components/main-navigation-elements/topbar/type-double';
import TopbarSplit from '../../../shell/src/components/main-navigation-elements/topbar/type-split';
import TopbarSubPage from '../../../shell/src/components/main-navigation-elements/topbar/type-sub-page';
import TopbarFloatingWindow from '../../../shell/src/components/main-navigation-elements/topbar/type-floating-window';
import TopbarOverlay from '../../../shell/src/components/main-navigation-elements/topbar/type-overlay';
import AppButtonRegular from '../../../shell/src/components/top-bar/app/app-button/type-regular';
import AppButtonPinned from '../../../shell/src/components/top-bar/app/app-button/type-pinned-apps';
import SystemButtonExpanded from '../../../shell/src/components/top-bar/system/system-button/type-expanded-state-enabled';
import SystemButtonCondensed from '../../../shell/src/components/top-bar/system/system-button/type-condensed-state-enabled';
import UserSignedInRegular from '../../../shell/src/components/top-bar/user/user-menu/type-signed-in-size-regular';
import UserSignedInSmall from '../../../shell/src/components/top-bar/user/user-menu/type-signed-in-size-small';
import { NotificationButton } from './NotificationButton';
import { AdviceButton } from './AdviceButton';
import { cn } from '../../lib/cn';

const backgrounds = {
  regular: TopbarRegular,
  small: TopbarSmall,
  tall: TopbarTall,
  'wide-rail': TopbarWideRail,
  double: TopbarDouble,
  split: TopbarSplit,
  'sub-page': TopbarSubPage,
  'floating-window': TopbarFloatingWindow,
  overlay: TopbarOverlay,
} as const;

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

export function TopBarShell({ layout = 'regular', title = 'OpenBridge shell', subtitle = 'semantic wrapper', pinnedApps = false, compactUser = false, compactSystem = false, notificationCount = 0, className }: TopBarShellProps) {
  const Background = backgrounds[layout];
  const AppButton = pinnedApps ? AppButtonPinned : AppButtonRegular;
  const SystemButton = compactSystem ? SystemButtonCondensed : SystemButtonExpanded;
  const User = compactUser ? UserSignedInSmall : UserSignedInRegular;
  return (
    <div className={cn('ob-topbar-shell', className)} style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', border: '1px solid #364053', background: '#0f1420' }}>
      <Background responsive width='100%' title={typeof title === 'string' ? title : 'OpenBridge shell'} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <AppButton size={compactUser ? 40 : 48} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#f7f7f7', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{title}</div>
            {subtitle ? <div style={{ fontSize: 12, color: '#8da0bf' }}>{subtitle}</div> : null}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <AdviceButton variant='flat' />
          <NotificationButton variant='flat' count={notificationCount} />
          <SystemButton size={compactSystem ? 48 : 60} />
          <User size={compactUser ? 40 : 52} />
        </div>
      </div>
    </div>
  );
}

export default TopBarShell;
