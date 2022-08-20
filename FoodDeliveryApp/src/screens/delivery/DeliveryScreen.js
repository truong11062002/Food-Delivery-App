import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';
import CustomButton from '../../components/CustomButton';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CustomSelection from '../../components/CustomSelection';
const DeliveryScreen = props => {
  const [name, setName] = useState('Marvis Ighedosa');
  const [address, setAddress] = useState(
    'No 15 uti street off ovie palace road effurun delta state.',
  );
  const [phone, setPhone] = useState('+234 9011039271');

  const [delivery, setDelivery] = useState('Door delivery');

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerSection}>
          <CustomHeaderGoBack
            title={'Checkout'}
            leftOnPress={() => props.navigation.goBack()}
          />
        </View>
        <View style={styles.main}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Delivery</Text>
          </View>

          <View style={styles.addressDetails}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: scale(18),
                  fontFamily: FONT_FAMILY.Bold,
                  flex: 1,
                }}>
                {'Address details'}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{color: CUSTOM_COLOR.Vermilion, fontSize: scale(15)}}>
                  {'change'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.info}>
              <Text
                style={{
                  fontSize: scale(17),
                  fontFamily: FONT_FAMILY.Medium,

                  marginHorizontal: scale(30),
                }}>
                {name}
              </Text>
              <View style={styles.line} />
              <Text
                style={{
                  fontSize: scale(15),
                  fontFamily: FONT_FAMILY.Medium,
                  marginVertical: scale(7),
                  marginHorizontal: scale(30),
                }}>
                {address}
              </Text>
              <View style={styles.line} />
              <Text
                style={{
                  fontSize: scale(15),
                  fontFamily: FONT_FAMILY.Medium,
                  marginHorizontal: scale(30),
                }}>
                {phone}
              </Text>
            </View>
          </View>
          <View style={styles.deliveryMethod}>
            <Text style={styles.textMethod}>Delivery method</Text>
            <View style={styles.selectDeliveryMethod}>
              <View style={{flex: 1}}>
                <CustomSelection
                  label={'Door delivery'}
                  selectedPage={delivery}
                  onPress={() => setDelivery('Door delivery')}
                />
              </View>
              <View style={styles.line} />
              <View style={{flex: 1}}>
                <CustomSelection
                  label={'Pick Up'}
                  selectedPage={delivery}
                  onPress={() => setDelivery('Pick Up')}
                />
              </View>
            </View>
          </View>
          <View style={styles.total}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: scale(17), fontFamily: FONT_FAMILY.Medium}}>
                Total
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                justifyContent: 'center',

                alignItems: 'flex-end',
              }}>
              <Text
                style={{fontSize: scale(17), fontFamily: FONT_FAMILY.Medium}}>
                23,000
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonSection}>
          <CustomButton
            type={'secondary'}
            text={'Proceed to payment'}
            onPress={() => props.navigation.navigate('Payment')}
          />
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    width: '80%',
  },
  headerSection: {
    flex: 1,
  },
  main: {
    flex: 8,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
  },

  titleText: {
    fontSize: scale(34),
    fontFamily: FONT_FAMILY.Medium,
  },
  addressDetails: {
    flex: 3,
    marginTop: scale(20),
  },
  info: {
    flex: 3,
    marginTop: scale(16),
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    borderRadius: 20,
  },
  textMethod: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Bold,
  },
  deliveryMethod: {
    flex: 3,
    marginTop: scale(20),
  },
  selectDeliveryMethod: {
    flex: 1,
    marginTop: scale(15),
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
  },
  total: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonSection: {
    flex: 1,
    bottom: 15,
  },

  line: {
    height: 1,
    width: '80%',
    backgroundColor: CUSTOM_COLOR.Black,
    bottom: 0,
    alignSelf: 'center',
    opacity: 0.3,
  },
});
