import * as React from 'react';
import BarPowerRegularActive from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-regular-state-active';
import BarPowerRegularInput from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-regular-state-input';
import BarPowerRegularReady from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-regular-state-ready';
import BarPowerRegularLoading from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-regular-state-loading';
import BarPowerRegularOff from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-regular-state-off';
import BarPowerCommandActive from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-active';
import BarPowerCommandInput from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-input';
import BarPowerCommandReady from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-ready';
import BarPowerCommandLoading from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-loading';
import BarPowerCommandOff from '../../../instrument/src/components/propulsion/main-engine/style-bar-type-power-priority-in-command-state-off';
import PropPitchRegularActive from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-active';
import PropPitchRegularInput from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-input';
import PropPitchRegularReady from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-ready';
import PropPitchRegularLoading from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-loading';
import PropPitchRegularOff from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-regular-state-off';
import PropPitchCommandActive from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-active';
import PropPitchCommandInput from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-input';
import PropPitchCommandReady from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-ready';
import PropPitchCommandLoading from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-loading';
import PropPitchCommandOff from '../../../instrument/src/components/propulsion/main-engine/style-propellar-type-pitch-rpm-priority-in-command-state-off';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';

const map = {
  regular: {
    bar: { active: BarPowerRegularActive, input: BarPowerRegularInput, ready: BarPowerRegularReady, loading: BarPowerRegularLoading, off: BarPowerRegularOff },
    propellar: { active: PropPitchRegularActive, input: PropPitchRegularInput, ready: PropPitchRegularReady, loading: PropPitchRegularLoading, off: PropPitchRegularOff },
  },
  'in-command': {
    bar: { active: BarPowerCommandActive, input: BarPowerCommandInput, ready: BarPowerCommandReady, loading: BarPowerCommandLoading, off: BarPowerCommandOff },
    propellar: { active: PropPitchCommandActive, input: PropPitchCommandInput, ready: PropPitchCommandReady, loading: PropPitchCommandLoading, off: PropPitchCommandOff },
  },
} as const;

export type MainEngineWidgetProps = {
  priority?: 'regular' | 'in-command';
  styleMode?: 'bar' | 'propellar';
  state?: 'active' | 'input' | 'ready' | 'loading' | 'off';
  value?: number | string;
  unit?: string;
  title?: string;
};

export function MainEngineWidget({ priority = 'regular', styleMode = 'bar', state = 'active', value = 78, unit = '% MCR', title = 'Main engine' }: MainEngineWidgetProps) {
  const Asset = map[priority][styleMode][state];
  return (
    <OpenBridgeFrame title={title} subtitle={`${priority} · ${styleMode} · ${state}`}>
      <div style={{ display: 'grid', placeItems: 'center', gap: 10 }}>
        <Asset responsive width='100%' title={title} />
        <MetricText value={value} unit={unit} secondary={styleMode === 'bar' ? 'Power' : 'Pitch / RPM'} />
      </div>
    </OpenBridgeFrame>
  );
}

export default MainEngineWidget;
