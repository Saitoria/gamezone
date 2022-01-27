import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Home from './screens/home';
import Navigator from './routes/drawer';
import 'react-native-gesture-handler';

export default function App()
  {
    return(
      <Navigator/>
     // <Home/>
    )
  }