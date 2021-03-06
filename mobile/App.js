import React from 'react';
import { YellowBox } from 'react-native'

import Routes from './src/routes'

// import { StyleSheet, Text, View } from 'react-native';
// View ~ <div/>
// Text ~ <h1/>, <h2/>, <p/>, <span/>, etc
// StyleSheet ~ CSS (objeto javascript)
// Tudo feito em Flex Box Layout (todas já vem com display: 'flex' e um flexDirection: column)

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return <Routes />
}