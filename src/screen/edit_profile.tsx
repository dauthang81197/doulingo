import React from 'react';
import {
  View,
  Text,
  Image,
  ImageURISource,
  StyleSheet,
  Button,
} from 'react-native';
import AvatarComponent from '../components/avatar_component';
import InputComponent from '../components/input_component';
import {Colors} from '../constants/color';
import ButtonComponent from '../components/button_component';
const EditProfileScreen = () => {
  return (
    <View style={styles.contairner}>
      <Text style={styles.textTitle}>Your Profile</Text>
      <View style={styles.avatar}>
        <AvatarComponent />
        <Text style={styles.textAvatar}>CHANGE AVATAR</Text>
      </View>
      <View>
        <InputComponent label="Name" placeholder="Input Name" />
        <InputComponent label="Username" placeholder="Input Username" />
        <InputComponent label="Password" placeholder="Input Password" />
        <InputComponent label="Email" placeholder="Input Email" />
      </View>

      <View style={{gap: 10}}>
        <ButtonComponent
          title="CREATE AN ACCOUNT"
          onPress={() => null}
          backgroundColor={'white'}
          color={Colors.blue}
          paddingVertical={12}
          borderColor={'#949494'}
        />
        <ButtonComponent
          title="ALREADY HAVE AN ACCOUNT?"
          onPress={() => null}
          backgroundColor={'white'}
          color={Colors.blue}
          paddingVertical={12}
          borderColor={'#949494'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contairner: {
    padding: 18,
    height: '100%',
    justifyContent: 'space-between',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAvatar: {
    color: Colors.blue,
    fontSize: 22,
    fontWeight: '500',
    marginTop: 12,
  },
  textTitle: {
    fontFamily: 'Jua',
    fontSize: 22,
    color: '#090909',
    fontWeight: '700',
  },
});

export default EditProfileScreen;
