import React from 'react'
import {StyleSheet,SafeAreaView,View,Text,Image} from 'react-native';
import {IC_NoOrder} from '../../assets/icons';
import scale from '../../constants/responsive';
import CustomButton from '../../components/CustomButton';
import CUSTOM_COLOR from '../../constants/colors';
export const OrderScreen = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Image source={IC_NoOrder}/>
        <Text style={styles.bodyMainText}>No orders yet</Text>
        <Text style={styles.bodyText}>{'Hit the orange button down\nbelow to Create an order'}</Text>
      </View>
      <View style={[styles.bottom]}>
        <CustomButton text={'Start ordering'} />
      </View>
    </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:CUSTOM_COLOR.AthensGray,
    },
    body:{
      flex:5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bodyMainText:{
      fontSize:scale(28),
      color:CUSTOM_COLOR.Black,
      marginVertical:scale(5),
      textAlign:'center',
    },
    bodyText:{
      fontSize:20,
      color: CUSTOM_COLOR.MidGray,
      textAlign:'center',
    },
    bottom:{
      flex:1,
      bottom: scale(17),
    },
  });
  
