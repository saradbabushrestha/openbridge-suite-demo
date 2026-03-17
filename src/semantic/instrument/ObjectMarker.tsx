import * as React from 'react';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';

export type ObjectMarkerProps = { family?: 'air' | 'underwater' | 'rov'; size?: 'small' | 'medium'; view?: 'top' | 'front' | 'stbd-side'; title?: string; label?: string; };
const assetMap = {
  air: {
    small: { top: 'objects/finals/vehicles/air-drones/air-drone/type-small-view-top', front: 'objects/finals/vehicles/air-drones/air-drone/type-small-view-front', 'stbd-side': 'objects/finals/vehicles/air-drones/air-drone/type-small-view-stbd-side' },
    medium: { top: 'objects/finals/vehicles/air-drones/air-drone/type-medium-view-top', front: 'objects/finals/vehicles/air-drones/air-drone/type-medium-view-front', 'stbd-side': 'objects/finals/vehicles/air-drones/air-drone/type-medium-view-stbd-side' }
  },
  underwater: {
    small: { top: 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-top-ccrp-false', front: 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-fore-ccrp-false', 'stbd-side': 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-side-ccrp-false' },
    medium: { top: 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-top-ccrp-false', front: 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-fore-ccrp-false', 'stbd-side': 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-side-ccrp-false' }
  },
  rov: {
    small: { top: 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-top-ccrp-false', front: 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-fore-ccrp-false', 'stbd-side': 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-side-ccrp-false' },
    medium: { top: 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-top-ccrp-false', front: 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-fore-ccrp-false', 'stbd-side': 'objects/finals/vehicles/underwater-drones/rov/type-rov-view-side-ccrp-false' }
  }
} as const;
export function ObjectMarker({ family='air', size='small', view='top', title='Object', label='Tracked object' }: ObjectMarkerProps) {
  return <OpenBridgeFrame title={title} subtitle={`${family} · ${size} · ${view}`} footer={label}><div style={{display:'grid',gap:10,placeItems:'center'}}><OpenBridgeCanonicalAsset asset={assetMap[family][size][view]} responsive width='100%' title={title} /></div></OpenBridgeFrame>;
}
export default ObjectMarker;
