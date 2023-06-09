import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Logo from '../../assets/images/icons/logo_1.png';
import {Colors} from '../constants/color';
const HomeScreen = () => {
  const source = Image.resolveAssetSource(Logo).uri;
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri: source}} />
      <Text style={styles.textLogo}>doulingo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    flexDirection: 'column',
    backgroundColor: Colors.lightGreen,
  },
  logo: {
    width: '100%',
    height: 297,
    flex: 1,
  },
  textLogo: {
    fontSize: 20,
    color: 'red',
    flex: 1,
  },
});

export default HomeScreen;
