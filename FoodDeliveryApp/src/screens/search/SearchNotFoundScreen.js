import React from 'react'
import {StyleSheet,SafeAreaView,View,Text,Image} from 'react-native';
import {IC_ItemNotFound} from '../../assets/icons';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
export const SearchNotFoundScreen = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Image source={IC_ItemNotFound}/>
        <Text style={styles.bodyMainText}>Item not found</Text>
        <Text style={styles.bodyText}>{'Try searching the item with\na different keyword.'}</Text>
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
  });
  
