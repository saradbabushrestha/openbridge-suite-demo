import * as React from 'react';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';

export type TurnRateWidgetProps = { variant?: 'linear' | 'radial' | 'sector'; style?: 'regular' | 'enhanced' | 'port-stbd'; title?: string; value?: number | string; unit?: string; };
const assetMap = { linear: { regular: 'navigation/finals/conning/rate-of-turn/rot-linear/type-bar-style-regular', enhanced: 'navigation/finals/conning/rate-of-turn/rot-linear/type-bar-style-enhaced', 'port-stbd': 'navigation/finals/conning/rate-of-turn/rot-linear/type-bar-style-port-stbd' }, radial: { regular: 'navigation/finals/conning/rate-of-turn/rot-radial/type-bar-style-regular', enhanced: 'navigation/finals/conning/rate-of-turn/rot-radial/type-bar-style-enhanced', 'port-stbd': 'navigation/finals/conning/rate-of-turn/rot-radial/type-bar-style-port-stbd' }, sector: { regular: 'navigation/finals/conning/rate-of-turn/rot-sector/style-regular-center-label-true', enhanced: 'navigation/finals/conning/rate-of-turn/rot-sector/style-enhanced-center-label-true', 'port-stbd': 'navigation/finals/conning/rate-of-turn/rot-sector/style-port-stbd-center-label-true' } } as const;
export function TurnRateWidget({ variant='sector', style='regular', title='Rate of Turn', value=2.4, unit='°/min' }: TurnRateWidgetProps) { return <OpenBridgeFrame title={title} subtitle={`${variant} · ${style}`}><div style={{display:'grid',gap:10,placeItems:'center'}}><OpenBridgeCanonicalAsset asset={assetMap[variant][style]} responsive width='100%' title={title} /><MetricText value={value} unit={unit} secondary='Turn rate' /></div></OpenBridgeFrame>; }
export default TurnRateWidget;
