/* eslint-disable prettier/prettier */
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import { Router } from './navigation';
const App = (): React.JSX.Element => {
  return (
    <GluestackUIProvider config={config}>
      <Router/>
    </GluestackUIProvider>
  );
};

export default App;
