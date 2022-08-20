import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';
import {IC_Back} from '../assets/icons';

export default class CustomHeaderGoBack extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.props.leftOnPress}>
          <Image
            source={
              this.props.leftIcon !== undefined ? this.props.leftIcon : IC_Back
            }
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
        {this.props.rightIcon !== undefined ? (
          <TouchableOpacity
            style={styles.right}
            onPress={this.props.rightOnPress}>
            <Image source={this.props.rightIcon} />
          </TouchableOpacity>
        ) : (
          <View styles={styles.right} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    flex: 2,
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scale(18),
    color: CUSTOM_COLOR.Black,
  },
});
