import * as Flex from '@twilio/flex-ui';

import WorkerAttributes from '../../components/WorkerAttributes';

export function addAttributesToWorkerCanvas(flex: typeof Flex, _manager: Flex.Manager) {
  flex.WorkerCanvas.Content.add(<WorkerAttributes key="worker-attributes" />, {
    sortOrder: 1000,
  });
};
