import React from 'react';
import {
  View,
  Text,
  Image,
  ImageURISource,
  StyleSheet,
  Button,
} from 'react-native';
import Logo from '../../assets/images/icons/logo_1.png';
import {Colors} from '../constants/color';
import ButtonComponent from '../components/button_component';
const GetStartedScreen = () => {
  const source = Image.resolveAssetSource(Logo).uri;

  const test = () => {
    console.log('test');
  };
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 24}}>
        <Image style={styles.logoImage} source={{uri: source}} />
        <Text style={styles.textLogo}>doulingo</Text>
      </View>
      <View style={{marginBottom: 59}}>
        <Text style={styles.textDescrition}>Learn a language for free.</Text>
        <Text style={styles.textDescrition}>Forever.</Text>
      </View>

      <View style={{gap: 20}}>
        <ButtonComponent
          title="CREATE AN ACCOUNT"
          onPress={() => test()}
          backgroundColor={Colors.green}
          color={'white'}
        />
        <ButtonComponent
          title="ALREADY HAVE AN ACCOUNT?"
          onPress={() => null}
          backgroundColor={'white'}
          color={Colors.green}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 135,
    paddingBottom: 115,
    paddingHorizontal: 16,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  logoImage: {
    width: '100%',
    height: 240,
  },
  textLogo: {
    fontSize: 45,
    textAlign: 'center',
    color: Colors.green,
    fontWeight: '700',
    fontFamily: 'K2D',
  },
  textDescrition: {
    fontSize: 25,
    textAlign: 'center',
    color: Colors.lightgray200,
    fontWeight: '400',
    fontFamily: 'K2D',
  },
});

export default GetStartedScreen;
