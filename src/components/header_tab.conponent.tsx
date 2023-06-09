import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../constants/color';
import Close from '../../assets/images/icons/close.png';
export interface HeaderTabComponentProps {
  label?: string;
  onClose?: () => void;
}
const HeaderTabComponent = (props: HeaderTabComponentProps) => {
  const close = Image.resolveAssetSource(Close).uri;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onClose}>
        <Image style={styles.icon} source={{uri: close}} />
      </TouchableOpacity>

      <Text style={styles.label}>{props.label}</Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 103,
    paddingHorizontal: 17,
    paddingBottom: 10,
    paddingTop: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.borderHeaderTab,
    borderBottomWidth: 2,
  },
  label: {
    fontSize: 25,
    fontWeight: '700',
    color: '#949494',
  },
  icon: {
    width: 23,
    height: 23,
  },
});

export default HeaderTabComponent;
