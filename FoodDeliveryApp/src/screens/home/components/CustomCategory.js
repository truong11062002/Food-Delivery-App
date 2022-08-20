import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../../constants/colors';
import scale from '../../../constants/responsive';
import FONT_FAMILY from '../../../constants/fonts';

export class CustomCategory extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text
          style={
            this.props.isClicked === 'true'
              ? styles.styleText
              : styles.textHeadingMain
          }>
          {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CustomCategory;

const styles = StyleSheet.create({
  styleText: {
    color: CUSTOM_COLOR.Vermilion,
    fontSize: scale(17),
    opacity: 0.7,
    marginRight: 50,
    fontFamily: FONT_FAMILY.Black,
  },

  textHeadingMain: {
    fontSize: scale(17),
    opacity: 0.7,
    marginRight: 50,
    fontFamily: FONT_FAMILY.Black,
    color: CUSTOM_COLOR.Manatee,
  },
});
