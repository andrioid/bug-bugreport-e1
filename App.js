import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo'

const PARKPARKHQ = {
  latitude: 56.879651,
  longitude: 9.837896
}

const markerImage = require('./assets/img/space.png')

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={StyleSheet.absoluteFillObject} initialRegion={{
          latitude: PARKPARKHQ.latitude,
          longitude: PARKPARKHQ.longitude,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3
        }}>
          <MapView.Marker coordinate={PARKPARKHQ} image={markerImage} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
