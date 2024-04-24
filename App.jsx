import React from 'react';
import RootNavigation from './src/navigations/RootNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <RootNavigation />
      </GestureHandlerRootView>
    </Provider>
  );
}
