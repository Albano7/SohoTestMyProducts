import { store } from '@app/store';
import Colors from '@app/styles/colors';
import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Navigation from '@app/hooks/navigation';
import Theme from '@app/styles';


function App(): React.JSX.Element {

  const backgroundStyle = {
    backgroundColor: Colors.bg,
  };

  return (
    <View style={Theme.App.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
}


export default App;
