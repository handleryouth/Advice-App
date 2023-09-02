import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Layout} from '@src/components';
import {TabNavigations} from '@src/navigations';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Layout>
          <TabNavigations />
        </Layout>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
