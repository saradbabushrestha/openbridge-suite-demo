import * as React from 'react';
import FlatEnabledOff from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-flat-state-enabled-is-active-false';
import FlatEnabledOn from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-flat-state-enabled-is-active-true';
import FlatHoverOff from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-flat-state-hover-is-active-false';
import FlatHoverOn from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-flat-state-hover-is-active-true';
import FlatActiveOff from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-flat-state-active-is-active-false';
import FlatActiveOn from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-flat-state-active-is-active-true';
import FlatFocusedOff from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-flat-state-focused-is-active-false';
import FlatFocusedOn from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-flat-state-focused-is-active-true';
import NormalEnabled from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-normal-state-enabled-is-active-true';
import NormalHover from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-normal-state-hover-is-active-true';
import NormalActive from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-normal-state-active-is-active-true';
import NormalFocused from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-normal-state-focused-is-active-true';
import EnhancedEnabled from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-enhanced-state-enabled-is-active-true';
import EnhancedHover from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-enhanced-state-hover-is-active-true';
import EnhancedActive from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-enhanced-state-active-is-active-true';
import EnhancedFocused from '../../../shell/src/components/notification-and-advice/notification/notification-button/type-enhanced-state-focused-is-active-true';
import { cn } from '../../lib/cn';

const flatMap = {
  enabled: { false: FlatEnabledOff, true: FlatEnabledOn },
  hover: { false: FlatHoverOff, true: FlatHoverOn },
  active: { false: FlatActiveOff, true: FlatActiveOn },
  focused: { false: FlatFocusedOff, true: FlatFocusedOn },
} as const;
const normalMap = { enabled: NormalEnabled, hover: NormalHover, active: NormalActive, focused: NormalFocused } as const;
const enhancedMap = { enabled: EnhancedEnabled, hover: EnhancedHover, active: EnhancedActive, focused: EnhancedFocused } as const;

export type NotificationButtonProps = {
  variant?: 'flat' | 'normal' | 'enhanced';
  state?: 'enabled' | 'hover' | 'active' | 'focused';
  active?: boolean;
  count?: number;
  title?: string;
  size?: number | string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function NotificationButton({ variant = 'flat', state = 'enabled', active = false, count, title = 'Notifications', size = 48, className, onClick }: NotificationButtonProps) {
  const Asset = variant === 'flat' ? flatMap[state][String(active) as 'false' | 'true'] : variant === 'normal' ? normalMap[state] : enhancedMap[state];
  return (
    <button
      type='button'
      aria-label={title}
      title={title}
      onClick={onClick}
      className={cn('ob-notification-button', className)}
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}
    >
      <Asset size={size} title={title} />
      {typeof count === 'number' && count > 0 ? (
        <span style={{ position: 'absolute', right: -2, top: -2, minWidth: 18, height: 18, borderRadius: 999, background: '#cf473b', color: '#fff', fontSize: 11, lineHeight: '18px', textAlign: 'center', padding: '0 5px', fontWeight: 700 }}>
          {count > 99 ? '99+' : count}
        </span>
      ) : null}
    </button>
  );
}

export default NotificationButton;
