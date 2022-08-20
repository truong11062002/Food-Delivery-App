import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CUSTOM_COLOR from '../../../constants/colors';
import React, {Component} from 'react';
import scale from '../../../constants/responsive';
import FONT_FAMILY from '../../../constants/fonts';

export class CustomList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={this.props.onPress}>
          <View style={styles.optionInfo}>
            <Image
              style={styles.imageMain}
              source={this.props.source}
              resizeMode={'cover'}></Image>
          </View>
          <TouchableOpacity
            style={styles.describeContainer}
            onPress={this.props.onPress}>
            <View style={styles.dontUse}></View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{this.props.name}</Text>
              <Text style={styles.price}>{this.props.price}</Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomList;

const styles = StyleSheet.create({
  optionContainer: {
    width: scale(210),
    height: scale(170),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(15),
  },

  imageMain: {
    borderRadius: 100,
  },

  optionInfo: {
    bottom: 0,
    borderRadius: 30,
    zIndex: 2,
  },

  describeContainer: {
    width: scale(180),
    height: scale(230),
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 1,
    borderRadius: 30,
  },

  dontUse: {
    height: scale(60),
  },

  textContainer: {
    marginTop: scale(70),
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: scale(20),
    flex: 1,
  },

  name: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.Black,
    fontSize: scale(22),
  },
  price: {
    fontFamily: FONT_FAMILY.Black,
    fontSize: scale(17),
    color: CUSTOM_COLOR.Vermilion,
  },
});
