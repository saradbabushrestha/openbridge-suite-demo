import { jsx as _jsx } from "react/jsx-runtime";
import FullRegular from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-full-height-navigation-regular';
import FullTree from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-full-height-navigation-tree-navigation';
import CondensedTree from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-condenced-navigation-tree-navigation';
import FullFlyout from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-full-height-navigation-flyout';
import FullFlyoutExpanded from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-full-height-navigation-flyout-expanded';
import RailRegular from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-rail-navigation-regular';
import RailFlyout from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-rail-navigation-flyout';
import RailFlyoutExpanded from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-rail-navigation-flyout-expanded';
import RailLabeledRegular from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-rail-labeled-navigation-regular';
import RailLabeledFlyout from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-rail-labeled-navigation-flyout';
import RailLabeledFlyoutExpanded from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-rail-labeled-navigation-flyout-expanded';
import CondensedRegular from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-condenced-navigation-regular';
import CondensedFlyout from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-condenced-navigation-flyout';
import CondensedFlyoutExpanded from '../../../shell/src/components/main-navigation-elements/navigation-menu/type-condenced-navigation-flyout-expanded';
import { OpenBridgeFrame } from '../layout/OpenBridgeFrame';
const map = {
    full: { regular: FullRegular, 'tree-navigation': FullTree, flyout: FullFlyout, 'flyout-expanded': FullFlyoutExpanded },
    rail: { regular: RailRegular, flyout: RailFlyout, 'flyout-expanded': RailFlyoutExpanded },
    'rail-labeled': { regular: RailLabeledRegular, flyout: RailLabeledFlyout, 'flyout-expanded': RailLabeledFlyoutExpanded },
    condensed: { regular: CondensedRegular, 'tree-navigation': CondensedTree, flyout: CondensedFlyout, 'flyout-expanded': CondensedFlyoutExpanded },
};
export function NavigationRail({ mode = 'rail', behavior = 'regular', title = 'Navigation menu', size = '100%', caption }) {
    const variantMap = map[mode];
    const Asset = variantMap[behavior] ?? variantMap.regular;
    return (_jsx(OpenBridgeFrame, { title: title, subtitle: `${mode} · ${behavior}`, footer: caption, children: _jsx(Asset, { width: size, responsive: true, title: title }) }));
}
export default NavigationRail;
