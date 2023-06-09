import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonComponent from '../components/button_component';
import HeaderTabComponent from '../components/header_tab.conponent';
import InputComponent from '../components/input_component';
import {Colors} from '../constants/color';
const PasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <HeaderTabComponent label="Enter your detail" />
        <View style={styles.mt}>
          <InputComponent label="Old Password" placeholder="" />
          <InputComponent label="New Password" placeholder="" />
          <InputComponent label="Confirm Password" placeholder="" />
        </View>
      </View>

      <View style={{gap: 10, marginTop: 20}}>
        <ButtonComponent
          title="SAVE"
          onPress={() => null}
          backgroundColor={Colors.lightGray}
          color={Colors.lightgray200}
          paddingVertical={15}
          borderColor={Colors.lightgray200}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mt: {
    gap: 5,
    marginTop: 20,
  },
});

export default PasswordScreen;
