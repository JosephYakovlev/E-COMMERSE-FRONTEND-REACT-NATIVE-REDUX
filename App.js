import React from 'react';
import { StyleSheet, View, SafeAreaView, ImageBackground, ScrollView, Dimensions} from 'react-native';
import MainPage from './src/pages/MainPage';
import MainStack from './navigate';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { StatusBar } from 'expo-status-bar';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const windowWidth = Dimensions.get('window').width;

console.log(typeof getStatusBarHeight())




export default function App() {
  return (
    <Provider store={Store}>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ImageBackground  style={{height: windowWidth * 1.8512, width: windowWidth, flex: 1}} source ={require('../frontend/assets/backgroundImage2.jpg')}>
          <MainStack />
        </ImageBackground>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1
  },
});
