import * as React from 'react';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';

export type CurrentWidgetProps = { variant?: 'direction' | 'vessel'; priority?: 'regular' | 'enhanced'; title?: string; speed?: number | string; unit?: string; };
const assetMap = { direction: { regular: 'environment/finals/conditions/wind/current/type-direction-priority-regular', enhanced: 'environment/finals/conditions/wind/current/type-direction-priority-enhanced' }, vessel: { regular: 'environment/finals/conditions/wind/current/type-vessel-priority-regular', enhanced: 'environment/finals/conditions/wind/current/type-vessel-priority-enhanced' } } as const;
export function CurrentWidget({ variant='direction', priority='regular', title='Current', speed=1.3, unit='kt' }: CurrentWidgetProps) { return <OpenBridgeFrame title={title} subtitle={`${variant} · ${priority}`}><div style={{display:'grid',gap:10,placeItems:'center'}}><OpenBridgeCanonicalAsset asset={assetMap[variant][priority]} responsive width='100%' title={title} /><MetricText value={speed} unit={unit} secondary='Set and drift' /></div></OpenBridgeFrame>; }
export default CurrentWidget;
