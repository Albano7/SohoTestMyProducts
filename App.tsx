import { store } from '@app/store';
import Colors from '@app/styles/colors';
import React, { useEffect } from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Navigation from '@app/hooks/navigation';
import Theme from '@app/styles';
import NetInfo, {NetInfoState} from "@react-native-community/netinfo";
import { setIsOffline } from '@app/features/user/userSlice';


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
        <NavigationProvider />
      </Provider>
    </View>
  );
}

const NavigationProvider = () => {
  const dispatch = store.dispatch
  
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state: NetInfoState) => {
      const isOnline = state.isConnected && state.isInternetReachable
      __DEV__ && console.log("Is connected online")
      dispatch(setIsOffline({ isOnline: !!isOnline }))
    })

    return () => removeNetInfoSubscription()
  }, [])

  return <Navigation />
}


export default App;
