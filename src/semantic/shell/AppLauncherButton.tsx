import * as React from 'react';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';
import { cn } from '../../lib/cn';

export type AppLauncherButtonProps = { pinned?: boolean; className?: string; title?: string; size?: number | string; onClick?: React.MouseEventHandler<HTMLButtonElement>; };
export function AppLauncherButton({ pinned=false, className, title='Applications', size=48, onClick }: AppLauncherButtonProps) { const asset = pinned ? 'shell/finals/topbar/app/app-button/type-pinned-apps' : 'shell/finals/topbar/app/app-button/type-regular'; return <button type='button' aria-label={title} title={title} onClick={onClick} className={cn('ob-app-launcher-button', className)} style={{display:'inline-flex',alignItems:'center',justifyContent:'center',background:'transparent',border:0,padding:0,cursor:'pointer'}}><OpenBridgeCanonicalAsset asset={asset} size={size} title={title} /></button>; }
export default AppLauncherButton;
