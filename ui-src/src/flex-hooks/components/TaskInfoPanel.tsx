import * as Flex from '@twilio/flex-ui';

import TaskAttributes from '../../components/TaskAttributes';
import { isEnabledForAgents } from './../../';

//export const componentName = FlexComponent.TaskInfoPanel;
//export const componentName = 'TaskInfoPanel'
export function addAttributesToTaskInfoPanel(flex: typeof Flex, manager: Flex.Manager) {
  const { roles } = manager.user;
  if (!isEnabledForAgents() && roles.indexOf('admin') < 0 && roles.indexOf('supervisor') < 0) return;

  flex.TaskInfoPanel.Content.add(<TaskAttributes key="task-attributes" />, {
    sortOrder: 1000,
  });
  flex.Supervisor.TaskInfoPanel.Content.add(<TaskAttributes key="task-attributes-supervisor" />, {
    sortOrder: 1000,
  });
};
