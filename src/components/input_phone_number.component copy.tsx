import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../constants/color';
export interface ButtonComponentProps {
  label?: string;
  backgroundColor?: string;
  color?: string;
  placeholder?: string;
  maxLength?: number;
}
const InputPhoneNumberComponent = (props: ButtonComponentProps) => {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.mh}>
      <View style={styles.container}>
        <View style={styles.containerRowFirst}>
          <Text style={styles.label}>+84</Text>
          <TouchableOpacity>
            <Text style={styles.textGetCode}>GET CODE</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          multiline={false}
          maxLength={props.maxLength}
          onChangeText={text => onChangeText(text)}
          placeholder={props.placeholder}
          value={value}
          style={styles.input}
          placeholderTextColor={Colors.borderButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mh: {
    marginVertical: 10,
  },
  container: {
    borderColor: Colors.borderButton,
    borderWidth: 2,
    borderRadius: 20,
    height: 'auto',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 25,
    paddingTop: 20,
    backgroundColor: Colors.lightGray,
  },
  containerRowFirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 25,
    fontWeight: '600',
    color: Colors.borderButton,
    marginBottom: 10,
  },
  textGetCode: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.blue,
  },
  input: {
    height: 56,
    fontSize: 20,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.lightGray,
  },
});

export default InputPhoneNumberComponent;
