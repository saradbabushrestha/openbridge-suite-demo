import * as React from 'react';
import BarRegularActive from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-regular-style-bar-state-active';
import BarRegularInput from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-regular-style-bar-state-input';
import BarRegularReady from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-regular-style-bar-state-ready';
import BarRegularLoading from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-regular-style-bar-state-loading';
import BarRegularOff from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-regular-style-bar-state-off';
import BarCommandActive from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-in-command-style-bar-state-active';
import BarCommandInput from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-in-command-style-bar-state-input';
import BarCommandReady from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-in-command-style-bar-state-ready';
import BarCommandLoading from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-in-command-style-bar-state-loading';
import BarCommandOff from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-in-command-style-bar-state-off';
import PropRegularActive from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-regular-style-propellar-state-active';
import PropRegularInput from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-regular-style-propellar-state-input';
import PropRegularReady from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-regular-style-propellar-state-ready';
import PropRegularLoading from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-regular-style-propellar-state-loading';
import PropRegularOff from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-regular-style-propellar-state-off';
import PropCommandActive from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-in-command-style-propellar-state-active';
import PropCommandInput from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-in-command-style-propellar-state-input';
import PropCommandReady from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-in-command-style-propellar-state-ready';
import PropCommandLoading from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-in-command-style-propellar-state-loading';
import PropCommandOff from '../../../instrument/src/components/propulsion/tunnel-thruster/priority-in-command-style-propellar-state-off';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';

const map = {
  regular: {
    bar: { active: BarRegularActive, input: BarRegularInput, ready: BarRegularReady, loading: BarRegularLoading, off: BarRegularOff },
    propellar: { active: PropRegularActive, input: PropRegularInput, ready: PropRegularReady, loading: PropRegularLoading, off: PropRegularOff },
  },
  'in-command': {
    bar: { active: BarCommandActive, input: BarCommandInput, ready: BarCommandReady, loading: BarCommandLoading, off: BarCommandOff },
    propellar: { active: PropCommandActive, input: PropCommandInput, ready: PropCommandReady, loading: PropCommandLoading, off: PropCommandOff },
  },
} as const;

export type ThrusterWidgetProps = {
  priority?: 'regular' | 'in-command';
  styleMode?: 'bar' | 'propellar';
  state?: 'active' | 'input' | 'ready' | 'loading' | 'off';
  thrust?: number | string;
  title?: string;
};

export function ThrusterWidget({ priority = 'regular', styleMode = 'bar', state = 'active', thrust = 64, title = 'Tunnel thruster' }: ThrusterWidgetProps) {
  const Asset = map[priority][styleMode][state];
  return (
    <OpenBridgeFrame title={title} subtitle={`${priority} · ${styleMode} · ${state}`}>
      <div style={{ display: 'grid', placeItems: 'center', gap: 10 }}>
        <Asset responsive width='100%' title={title} />
        <MetricText value={thrust} unit='%' secondary='Applied thrust' />
      </div>
    </OpenBridgeFrame>
  );
}

export default ThrusterWidget;
