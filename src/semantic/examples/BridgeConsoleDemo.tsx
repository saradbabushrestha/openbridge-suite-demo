import * as React from 'react';
import { TopBarShell } from '../shell/TopBarShell';
import { NavigationRail } from '../shell/NavigationRail';
import { CompassWidget } from '../instrument/CompassWidget';
import { HeadingWidget } from '../instrument/HeadingWidget';
import { SpeedWidget } from '../instrument/SpeedWidget';
import { WindWidget } from '../instrument/WindWidget';
import { RudderWidget } from '../instrument/RudderWidget';
import { MainEngineWidget } from '../instrument/MainEngineWidget';
import { ReadoutWidget } from '../instrument/ReadoutWidget';

export function BridgeConsoleDemo() {
  return (
    <div style={{ display: 'grid', gap: 12, background: '#0a111c', padding: 12 }}>
      <TopBarShell layout='wide-rail' title='OpenBridge bridge console' subtitle='Composed from extracted assets + semantic wrappers' notificationCount={5} pinnedApps />
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 320px) 1fr', gap: 12 }}>
        <NavigationRail mode='rail-labeled' behavior='flyout-expanded' caption='Shell navigation rail' />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))', gap: 12 }}>
          <CompassWidget variant='radial' advice='optimal' heading={187} target='Waypoint 192°' />
          <HeadingWidget variant='conning' heading={185.4} />
          <SpeedWidget variant='conning' speed={12.8} />
          <WindWidget mode='direction' priority='enhanced' value={17} unit='°' />
          <RudderWidget priority='regular' styleMode='rudder' state='active' angle={12} />
          <MainEngineWidget priority='regular' styleMode='bar' state='active' value={78} unit='% MCR' />
          <ReadoutWidget size='regular' alignment='left' priority='enhanced' value={23.4} unit='m' />
        </div>
      </div>
    </div>
  );
}

export default BridgeConsoleDemo;
