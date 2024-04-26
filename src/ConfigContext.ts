import React from 'react';

export const DefaultConfig = {
  prefixCls: 'drawing-board',
  showBackgroundTool: false,
  showImageTool: true,
  showMagnificationTool: true,
};

const ConfigContext = React.createContext(DefaultConfig);
export default ConfigContext;
