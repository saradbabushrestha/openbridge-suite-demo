import * as React from 'react';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';

export type AdvicePanelProps = { title?: string; messages?: string[]; };
export function AdvicePanel({ title='Advice', messages=['Reduce speed in turn area', 'Prepare shallow-water response'] }: AdvicePanelProps) { return <OpenBridgeFrame title={title} subtitle='semantic advice panel'><div style={{display:'grid',gap:10}}><OpenBridgeCanonicalAsset asset='shell/finals/messaging/advice/advice-menu' responsive width='100%' title={title} /><ul style={{margin:0,paddingLeft:18,color:'#d9dee7'}}>{messages.map((msg, idx) => <li key={idx} style={{margin:'2px 0'}}>{msg}</li>)}</ul></div></OpenBridgeFrame>; }
export default AdvicePanel;
