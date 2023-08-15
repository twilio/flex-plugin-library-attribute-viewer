import * as FlexPlugin from '@twilio/flex-plugin';

import AttributeViewerPlugin from './AttributeViewerPlugin';


export const isEnabledForAgents = () => {
  return true;
};

FlexPlugin.loadPlugin(AttributeViewerPlugin);