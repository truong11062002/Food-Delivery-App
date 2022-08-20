import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {IMG_BellaLogo, IMG_LoadingBackGround} from '../../assets/images';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const radius = (Dimensions.get('window').width * 63) / 100;
const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={IMG_LoadingBackGround} style={styles.background}>
        <View style={styles.main}>
          <View style={styles.blank} />
          <View style={styles.logoContainer}>
            <Image source={IMG_BellaLogo} style={styles.logo} />
          </View>
          <View style={styles.content}>
            <View style={{flex: 1}}>
              <Text style={styles.text}>Food for Everyone</Text>
            </View>
            <View style={{flex: 2}}>
              <ActivityIndicator
                size="large"
                color={CUSTOM_COLOR.SunsetOrange}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  main: {
    flex: 1,
    height: radius,
    width: radius,
    borderRadius: 180,
    position: 'absolute',
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
  },
  blank: {
    flex: 4,
  },

  logoContainer: {
    flex: 3,
    justifyContent: 'center',
  },

  logo: {},

  content: {
    flex: 6,
    alignItems: 'center',
  },

  text: {
    fontSize: scale(10),
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.Vermilion,
  },
});
