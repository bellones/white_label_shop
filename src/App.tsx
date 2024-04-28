/* eslint-disable prettier/prettier */
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
const App = (): React.JSX.Element => {
  return (
    <GluestackUIProvider config={config}>
      <></>
    </GluestackUIProvider>
  );
};

export default App;
