import * as React from 'react';
import HistogramRegular from '../../../instrument/src/components/environment/wind/type-histogram-priority-regular';
import HistogramEnhanced from '../../../instrument/src/components/environment/wind/type-histogram-priority-enhanced';
import DirectionRegular from '../../../instrument/src/components/environment/wind/type-wind-direction-priority-regular';
import DirectionEnhanced from '../../../instrument/src/components/environment/wind/type-wind-direction-priority-enhanced';
import ForceRegular from '../../../instrument/src/components/environment/wind/type-wind-force-priority-regular';
import ForceEnhanced from '../../../instrument/src/components/environment/wind/type-wind-force-priority-enhanced';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';

const map = {
  histogram: { regular: HistogramRegular, enhanced: HistogramEnhanced },
  direction: { regular: DirectionRegular, enhanced: DirectionEnhanced },
  force: { regular: ForceRegular, enhanced: ForceEnhanced },
} as const;

export type WindWidgetProps = {
  mode?: 'histogram' | 'direction' | 'force';
  priority?: 'regular' | 'enhanced';
  value?: number | string;
  unit?: string;
  title?: string;
  secondary?: string;
};

export function WindWidget({ mode = 'direction', priority = 'enhanced', value = 17, unit = mode === 'direction' ? '°' : 'kn', title = 'Wind', secondary = 'Relative wind' }: WindWidgetProps) {
  const Asset = map[mode][priority];
  return (
    <OpenBridgeFrame title={title} subtitle={`${mode} · ${priority}`}>
      <div style={{ display: 'grid', placeItems: 'center', gap: 10 }}>
        <Asset responsive width='100%' title={title} />
        <MetricText value={value} unit={unit} secondary={secondary} />
      </div>
    </OpenBridgeFrame>
  );
}

export default WindWidget;
