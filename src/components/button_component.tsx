import React from 'react';
import {
  View,
  Text,
  Image,
  ImageURISource,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../constants/color';
export interface ButtonComponentProps {
  title: string;
  backgroundColor: string;
  color: string;
  borderColor?: string;
  borderRadius?: number;
  paddingVertical?: number;
  onPress: () => void;
}
const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.container,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor ? props.borderColor : 'black',
        borderWidth: 2,
        borderRadius: props.borderRadius ? props.borderRadius : 20,
        paddingVertical: props.paddingVertical ? props.paddingVertical : 20,
      }}>
      <Text style={{...styles.text, color: props.color}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default ButtonComponent;
