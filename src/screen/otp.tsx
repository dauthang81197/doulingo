import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonComponent from '../components/button_component';
import HeaderTabComponent from '../components/header_tab.conponent';
import InputPhoneNumberComponent from '../components/input_phone_number.component copy';
import {Colors} from '../constants/color';
const OtpScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <HeaderTabComponent label="Enter your detail" />
        <View>
          <InputPhoneNumberComponent placeholder="Verification code" />
          <ButtonComponent
            title="SIGN IN"
            onPress={() => null}
            backgroundColor={Colors.lightGray}
            color={Colors.lightgray200}
            paddingVertical={15}
            borderColor={Colors.lightgray200}
          />
        </View>
      </View>

      <View style={{gap: 10, marginTop: 20}}>
        <ButtonComponent
          title="SIGN IN WITH GOOGLE"
          onPress={() => null}
          backgroundColor={'white'}
          color={Colors.blue}
          paddingVertical={12}
          borderColor={Colors.borderButton}
        />
        <ButtonComponent
          title="SING IN WITH FACEBOOK"
          onPress={() => null}
          backgroundColor={'white'}
          color={Colors.blue}
          paddingVertical={12}
          borderColor={Colors.borderButton}
        />
        <ButtonComponent
          title="SIGN IN WITH EMAIL"
          onPress={() => null}
          backgroundColor={'white'}
          color={Colors.blue}
          paddingVertical={12}
          borderColor={Colors.borderButton}
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
});

export default OtpScreen;
