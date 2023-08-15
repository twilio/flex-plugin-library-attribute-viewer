import * as Flex from '@twilio/flex-ui';

// Export the template names as an enum for better maintainability when accessing them elsewhere
export enum StringTemplates {
  TaskAttributesHeader = 'PSTaskAttributesHeader',
  WorkerAttributesHeader = 'PSWorkerAttributesHeader',
}
const customStrings = {
  [StringTemplates.TaskAttributesHeader]: 'Task attributes',
  [StringTemplates.WorkerAttributesHeader]: 'Attributes',
};

export default (flex: typeof Flex, manager: Flex.Manager) => {
  manager.strings = {
    ...customStrings,
    ...manager.strings,
  } as any;
};