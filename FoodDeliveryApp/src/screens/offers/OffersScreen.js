import React from 'react'
import {StyleSheet,SafeAreaView,View,Text} from 'react-native';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';


export const OfferScreen = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headText}>My offers</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyMainText}>ohh snap! No offers yet</Text>
        <Text style={styles.bodyText}>{'Bella doesn’t have any offers\nyet please check again.'}</Text>
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
    head:{
      flex:1,
      flexDirection:'row',
      marginLeft:'10%',
      alignItems: 'center',
    },
    headText:{
      fontSize:scale(34),
      color:CUSTOM_COLOR.Black,
  
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
  
