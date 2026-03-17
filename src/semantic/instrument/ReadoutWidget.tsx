import * as React from 'react';
import StackRegularLeft from '../../../instrument/src/components/readout/readout-stack/size-regular-alignment-left-priority-regular';
import StackRegularCenter from '../../../instrument/src/components/readout/readout-stack/size-regular-alignment-center-priority-regular';
import StackRegularVertical from '../../../instrument/src/components/readout/readout-stack/size-regular-alignment-vertical-priority-regular';
import StackRegularEnhanced from '../../../instrument/src/components/readout/readout-stack/size-regular-alignment-left-priority-enhanced';
import StackMediumEnhanced from '../../../instrument/src/components/readout/readout-stack/size-medium-alignment-left-priority-enhanced';
import StackLargeEnhanced from '../../../instrument/src/components/readout/readout-stack/size-large-alignment-left-priority-enhanced';
import StackRegularInput from '../../../instrument/src/components/readout/readout-stack/size-regular-alignment-left-priority-input';
import StackRegularInvalid from '../../../instrument/src/components/readout/readout-stack/size-regular-alignment-left-priority-invalid';
import StackRegularLowIntegrity from '../../../instrument/src/components/readout/readout-stack/size-regular-alignment-left-priority-low-integrity';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';

const map = {
  regular: { left: StackRegularLeft, center: StackRegularCenter, vertical: StackRegularVertical, enhanced: StackRegularEnhanced, input: StackRegularInput, invalid: StackRegularInvalid, 'low-integrity': StackRegularLowIntegrity },
  medium: { enhanced: StackMediumEnhanced },
  large: { enhanced: StackLargeEnhanced },
} as const;

export type ReadoutWidgetProps = {
  size?: 'regular' | 'medium' | 'large';
  alignment?: 'left' | 'center' | 'vertical';
  priority?: 'regular' | 'enhanced' | 'input' | 'invalid' | 'low-integrity';
  value?: number | string;
  unit?: string;
  title?: string;
  secondary?: string;
};

export function ReadoutWidget({ size = 'regular', alignment = 'left', priority = 'enhanced', value = 23.4, unit = 'm', title = 'Readout', secondary = 'Reusable readout stack' }: ReadoutWidgetProps) {
  const sizeMap: any = map[size];
  const Asset = size === 'regular' && priority === 'regular' ? sizeMap[alignment] : sizeMap[priority] ?? StackRegularEnhanced;
  return (
    <OpenBridgeFrame title={title} subtitle={`${size} · ${alignment} · ${priority}`}>
      <div style={{ display: 'grid', placeItems: 'center', gap: 10 }}>
        <Asset responsive width='100%' title={title} />
        <MetricText value={value} unit={unit} secondary={secondary} align={alignment === 'center' ? 'center' : 'left'} />
      </div>
    </OpenBridgeFrame>
  );
}

export default ReadoutWidget;
