import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';
import {
  IC_circleOrange,
  IC_circleSilver,
  IC_headHeart,
} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import {IMG_Veggie_tomato_mix} from '../../assets/images';
import CUSTOM_COLOR from '../../constants/colors';
//const AddItem = ()
// const CustomStroll = () => {
//   return (
//     <TouchableOpacity>
//       <View
//         style={{
//           height: 10,
//           width: 10,
//           backgroundColor: CUSTOM_COLOR.Vermilion,
//           borderRadius: 30,
//           borderColor: CUSTOM_COLOR.AthensGray,
//         }}></View>
//     </TouchableOpacity>
//   );
// };

const DetailProduct = props => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerSection}>
          <CustomHeaderGoBack
            rightIcon={IC_headHeart}
            leftOnPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <View style={styles.imageSection}>
          <View style={styles.image}>
            <Image
              style={{
                height: scale(200),
                width: scale(200),
                borderRadius: scale(200) / 2,
              }}
              source={IMG_Veggie_tomato_mix}
            />
          </View>
          <View style={styles.stroll}>
            <Image style={styles.circle} source={IC_circleOrange} />
            <Image style={styles.circle} source={IC_circleSilver} />
            <Image style={styles.circle} source={IC_circleSilver} />
            <Image style={styles.circle} source={IC_circleSilver} />
          </View>
          <View style={styles.textAndPrice}>
            <Text style={styles.name}>Veggie tomato mix</Text>
            <Text style={styles.price}>N1,900</Text>
          </View>
        </View>
        <View style={styles.infoSection}>
          <View>
            <Text style={styles.titleInfo}>Delivery info</Text>
          </View>
          <View>
            <Text style={styles.textInfo}>
              Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
            </Text>
          </View>
          <View style={{marginTop: scale(30)}}>
            <View>
              <Text style={styles.titleInfo}>Return policy</Text>
            </View>

            <Text style={styles.textInfo}>
              All our foods are double checked before leaving our stores so by
              any case you found a broken food please contact our hotline
              immediately.
            </Text>
          </View>
        </View>
        <View style={styles.buttonSection}>
          <CustomButton type={'secondary'} text={'Add to cart'} />
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    width: '80%',
  },
  headerSection: {
    flex: 1,
  },
  imageSection: {
    flex: 5,
  },
  image: {
    flex: 3,
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  stroll: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },

  circle: {
    marginHorizontal: 5,
  },
  textAndPrice: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: scale(28),
    fontFamily: FONT_FAMILY.Medium,
  },

  price: {
    fontSize: scale(22),
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.Orange,
  },
  infoSection: {
    flex: 3,
    justifyContent: 'center',
  },
  titleInfo: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Medium,
  },

  textInfo: {
    opacity: 0.7,
    fontSize: scale(15),
  },
  buttonSection: {
    flex: 2,
    bottom: 20,
  },
});
