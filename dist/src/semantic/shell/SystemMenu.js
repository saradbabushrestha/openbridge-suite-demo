import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import MenuRegular from '../../../shell/src/components/top-bar/system/system-menu/type-menu-regular';
import MenuCondensed from '../../../shell/src/components/top-bar/system/system-menu/type-menu-condensed';
import WifiOn from '../../../shell/src/components/top-bar/system/system-menu/type-wi-fi-on';
import WifiOff from '../../../shell/src/components/top-bar/system/system-menu/type-wi-fi-off';
import AudioOn from '../../../shell/src/components/top-bar/system/system-menu/type-audio-on';
import AudioOff from '../../../shell/src/components/top-bar/system/system-menu/type-audio-off';
import MicOn from '../../../shell/src/components/top-bar/system/system-menu/type-microphone-on';
import MicOff from '../../../shell/src/components/top-bar/system/system-menu/type-microphone-off';
import Battery from '../../../shell/src/components/top-bar/system/system-menu/type-battery';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
export function SystemMenu({ condensed = false, wifi = true, audio = true, microphone = true, title = 'System menu' }) {
    const Menu = condensed ? MenuCondensed : MenuRegular;
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: condensed ? 'condensed' : 'regular', rightAdornment: _jsxs("div", { style: { display: 'flex', gap: 8 }, children: [React.createElement(wifi ? WifiOn : WifiOff, { size: 24 }), React.createElement(audio ? AudioOn : AudioOff, { size: 24 }), React.createElement(microphone ? MicOn : MicOff, { size: 24 }), React.createElement(Battery, { size: 24 })] }), children: _jsx(Menu, { responsive: true, width: '100%', title: title }) }));
}
export default SystemMenu;
