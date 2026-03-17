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

export type SystemMenuProps = {
  condensed?: boolean;
  wifi?: boolean;
  audio?: boolean;
  microphone?: boolean;
  title?: string;
};

export function SystemMenu({ condensed = false, wifi = true, audio = true, microphone = true, title = 'System menu' }: SystemMenuProps) {
  const Menu = condensed ? MenuCondensed : MenuRegular;
  return (
    <OpenBridgeFrame title={title} subtitle={condensed ? 'condensed' : 'regular'} rightAdornment={<div style={{ display: 'flex', gap: 8 }}>{React.createElement(wifi ? WifiOn : WifiOff, { size: 24 })}{React.createElement(audio ? AudioOn : AudioOff, { size: 24 })}{React.createElement(microphone ? MicOn : MicOff, { size: 24 })}{React.createElement(Battery, { size: 24 })}</div>}>
      <Menu responsive width='100%' title={title} />
    </OpenBridgeFrame>
  );
}

export default SystemMenu;
