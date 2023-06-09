import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AvatarDefault from '../../assets/images/icons/avatar_default.png';
import {Avatar} from 'react-native-paper';
import {Colors} from '../constants/color';
const AvatarComponent = () => {
  const avatarDefault = Image.resolveAssetSource(AvatarDefault).uri;
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={80}
        source={{
          uri: avatarDefault,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 94,
    height: 94,
    borderColor: Colors.blue,
    borderRadius: 94 / 2,
    borderWidth: 3,
    backgroundColor: 'white',
  },
});

export default AvatarComponent;
