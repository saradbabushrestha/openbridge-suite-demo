import * as React from 'react';
import { TopBarShell } from '../shell/TopBarShell';
import { NavigationRail } from '../shell/NavigationRail';
import { AppMenu } from '../shell/AppMenu';
import { SystemMenu } from '../shell/SystemMenu';
import { UserMenu } from '../shell/UserMenu';
import { CommandMenu } from '../shell/CommandMenu';
import { OpenBridgeGrid } from '../layout/OpenBridgeGrid';

export function BridgeShellDemo() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <TopBarShell layout='wide-rail' title='Bridge workspace' subtitle='Semantic shell demo' notificationCount={4} pinnedApps />
      <OpenBridgeGrid minColumn={280}>
        <NavigationRail mode='rail-labeled' behavior='flyout-expanded' caption='Directly backed by extracted rail assets.' />
        <AppMenu expanded size='large' footer='Small and large variants are wired.' />
        <SystemMenu condensed={false} wifi audio microphone />
        <UserMenu state='signed-in' size='regular' subtitle='Signed in state wrapper' />
        <CommandMenu variant='propulsion-command' footer='Command-specific semantic alias.' />
      </OpenBridgeGrid>
    </div>
  );
}

export default BridgeShellDemo;
