import * as React from 'react';
import ConningHeading from '../../../instrument/src/components/indicators/conning/conning-heading';
import RadialAdvice from '../../../instrument/src/components/building-blocks/heading/config-heading-radial-advice';
import RadialOptimal from '../../../instrument/src/components/building-blocks/heading/config-heading-radial-advice-optimal';
import RadialDanger from '../../../instrument/src/components/building-blocks/heading/config-heading-radial-advice-danger';
import ArcAdvice from '../../../instrument/src/components/building-blocks/heading/config-heading-arc-advice';
import ArcOptimal from '../../../instrument/src/components/building-blocks/heading/config-heading-arc-advice-optimal';
import ArcDanger from '../../../instrument/src/components/building-blocks/heading/config-heading-arc-advice-danger';
import LinearAdvice from '../../../instrument/src/components/building-blocks/heading/config-heading-linear-advice';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';

const map = {
  conning: { regular: ConningHeading, optimal: ConningHeading, danger: ConningHeading },
  radial: { regular: RadialAdvice, optimal: RadialOptimal, danger: RadialDanger },
  arc: { regular: ArcAdvice, optimal: ArcOptimal, danger: ArcDanger },
  linear: { regular: LinearAdvice, optimal: LinearAdvice, danger: LinearAdvice },
} as const;

export type HeadingWidgetProps = {
  variant?: 'conning' | 'radial' | 'arc' | 'linear';
  advice?: 'regular' | 'optimal' | 'danger';
  heading?: number | string;
  target?: string;
  title?: string;
};

export function HeadingWidget({ variant = 'conning', advice = 'regular', heading = 185.4, target = 'Setpoint 190°', title = 'Heading' }: HeadingWidgetProps) {
  const Asset = map[variant][advice];
  return (
    <OpenBridgeFrame title={title} subtitle={`${variant} · ${advice}`} footer={target}>
      <div style={{ display: 'grid', placeItems: 'center', gap: 10 }}>
        <Asset responsive width='100%' title={title} />
        <MetricText value={heading} unit='°' secondary='Gyro / true' />
      </div>
    </OpenBridgeFrame>
  );
}

export default HeadingWidget;
