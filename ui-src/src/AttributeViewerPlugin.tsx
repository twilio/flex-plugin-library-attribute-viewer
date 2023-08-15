import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import { addAttributesToTaskInfoPanel } from './flex-hooks/components/TaskInfoPanel';
import { addAttributesToWorkerCanvas } from './flex-hooks/components/WorkerCanvas';

import ConfigFlexStrings from './flex-hooks/strings';
import CustomizePasteElements from './utils/PasteThemeProvider';

const PLUGIN_NAME = 'AttributeViewer';

export default class AttributeViewerPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    const initializers = [
      ConfigFlexStrings,
      CustomizePasteElements,
      addAttributesToTaskInfoPanel,
      addAttributesToWorkerCanvas,
    ];

    initializers.forEach((initializer) => initializer(flex, manager));
  }
}


