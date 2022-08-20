import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';
import {IC_Back, IC_Bank, IC_Card, IC_Paypal} from '../../assets/icons/index';
import CustomButton from '../../components/CustomButton';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import {IMG_Avatar} from '../../assets/images';
import CustomSelection from '../../components/CustomSelection';

const UserScreen = props => {
  const [page, setPage] = useState('Card');
  const [name, setName] = useState('Marvis Ighedosa');
  const [email, setEmail] = useState('dosamarvis@gmail.com');
  const [address, setAddress] = useState(
    'No 15 uti street off ovie palace road effurun delta state.',
  );
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <CustomHeaderGoBack
            leftIcon={IC_Back}
            title="My Profile"
            leftOnPress={() => props.navigation.goBack()}
          />
        </View>

        <View style={styles.main}>
          <View style={styles.main.infoContainer}>
            <Text
              style={{
                fontFamily: FONT_FAMILY.Bold,
                fontSize: scale(17),
                marginBottom: 10,
              }}>
              {'Information'}
            </Text>
            <TouchableOpacity
              style={styles.main.infoContainer.user}
              onPress={() =>
                props.navigation.navigate('Profile', {
                  name: name,
                  email: email,
                  address: address,
                })
              }>
              <View style={styles.main.infoContainer.user.avatar}>
                <Image
                  source={IMG_Avatar}
                  style={{
                    alignSelf: 'center',
                    marginTop: scale(16),
                    width: 70,
                    height: 70,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={styles.main.infoContainer.user.info}>
                <Text
                  style={{fontSize: scale(18), fontFamily: FONT_FAMILY.Bold}}>
                  {name}
                </Text>
                <Text
                  style={{
                    fontSize: scale(13),
                    fontFamily: FONT_FAMILY.Light,
                    marginVertical: scale(7),
                  }}>
                  {email}
                </Text>
                <Text
                  style={{fontSize: scale(13), fontFamily: FONT_FAMILY.Light}}>
                  {address}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.main.method}>
            <Text
              style={{
                fontFamily: FONT_FAMILY.Bold,
                fontSize: scale(17),
                marginBottom: 10,
              }}>
              {'Payment Method'}
            </Text>
            <View style={styles.choices}>
              <View style={styles.choices.choice}>
                <CustomSelection
                  icon={IC_Card}
                  label="Card"
                  selectedPage={page}
                  onPress={() => setPage('Card')}
                  color={CUSTOM_COLOR.TahitiGold}
                />
                <View style={styles.line} />
              </View>
              <View style={styles.choices.choice}>
                <CustomSelection
                  icon={IC_Bank}
                  label="Bank account"
                  selectedPage={page}
                  onPress={() => setPage('Bank account')}
                  color={CUSTOM_COLOR.FrenchRose}
                />
                <View style={styles.line} />
              </View>
              <View style={styles.choices.choice}>
                <CustomSelection
                  icon={IC_Paypal}
                  label="Paypal"
                  selectedPage={page}
                  onPress={() => setPage('Paypal')}
                  color={CUSTOM_COLOR.Blue}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.button}>
          <CustomButton text="Update" />
        </View>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    alignItems: 'center',
  },

  subContainer: {
    width: '80%',
    flex: 1,
  },

  header: {
    flex: 1,
  },

  main: {
    flex: 8,
    infoContainer: {
      flex: 3,
      user: {
        backgroundColor: CUSTOM_COLOR.White,
        height: '70%',
        borderRadius: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        avatar: {
          flex: 1,
        },
        info: {
          marginTop: scale(16),
          flex: 2,
        },
      },
    },

    method: {
      flex: 5,
    },
  },

  line: {
    height: 1,
    width: '65%',
    backgroundColor: CUSTOM_COLOR.Black,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    opacity: 0.3,
  },

  choices: {
    height: '60%',
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 20,
    overflow: 'hidden',
    choice: {
      flex: 1,
    },
  },

  button: {
    flex: 1,
    bottom: 15,
  },
});
