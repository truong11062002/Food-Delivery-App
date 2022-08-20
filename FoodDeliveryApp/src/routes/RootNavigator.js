import {StyleSheet} from 'react-native';
import React from 'react';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/CartScreen';
import PaymentScreen from '../screens/payment/PaymentScreen';
import DetailProduct from '../screens/product/DetailProduct';
import MyProfileScreen from '../screens/profile/MyProfileScreen';
import UserScreen from '../screens/user/UserScreen';
import HistoryScreen from '../screens/history/HistoryScreen';
import DeliveryScreen from '../screens/delivery/DeliveryScreen';
import SearchScreen from '../screens/search/SearchScreen';
import DrawerNavigator from './DrawerNavigator';
import {OrderScreen} from '../screens/orders/OrderSceen';
import {OfferScreen} from '../screens/offers/OffersScreen';
import PrivacyPolicyScreen from '../screens/privacy/PrivacyPolicyScreen';
import SecurityScreen from '../screens/security/SecurityScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          /> */}

          <Stack.Screen
            name="History"
            component={HistoryScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="DetailProduct"
            component={DetailProduct}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Profile"
            component={MyProfileScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="User"
            component={UserScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Orders"
            component={OrderScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Offers"
            component={OfferScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Privacy"
            component={PrivacyPolicyScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Security"
            component={SecurityScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
