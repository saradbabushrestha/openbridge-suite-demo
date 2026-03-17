import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CompassWidget } from '../instrument/CompassWidget';
import { HeadingWidget } from '../instrument/HeadingWidget';
import { SpeedWidget } from '../instrument/SpeedWidget';
import { WindWidget } from '../instrument/WindWidget';
import { RudderWidget } from '../instrument/RudderWidget';
import { ThrusterWidget } from '../instrument/ThrusterWidget';
import { MainEngineWidget } from '../instrument/MainEngineWidget';
import { ReadoutWidget } from '../instrument/ReadoutWidget';
import { MotionWidget } from '../instrument/MotionWidget';
import { OpenBridgeGrid } from '../layout/OpenBridgeGrid';
export function BridgeInstrumentDemo() {
    return (_jsxs(OpenBridgeGrid, { minColumn: 250, children: [_jsx(CompassWidget, { variant: 'radial', advice: 'optimal', heading: 187, target: 'Waypoint 192\u00B0' }), _jsx(HeadingWidget, { variant: 'conning', advice: 'regular', heading: 185.4 }), _jsx(SpeedWidget, { variant: 'conning', advice: 'regular', speed: 12.8 }), _jsx(WindWidget, { mode: 'direction', priority: 'enhanced', value: 17, unit: '\u00B0' }), _jsx(RudderWidget, { priority: 'regular', styleMode: 'rudder', state: 'active', angle: 12 }), _jsx(ThrusterWidget, { priority: 'in-command', styleMode: 'bar', state: 'active', thrust: 64 }), _jsx(MainEngineWidget, { priority: 'regular', styleMode: 'bar', state: 'active', value: 78, unit: '% MCR' }), _jsx(ReadoutWidget, { size: 'regular', alignment: 'left', priority: 'enhanced', value: 23.4, unit: 'm' }), _jsx(MotionWidget, { mode: 'heave', value: 0.7, unit: 'm' })] }));
}
export default BridgeInstrumentDemo;
