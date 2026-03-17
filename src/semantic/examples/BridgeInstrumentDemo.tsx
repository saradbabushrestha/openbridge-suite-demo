import * as React from 'react';
import { CompassWidget } from '../instrument/CompassWidget';
import { HeadingWidget } from '../instrument/HeadingWidget';
import { SpeedWidget } from '../instrument/SpeedWidget';
import { WindWidget } from '../instrument/WindWidget';
import { RudderWidget } from '../instrument/RudderWidget';
import { ThrusterWidget } from '../instrument/ThrusterWidget';
import { MainEngineWidget } from '../instrument/MainEngineWidget';
import { ReadoutWidget } from '../instrument/ReadoutWidget';
import { MotionWidget } from '../instrument/MotionWidget';
import { OpenBridgeGrid } from '../layout/OpenBridgeGrid';

export function BridgeInstrumentDemo() {
  return (
    <OpenBridgeGrid minColumn={250}>
      <CompassWidget variant='radial' advice='optimal' heading={187} target='Waypoint 192°' />
      <HeadingWidget variant='conning' advice='regular' heading={185.4} />
      <SpeedWidget variant='conning' advice='regular' speed={12.8} />
      <WindWidget mode='direction' priority='enhanced' value={17} unit='°' />
      <RudderWidget priority='regular' styleMode='rudder' state='active' angle={12} />
      <ThrusterWidget priority='in-command' styleMode='bar' state='active' thrust={64} />
      <MainEngineWidget priority='regular' styleMode='bar' state='active' value={78} unit='% MCR' />
      <ReadoutWidget size='regular' alignment='left' priority='enhanced' value={23.4} unit='m' />
      <MotionWidget mode='heave' value={0.7} unit='m' />
    </OpenBridgeGrid>
  );
}

export default BridgeInstrumentDemo;
