import * as React from 'react';
import { cn } from '../../lib/cn';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';

export type AlertStackItem = { kind?: 'notification' | 'advice'; title: string; detail?: string; severity?: 'normal' | 'warning' | 'critical'; };
export type AlertStackProps = { items: AlertStackItem[]; className?: string; };
const menuAsset = { notification: 'shell/finals/messaging/notification/notification-menu', advice: 'shell/finals/messaging/advice/advice-menu' } as const;
export function AlertStack({ items, className }: AlertStackProps) { const kind = items[0]?.kind ?? 'notification'; return <section className={cn('ob-alert-stack', className)} style={{display:'grid',gap:12}}><OpenBridgeCanonicalAsset asset={menuAsset[kind]} responsive width='100%' title='Alert stack' /><div style={{display:'grid',gap:8}}>{items.map((item, idx) => <article key={idx} style={{border:'1px solid #364053', borderRadius:8, padding:10, background:'#111722', color:'#f7f7f7'}}><div style={{fontSize:13,fontWeight:700}}>{item.title}</div>{item.detail ? <div style={{fontSize:12,color:'#9aa8bf',marginTop:4}}>{item.detail}</div> : null}</article>)}</div></section>; }
export default AlertStack;
