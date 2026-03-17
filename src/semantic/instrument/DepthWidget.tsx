import * as React from 'react';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { MetricText } from '../layout/MetricText';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';

export type DepthWidgetProps = { variant?: 'regular' | 'shallow' | 'deep' | 'prediction' | 'scanned'; title?: string; depth?: number | string; unit?: string; };

const assetMap = { regular: 'navigation/finals/conning/depth/depth-actual/type-regular-style-regular', shallow: 'navigation/finals/conning/depth/depth-actual/type-shallow-style-regular', deep: 'navigation/finals/conning/depth/depth-actual/type-deep-style-enhanced', prediction: 'navigation/finals/conning/depth/style-vessel-scale-depth-type-prediction', scanned: 'navigation/finals/conning/depth/style-vessel-scale-depth-type-scanned' } as const;

export function DepthWidget({ variant='regular', title='Depth', depth=12.4, unit='m' }: DepthWidgetProps) { return <OpenBridgeFrame title={title} subtitle={variant}><div style={{display:'grid',gap:10,placeItems:'center'}}><OpenBridgeCanonicalAsset asset={assetMap[variant]} responsive width='100%' title={title} /><MetricText value={depth} unit={unit} secondary='Under keel reference' /></div></OpenBridgeFrame>; }
export default DepthWidget;
