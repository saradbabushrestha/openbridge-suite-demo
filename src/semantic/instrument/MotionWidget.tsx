import * as React from 'react';
import SurgeSwayYaw from '../../../instrument/src/components/motion/motion-control/surge-sway-yaw';
import DraftTrim from '../../../instrument/src/components/motion/motion-control/draft-trim';
import Slamming from '../../../instrument/src/components/motion/forces/slamming';
import Vibrations from '../../../instrument/src/components/motion/forces/vibrations';
import Heave from '../../../instrument/src/components/motion/6-dof/heave';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';

const map = {
  'surge-sway-yaw': SurgeSwayYaw,
  'draft-trim': DraftTrim,
  slamming: Slamming,
  vibrations: Vibrations,
  heave: Heave,
} as const;

export type MotionWidgetProps = {
  mode?: keyof typeof map;
  value?: number | string;
  unit?: string;
  title?: string;
};

export function MotionWidget({ mode = 'heave', value = 0.7, unit = 'm', title = 'Motion' }: MotionWidgetProps) {
  const Asset = map[mode];
  return (
    <OpenBridgeFrame title={title} subtitle={mode}>
      <div style={{ display: 'grid', placeItems: 'center', gap: 10 }}>
        <Asset responsive width='100%' title={title} />
        <MetricText value={value} unit={unit} secondary='Observed motion' />
      </div>
    </OpenBridgeFrame>
  );
}

export default MotionWidget;
