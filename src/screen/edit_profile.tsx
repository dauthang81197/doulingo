import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AvatarComponent from '../components/avatar_component';
import InputComponent from '../components/input_component';
import {Colors} from '../constants/color';
import ButtonComponent from '../components/button_component';
const EditProfileScreen = () => {
  return (
    <ScrollView>
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

        <View style={{gap: 10, marginTop: 20}}>
          <ButtonComponent
            title="EDIT DAILY GOALS"
            onPress={() => null}
            backgroundColor={'white'}
            color={Colors.blue}
            paddingVertical={12}
            borderColor={Colors.borderButton}
          />
          <ButtonComponent
            title="HELP CENTER"
            onPress={() => null}
            backgroundColor={'white'}
            color={Colors.blue}
            paddingVertical={12}
            borderColor={Colors.borderButton}
          />
        </View>
      </View>
    </ScrollView>
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
    fontSize: 22,
    color: Colors.textTitle,
    fontWeight: '700',
  },
});

export default EditProfileScreen;
