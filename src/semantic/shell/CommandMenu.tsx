import * as React from 'react';
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
} as const;

export type CommandMenuProps = {
  variant?: keyof typeof map;
  title?: string;
  footer?: React.ReactNode;
};

export function CommandMenu({ variant = 'default', title = 'Command menu', footer }: CommandMenuProps) {
  const Asset = map[variant];
  return (
    <OpenBridgeFrame title={title} subtitle={variant} footer={footer}>
      <Asset responsive width='100%' title={title} />
    </OpenBridgeFrame>
  );
}

export default CommandMenu;
