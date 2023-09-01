import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Layout} from '@src/components';
import {TabNavigations} from '@src/navigations';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
