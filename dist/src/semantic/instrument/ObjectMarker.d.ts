export type ObjectMarkerProps = {
    family?: 'air' | 'underwater' | 'rov';
    size?: 'small' | 'medium';
    view?: 'top' | 'front' | 'stbd-side';
    title?: string;
    label?: string;
};
export declare function ObjectMarker({ family, size, view, title, label }: ObjectMarkerProps): any;
export default ObjectMarker;
