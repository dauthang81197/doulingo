import React from 'react';
import {
  View,
  Text,
  Image,
  ImageURISource,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Colors} from '../constants/color';
import ButtonComponent from './button_component';
export interface ButtonComponentProps {
  label?: string;
  backgroundColor?: string;
  color?: string;
  placeholder?: string;
  maxLength?: number;
}
const InputComponent = (props: ButtonComponentProps) => {
  const [value, onChangeText] = React.useState('');
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.container}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={props.maxLength}
          onChangeText={text => onChangeText(text)}
          placeholder={props.placeholder}
          value={value}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#949494',
    borderWidth: 2,
    borderRadius: 20,
    height: 60,
  },
  label: {
    fontSize: 25,
    fontWeight: '400',
    color: '#949494',
    marginBottom: 10,
    fontFamily: 'Jua',
  },
  input: {
    backgroundColor: Colors.lightGray,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
});

export default InputComponent;
