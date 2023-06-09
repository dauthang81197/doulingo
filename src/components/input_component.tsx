import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Colors} from '../constants/color';
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
    <View style={{marginBottom: 10}}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.container}>
        <TextInput
          multiline={false}
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
    justifyContent: 'center',
  },
  label: {
    fontSize: 25,
    fontWeight: '600',
    color: '#949494',
    marginBottom: 10,
  },
  input: {
    backgroundColor: Colors.lightGray,
    paddingHorizontal: 25,
    height: 56,
    borderRadius: 20,
    fontSize: 20,
    justifyContent: 'center',
  },
});

export default InputComponent;
