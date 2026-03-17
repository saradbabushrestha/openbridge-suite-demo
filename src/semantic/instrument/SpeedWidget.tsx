import * as React from 'react';
import ConningSpeed from '../../../instrument/src/components/indicators/conning/conning-speed';
import SpeedRadialAdvice from '../../../instrument/src/components/building-blocks/speed/config-speed-radial-advice';
import SpeedRadialOptimal from '../../../instrument/src/components/building-blocks/speed/config-speed-radial-advice-optimal';
import SpeedRadialDanger from '../../../instrument/src/components/building-blocks/speed/config-speed-radial-advice-danger';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';

const map = {
  conning: { regular: ConningSpeed, optimal: ConningSpeed, danger: ConningSpeed },
  radial: { regular: SpeedRadialAdvice, optimal: SpeedRadialOptimal, danger: SpeedRadialDanger },
} as const;

export type SpeedWidgetProps = {
  variant?: 'conning' | 'radial';
  advice?: 'regular' | 'optimal' | 'danger';
  speed?: number | string;
  title?: string;
  secondary?: string;
};

export function SpeedWidget({ variant = 'conning', advice = 'regular', speed = 12.8, title = 'Speed', secondary = 'SOG / knots' }: SpeedWidgetProps) {
  const Asset = map[variant][advice];
  return (
    <OpenBridgeFrame title={title} subtitle={`${variant} · ${advice}`}>
      <div style={{ display: 'grid', placeItems: 'center', gap: 10 }}>
        <Asset responsive width='100%' title={title} />
        <MetricText value={speed} unit='kn' secondary={secondary} />
      </div>
    </OpenBridgeFrame>
  );
}

export default SpeedWidget;
