import {Text, TextInput, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';

export class CustomInput extends Component {
  render() {
    return (
      <>
        <Text style={styles.textInput}>{this.props.label}</Text>
        <TextInput
          secureTextEntry={this.props.secureText}
          onChangeText={this.props.onChangeText}
          placeholder={'Enter ' + this.props.label.toLowerCase()}
          style={styles.inputContainer}
        />
      </>
    );
  }
}

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    marginTop: 10,
    fontFamily: FONT_FAMILY.ExtraBold,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.Black,
  },

  textInput: {
    marginTop: 20,
    fontFamily: FONT_FAMILY.ExtraBold,
  },
});
