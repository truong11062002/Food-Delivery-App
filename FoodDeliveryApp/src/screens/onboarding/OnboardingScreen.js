import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {Component} from 'react';
import {IMG_Background, IMG_Logo} from '../../assets/images';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import CustomButton from '../../components/CustomButton';
import FONT_FAMILY from '../../constants/fonts';
import LinearGradient from 'react-native-linear-gradient';

export class OnboardingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* headerSection */}
        <>
          <View style={styles.headerSection}>
            <Image
              source={IMG_Logo}
              style={styles.logo}
              resizeMode={'contain'}
            />
            <Text style={styles.headerText}>{'Food for \nEveryone'}</Text>
          </View>
        </>

        {/* centerSection */}
        <>
          <View style={styles.centerSection}>
            <ImageBackground
              source={IMG_Background}
              style={styles.centerImage}
              resizeMode={'contain'}>
              <LinearGradient
                style={[styles.centerImage, {height: '60%', bottom: 0}]}
                colors={['transparent', CUSTOM_COLOR.Orange]}
              />
              <View style={styles.buttonSection}>
                <CustomButton
                  type={'primary'}
                  text={'Get Started'}
                  onPress={() => this.props.navigation.navigate('Login')}
                />
              </View>
            </ImageBackground>
          </View>
        </>
      </View>
    );
  }
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  headerSection: {
    flex: 5,
  },

  logo: {
    marginLeft: scale(49),
    marginTop: scale(56),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 40,
    width: scale(73),
    height: scale(73),
  },

  headerText: {
    marginLeft: scale(49),
    marginTop: 30,
    fontSize: scale(60),
    color: CUSTOM_COLOR.White,
    lineHeight: scale(65),
    fontFamily: FONT_FAMILY.Black,
  },

  centerSection: {
    flex: 9,
  },

  centerImage: {
    width: Dimensions.get('window').width,
    height: '100%',
    position: 'absolute',
  },

  buttonSection: {
    bottom: 20,
  },
});
