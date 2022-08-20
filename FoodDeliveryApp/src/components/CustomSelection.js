import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {IC_NonSelect, IC_Select} from '../assets/icons/index';
import scale from '../constants/responsive';
import FONT_FAMILY from '../constants/fonts';

const CustomSelection = props => {
  let isClicked = true;
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.label === props.selectedPage
        ? (isClicked = true)
        : (isClicked = false)}
      {isClicked === true ? (
        <Image source={IC_Select} style={styles.dot} />
      ) : (
        <Image source={IC_NonSelect} style={styles.dot} />
      )}
      {props.icon !== undefined ? (
        <View style={[styles.iconContainer, {backgroundColor: props.color}]}>
          <Image source={props.icon} />
        </View>
      ) : null}

      <Text style={{fontSize: scale(17), fontFamily: FONT_FAMILY.Medium}}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: scale(40),
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
  },

  dot: {
    marginHorizontal: 20,
  },
});
