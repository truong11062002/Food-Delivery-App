import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';
import FONT_FAMILY from '../constants/fonts';

export class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            style={[
              styles.button,
              this.props.type === 'primary'
                ? styles.buttonPrimary
                : styles.buttonSecondary,
            ]}
            onPress={this.props.onPress}>
            <Text
              style={[
                styles.text,
                this.props.type === 'primary'
                  ? styles.textButtonPrimary
                  : styles.textButtonSecondary,
              ]}>
              {this.props.text}
            </Text>
          </TouchableOpacity>
        </View>

      </>
    );
  }
}

// onPress={() => this.props.navigation.navigate

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
  },

  button: {
    height: scale(70),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
    alignSelf: 'center',
    padding: 20,
  },

  buttonPrimary: {
    backgroundColor: CUSTOM_COLOR.White,
  },

  text: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.ExtraBold,
  },

  textButtonPrimary: {
    color: CUSTOM_COLOR.Orange,
  },

  buttonSecondary: {
    backgroundColor: CUSTOM_COLOR.Orange,
  },

  textButtonSecondary: {
    color: CUSTOM_COLOR.White,
  },
});
