import * as React from 'react';
import ConningCompass from '../../../instrument/src/components/indicators/conning/conning-compass';
import RadialAdvice from '../../../instrument/src/components/building-blocks/compass/config-compass-radial-advice';
import RadialOptimal from '../../../instrument/src/components/building-blocks/compass/config-compass-radial-advice-optimal';
import RadialDanger from '../../../instrument/src/components/building-blocks/compass/config-compass-radial-advice-danger';
import ArcAdvice from '../../../instrument/src/components/building-blocks/compass/config-compass-arc-advice';
import ArcOptimal from '../../../instrument/src/components/building-blocks/compass/config-compass-arc-advice-optimal';
import ArcDanger from '../../../instrument/src/components/building-blocks/compass/config-compass-arc-advice-danger';
import LinearAdvice from '../../../instrument/src/components/building-blocks/compass/config-compass-linear-advice';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';

const map = {
  conning: { regular: ConningCompass, optimal: ConningCompass, danger: ConningCompass },
  radial: { regular: RadialAdvice, optimal: RadialOptimal, danger: RadialDanger },
  arc: { regular: ArcAdvice, optimal: ArcOptimal, danger: ArcDanger },
  linear: { regular: LinearAdvice, optimal: LinearAdvice, danger: LinearAdvice },
} as const;

export type CompassWidgetProps = {
  variant?: 'conning' | 'radial' | 'arc' | 'linear';
  advice?: 'regular' | 'optimal' | 'danger';
  heading?: number | string;
  target?: string;
  title?: string;
};

export function CompassWidget({ variant = 'conning', advice = 'regular', heading = 187, target = 'Target 192°', title = 'Compass' }: CompassWidgetProps) {
  const Asset = map[variant][advice];
  return (
    <OpenBridgeFrame title={title} subtitle={`${variant} · ${advice}`} footer={target}>
      <div style={{ display: 'grid', placeItems: 'center', gap: 10 }}>
        <Asset responsive width='100%' title={title} />
        <MetricText value={heading} unit='°' secondary='Heading reference' />
      </div>
    </OpenBridgeFrame>
  );
}

export default CompassWidget;
