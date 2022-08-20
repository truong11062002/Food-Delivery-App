import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import CUSTOM_COLOR from '../constants/colors';
import {IMG_Avatar} from '../assets/images';
import {
  IC_Arrow,
  IC_Profile,
  IC_Orders,
  IC_OfferPromo,
  IC_PrivacyPolicy,
  IC_Security,
} from '../assets/icons';
import scale from '../constants/responsive';

const LineDrawer = () => {
  return (
    <View
      style={{
        alignSelf: 'center',
        width: '50%',
        borderBottomColor: CUSTOM_COLOR.White,
        borderBottomWidth: 0.4,
      }}
    />
  );
};

const CustomDrawerNavigator = props => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.avatarContainer}>
        <Image source={IMG_Avatar} />
      </View>
      <View style={styles.menuContainer}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{
            backgroundColor: CUSTOM_COLOR.Vermilion,
            flex: 2,
            justifyContent: 'space-around',
          }}>
          <DrawerItemList {...props} />
          <View>
            <View style={styles.menu}>
              <DrawerItem
                label="Profile"
                icon={({focused, color}) => (
                  <IC_Profile fill={CUSTOM_COLOR.White} />
                )}
                activeTintColor={CUSTOM_COLOR.White}
                inactiveTintColor={CUSTOM_COLOR.White}
                onPress={() => props.navigation.navigate('User')}
              />
            </View>

            <LineDrawer />
            <View style={styles.menu}>
              <DrawerItem
                label="Orders"
                icon={({focused, color}) => (
                  <IC_Orders fill={CUSTOM_COLOR.White} />
                )}
                activeTintColor={CUSTOM_COLOR.White}
                inactiveTintColor={CUSTOM_COLOR.White}
                onPress={() => props.navigation.navigate('Orders')}
              />
            </View>

            <LineDrawer />

            <View style={styles.menu}>
              <DrawerItem
                label="Offer and promo"
                icon={({focused, color}) => (
                  <IC_OfferPromo fill={CUSTOM_COLOR.White} />
                )}
                activeTintColor={CUSTOM_COLOR.White}
                inactiveTintColor={CUSTOM_COLOR.White}
                onPress={() => props.navigation.navigate('Offers')}
              />
            </View>

            <LineDrawer />

            <View style={styles.menu}>
              <DrawerItem
                label="Privacy policy"
                icon={({focused, color}) => (
                  <IC_PrivacyPolicy fill={CUSTOM_COLOR.White} />
                )}
                activeTintColor={CUSTOM_COLOR.White}
                inactiveTintColor={CUSTOM_COLOR.White}
                onPress={() => props.navigation.navigate('Privacy')}
              />
            </View>

            <LineDrawer />

            <View style={styles.menu}>
              <DrawerItem
                label="Security"
                icon={({focused, color}) => (
                  <IC_Security fill={CUSTOM_COLOR.White} />
                )}
                activeTintColor={CUSTOM_COLOR.White}
                inactiveTintColor={CUSTOM_COLOR.White}
                onPress={() => props.navigation.navigate('Security')}
              />
            </View>
          </View>
        </DrawerContentScrollView>
        <View style={styles.bottomContainer}>
          <DrawerItem
            label={({focused, color}) => (
              <View style={styles.bottomButtonContainer}>
                <Text style={styles.bottomButtonMessage}>{'Sign-out'}</Text>
                <View style={styles.iconContainer}></View>
                <IC_Arrow fill="#fff" />
              </View>
            )}
            inactiveTintColor="#FFF"
            activeTintColor="#fff"
          />
        </View>
      </View>
    </View>
  );
};

export default CustomDrawerNavigator;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    alignItems: 'center',
  },
  avatarContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    flex: 5,
    width: '100%',
    height: '100%',
    marginTop: scale(20),
  },
  menu: {
    marginBottom: 3,
    marginTop: 3,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: scale(10),
  },
  bottomButtonMessage: {
    color: '#fff',
    fontSize: scale(17),
    fontWeight: '600',
  },
});
