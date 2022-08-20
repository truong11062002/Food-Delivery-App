import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import {IC_EmptyHistory} from '../../assets/icons';
import scale from '../../constants/responsive';
import CustomButton from '../../components/CustomButton';
import CUSTOM_COLOR from '../../constants/colors';
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';
const HistoryScreen = ({navigation, props}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.headerSection}>
            <CustomHeaderGoBack
              title={'History'}
              leftOnPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.body}>
            <Image source={IC_EmptyHistory} />
            <Text style={styles.bodyMainText}>No history yet</Text>
            <Text style={styles.bodyText}>
              {'Hit the orange button down\nbelow to Create an order'}
            </Text>
          </View>
          <View style={[styles.bottom]}>
            <CustomButton text={'Start ordering'} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HistoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    width: '80%',
  },
  headerSection: {
    flex: 1,
  },
  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyMainText: {
    fontSize: scale(28),
    color: CUSTOM_COLOR.Black,
    marginVertical: scale(5),
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 20,
    color: CUSTOM_COLOR.MidGray,
    textAlign: 'center',
  },
  bottom: {
    flex: 1,
    bottom: scale(17),
  },
});
