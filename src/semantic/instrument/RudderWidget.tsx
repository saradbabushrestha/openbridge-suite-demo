import * as React from 'react';
import RudderRegularActive from '../../../instrument/src/components/propulsion/rudder/priority-regular-style-rudder-state-active';
import RudderRegularInput from '../../../instrument/src/components/propulsion/rudder/priority-regular-style-rudder-state-input';
import RudderRegularReady from '../../../instrument/src/components/propulsion/rudder/priority-regular-style-rudder-state-ready';
import RudderRegularLoading from '../../../instrument/src/components/propulsion/rudder/priority-regular-style-rudder-state-loading';
import RudderRegularOff from '../../../instrument/src/components/propulsion/rudder/priority-regular-style-rudder-state-off';
import RudderCommandActive from '../../../instrument/src/components/propulsion/rudder/priority-in-command-style-rudder-state-active';
import RudderCommandInput from '../../../instrument/src/components/propulsion/rudder/priority-in-command-style-rudder-state-input';
import RudderCommandReady from '../../../instrument/src/components/propulsion/rudder/priority-in-command-style-rudder-state-ready';
import RudderCommandLoading from '../../../instrument/src/components/propulsion/rudder/priority-in-command-style-rudder-state-loading';
import RudderCommandOff from '../../../instrument/src/components/propulsion/rudder/priority-in-command-style-rudder-state-off';
import BarRegularActive from '../../../instrument/src/components/propulsion/rudder/priority-regular-style-bar-state-active';
import BarRegularInput from '../../../instrument/src/components/propulsion/rudder/priority-regular-style-bar-state-input';
import BarRegularReady from '../../../instrument/src/components/propulsion/rudder/priority-regular-style-bar-state-ready';
import BarRegularLoading from '../../../instrument/src/components/propulsion/rudder/priority-regular-style-bar-state-loading';
import BarRegularOff from '../../../instrument/src/components/propulsion/rudder/priority-regular-style-bar-state-off';
import BarCommandActive from '../../../instrument/src/components/propulsion/rudder/priority-in-command-style-bar-state-active';
import BarCommandInput from '../../../instrument/src/components/propulsion/rudder/priority-in-command-style-bar-state-input';
import BarCommandReady from '../../../instrument/src/components/propulsion/rudder/priority-in-command-style-bar-state-ready';
import BarCommandLoading from '../../../instrument/src/components/propulsion/rudder/priority-in-command-style-bar-state-loading';
import BarCommandOff from '../../../instrument/src/components/propulsion/rudder/priority-in-command-style-bar-state-off';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';

const map = {
  regular: {
    rudder: { active: RudderRegularActive, input: RudderRegularInput, ready: RudderRegularReady, loading: RudderRegularLoading, off: RudderRegularOff },
    bar: { active: BarRegularActive, input: BarRegularInput, ready: BarRegularReady, loading: BarRegularLoading, off: BarRegularOff },
  },
  'in-command': {
    rudder: { active: RudderCommandActive, input: RudderCommandInput, ready: RudderCommandReady, loading: RudderCommandLoading, off: RudderCommandOff },
    bar: { active: BarCommandActive, input: BarCommandInput, ready: BarCommandReady, loading: BarCommandLoading, off: BarCommandOff },
  },
} as const;

export type RudderWidgetProps = {
  priority?: 'regular' | 'in-command';
  styleMode?: 'rudder' | 'bar';
  state?: 'active' | 'input' | 'ready' | 'loading' | 'off';
  angle?: number | string;
  title?: string;
};

export function RudderWidget({ priority = 'regular', styleMode = 'rudder', state = 'active', angle = 12, title = 'Rudder' }: RudderWidgetProps) {
  const Asset = map[priority][styleMode][state];
  return (
    <OpenBridgeFrame title={title} subtitle={`${priority} · ${styleMode} · ${state}`}>
      <div style={{ display: 'grid', placeItems: 'center', gap: 10 }}>
        <Asset responsive width='100%' title={title} />
        <MetricText value={angle} unit='°' secondary='Commanded angle' />
      </div>
    </OpenBridgeFrame>
  );
}

export default RudderWidget;
