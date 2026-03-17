import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';

export type IconBadgeProps = { icon: string; label?: string; size?: number | string; };
export function IconBadge({ icon, label, size=24 }: IconBadgeProps) { const asset = icon.startsWith('icons/') ? icon : `icons/${icon}`; return <span style={{display:'inline-flex',alignItems:'center',gap:8,color:'#d9dee7'}}><OpenBridgeCanonicalAsset asset={asset as any} size={size} title={label || asset} />{label ? <span>{label}</span> : null}</span>; }
export default IconBadge;
