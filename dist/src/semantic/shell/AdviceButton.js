import { jsx as _jsx } from "react/jsx-runtime";
import FlatEnabledOff from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-flat-state-enabled-is-active-false';
import FlatEnabledOn from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-flat-state-enabled-is-active-true';
import FlatHoverOff from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-flat-state-hover-is-active-false';
import FlatHoverOn from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-flat-state-hover-is-active-true';
import FlatActiveOff from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-flat-state-active-is-active-false';
import FlatActiveOn from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-flat-state-active-is-active-true';
import FlatFocusedOff from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-flat-state-focused-is-active-false';
import FlatFocusedOn from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-flat-state-focused-is-active-true';
import NormalEnabled from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-normal-state-enabled-is-active-true';
import NormalHover from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-normal-state-hover-is-active-true';
import NormalActive from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-normal-state-active-is-active-true';
import NormalFocused from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-normal-state-focused-is-active-true';
import EnhancedEnabled from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-enhanced-state-enabled-is-active-true';
import EnhancedHover from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-enhanced-state-hover-is-active-true';
import EnhancedActive from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-enhanced-state-active-is-active-true';
import EnhancedFocused from '../../../shell/src/components/notification-and-advice/advice/advice-button/type-enhanced-state-focused-is-active-true';
import { cn } from '../../lib/cn';
const flatMap = {
    enabled: { false: FlatEnabledOff, true: FlatEnabledOn },
    hover: { false: FlatHoverOff, true: FlatHoverOn },
    active: { false: FlatActiveOff, true: FlatActiveOn },
    focused: { false: FlatFocusedOff, true: FlatFocusedOn },
};
const normalMap = { enabled: NormalEnabled, hover: NormalHover, active: NormalActive, focused: NormalFocused };
const enhancedMap = { enabled: EnhancedEnabled, hover: EnhancedHover, active: EnhancedActive, focused: EnhancedFocused };
export function AdviceButton({ variant = 'flat', state = 'enabled', active = false, title = 'Advice', size = 48, className, onClick }) {
    const Asset = variant === 'flat' ? flatMap[state][String(active)] : variant === 'normal' ? normalMap[state] : enhancedMap[state];
    return (_jsx("button", { type: 'button', "aria-label": title, title: title, onClick: onClick, className: cn('ob-advice-button', className), style: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }, children: _jsx(Asset, { size: size, title: title }) }));
}
export default AdviceButton;
