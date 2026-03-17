import { jsx as _jsx } from "react/jsx-runtime";
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';
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
};
export function ObjectMarker({ family = 'air', size = 'small', view = 'top', title = 'Object', label = 'Tracked object' }) {
    return _jsx(OpenBridgeFrame, { title: title, subtitle: `${family} · ${size} · ${view}`, footer: label, children: _jsx("div", { style: { display: 'grid', gap: 10, placeItems: 'center' }, children: _jsx(OpenBridgeCanonicalAsset, { asset: assetMap[family][size][view], responsive: true, width: '100%', title: title }) }) });
}
export default ObjectMarker;
