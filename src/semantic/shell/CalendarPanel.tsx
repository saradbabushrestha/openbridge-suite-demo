import * as React from 'react';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
import { OpenBridgeCanonicalAsset } from '../../runtime/openbridgeCanonicalRegistry';

export type CalendarPanelProps = { title?: string; variant?: 'event' | 'date'; };
export function CalendarPanel({ title='Calendar', variant='event' }: CalendarPanelProps) { const asset = variant === 'event' ? 'shell/finals/topbar/building-block-calendar/event-item/state-enabled-type-single-line' : 'shell/finals/topbar/building-block-calendar/date-item/size-large-type-enhanced-state-enabled'; return <OpenBridgeFrame title={title} subtitle={variant}><OpenBridgeCanonicalAsset asset={asset} responsive width='100%' title={title} /></OpenBridgeFrame>; }
export default CalendarPanel;
