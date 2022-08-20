import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CustomButton from '../../components/CustomButton';
import {IC_Bank, IC_Card} from '../../assets/icons';
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';
import CustomSelection from '../../components/CustomSelection';

const PaymentScreen = props => {
  const [payment, setPayment] = useState('Card');
  const [delivery, setDelivery] = useState('Door delivery');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <CustomHeaderGoBack
          title="Checkout"
          leftOnPress={() => {
            props.navigation.goBack();
          }}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Payment</Text>
        </View>
        <View style={styles.paymentMethod}>
          <Text style={styles.textMethod}>Payment method</Text>
          <View style={styles.selectPaymentMethod}>
            <View style={{flex: 1}}>
              <CustomSelection
                icon={IC_Card}
                label={'Card'}
                selectedPage={payment}
                onPress={() => setPayment('Card')}
                color={CUSTOM_COLOR.TahitiGold}
              />
            </View>
            <View style={styles.line} />
            <View style={{flex: 1}}>
              <CustomSelection
                icon={IC_Bank}
                label={'Bank account'}
                selectedPage={payment}
                onPress={() => setPayment('Bank account')}
                color={CUSTOM_COLOR.FrenchRose}
              />
            </View>
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
            <Text style={{fontSize: scale(17), fontFamily: FONT_FAMILY.Medium}}>
              Total
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: scale(17), fontFamily: FONT_FAMILY.Medium}}>
              23,000
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonSection}>
        <CustomButton
          type={'secondary'}
          text={'Proceed to payment'}
          onPress={() => setModalVisible(true)}
        />
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Your payment is not successful!');
          setModalVisible(!modalVisible);
        }}>
        {/* Modal Center */}
        <View style={styles.backgroundWhenModalIsOn}>
          <View style={styles.modalView}>
            {/* Title */}
            <View style={styles.titleContainer}>
              <Text style={styles.modalTitle}>Please note</Text>
            </View>
            {/* Content */}
            <View style={styles.textContainer}>
              <Text style={styles.placeToDeliver}>
                {'DELIVERY TO MAINLAND'}
              </Text>
              <Text style={styles.money}>{'N1000 - N2000'}</Text>
              <View
                style={{
                  height: 1,
                  width: '80%',
                  backgroundColor: CUSTOM_COLOR.Black,
                  opacity: 0.5,
                  marginVertical: 10,
                }}
              />
              <Text style={styles.placeToDeliver}>{'DELIVERY TO ISLAND'}</Text>
              <Text style={styles.money}>{'N2000 - N3000'}</Text>
            </View>
            {/* Button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.touchButton}
                onPress={() => {
                  setModalVisible(false),
                    Alert.alert('Your payment is not successful!');
                }}>
                <Text style={[styles.money, {color: 'none', opacity: 0.5}]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchButton}>
                <View style={styles.button}>
                  <Text style={[styles.money, {color: CUSTOM_COLOR.White}]}>
                    Proceed
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    marginHorizontal: scale(53),
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
  paymentMethod: {
    flex: 4,
    marginTop: scale(20),
  },
  selectPaymentMethod: {
    flex: 1,
    marginTop: scale(15),
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
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
    width: '65%',
    backgroundColor: CUSTOM_COLOR.Black,
    bottom: 0,
    alignSelf: 'center',
    opacity: 0.3,
  },

  backgroundWhenModalIsOn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalView: {
    height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 30,
    backgroundColor: 'white',
    overflow: 'hidden',
  },

  titleContainer: {
    flex: 2,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    justifyContent: 'center',
  },

  textContainer: {
    flex: 5,
    justifyContent: 'center',
    marginLeft: 30,
  },

  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },

  touchButton: {
    flex: 1,
    alignItems: 'center',
  },

  button: {
    height: '70%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  placeToDeliver: {
    fontSize: scale(15),
    fontFamily: FONT_FAMILY.Medium,
  },

  money: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.ExtraBold,
    color: CUSTOM_COLOR.Black,
  },

  modalTitle: {
    fontSize: scale(20),
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.Black,
    marginLeft: 30,
  },
});
