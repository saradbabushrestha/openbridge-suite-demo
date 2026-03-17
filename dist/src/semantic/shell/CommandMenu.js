import { jsx as _jsx } from "react/jsx-runtime";
import DefaultCommand from '../../../shell/src/components/top-bar/command-menu/command-menu-beta/type-default';
import OtherPlace from '../../../shell/src/components/top-bar/command-menu/command-menu-beta/type-command-other-place';
import PropulsionCommand from '../../../shell/src/components/top-bar/command-menu/command-menu-beta/type-propulsion-command';
import AutomationCommand from '../../../shell/src/components/top-bar/command-menu/command-menu-beta/type-automation-command';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
const map = {
    default: DefaultCommand,
    'command-other-place': OtherPlace,
    'propulsion-command': PropulsionCommand,
    'automation-command': AutomationCommand,
};
export function CommandMenu({ variant = 'default', title = 'Command menu', footer }) {
    const Asset = map[variant];
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: variant, footer: footer, children: _jsx(Asset, { responsive: true, width: '100%', title: title }) }));
}
export default CommandMenu;
