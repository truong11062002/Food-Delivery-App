import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {IMG_Chicken, IMG_Egg, IMG_Veggie_tomato_mix} from '../../assets/images';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import React, {Component} from 'react';
import scale from '../../constants/responsive';
import {
  IC_Cart,
  IC_Home,
  IC_Menu,
  IC_Heart,
  IC_User,
  IC_History,
  IC_Search,
} from '../../assets/icons';

import CustomList from './components/CustomList';
import CustomCategory from './components/CustomCategory';
import SCREEN from '../../constants/screens';
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: SCREEN.FOODS,
      initialBottomNav: 'Home',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerSection}>
          <View style={styles.iconHeaderSection}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <IC_Menu />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cart')}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <IC_Cart />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{'Delicious \nfood for you'}</Text>

          <View style={styles.searchBar}>
            <View style={{marginLeft: scale(35), marginRight: scale(16)}}>
              <IC_Search />
            </View>
            <TextInput
              placeholder="Search"
              style={{flex: 1}}
              onPressIn={() => this.props.navigation.navigate('Search')}
            />
          </View>
        </View>

        <View style={styles.mainSection}>
          <View style={styles.customCategory}>
            <ScrollView horizontal={true}>
              <CustomCategory
                onPress={() => {
                  this.setState({page: SCREEN.FOODS});
                }}
                name={'Foods'}
                isClicked={this.state.page === SCREEN.FOODS ? 'true' : 'false'}
              />

              <CustomCategory
                onPress={() => {
                  this.setState({page: SCREEN.DRINKS});
                }}
                name={'Drinks'}
                isClicked={this.state.page === SCREEN.DRINKS ? 'true' : 'false'}
              />

              <CustomCategory
                onPress={() => {
                  this.setState({page: SCREEN.SNACKS});
                }}
                name={'Snacks'}
                isClicked={this.state.page === SCREEN.SNACKS ? 'true' : 'false'}
              />

              <CustomCategory
                onPress={() => {
                  this.setState({page: SCREEN.SAUCES});
                }}
                name={'Sauces'}
                isClicked={this.state.page === SCREEN.SAUCES ? 'true' : 'false'}
              />
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.seeMore}>
            <Text
              style={{
                color: CUSTOM_COLOR.Orange,
                marginBottom: scale(20),
                textAlign: 'right',
                fontSize: scale(15),
                fontFamily: FONT_FAMILY.Medium,
              }}>
              {'see more'}
            </Text>
          </TouchableOpacity>
          <ScrollView
            style={styles.scrollMenu}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <CustomList
              source={IMG_Veggie_tomato_mix}
              name={'Veggie \ntomato mix'}
              price={'N1,900'}
              onPress={() => {
                this.props.navigation.navigate('DetailProduct');
              }}
            />
            <CustomList
              source={IMG_Egg}
              name={'Egg and cucmber...'}
              price={'N1,900'}
            />
            <CustomList
              source={IMG_Chicken}
              name={'Fried chicken m.'}
              price={'N1,900'}
            />
          </ScrollView>
        </View>

        <View style={styles.iconSection}>
          <TouchableOpacity
            onPress={() => {
              this.setState({initialBottomNav: 'Home'});
            }}>
            <IC_Home
              fill={
                this.state.initialBottomNav === 'Home' ? '#FA4A0C' : '#ADADAF'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({initialBottomNav: 'Heart'});
            }}>
            <IC_Heart
              fill={
                this.state.initialBottomNav === 'Heart' ? '#FA4A0C' : '#ADADAF'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({initialBottomNav: 'User'});
              this.props.navigation.navigate('User');
            }}>
            <IC_User
              fill={
                this.state.initialBottomNav === 'User' ? '#FA4A0C' : '#ADADAF'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({initialBottomNav: 'History'});
              this.props.navigation.navigate('History');
            }}>
            <IC_History
              fill={
                this.state.initialBottomNav === 'History'
                  ? '#FA4A0C'
                  : '#ADADAF'
              }
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
  },

  headerSection: {
    flex: 4,
  },

  iconHeaderSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginTop: '10%',
  },

  title: {
    fontFamily: FONT_FAMILY.Black,
    fontSize: scale(34),
    marginLeft: '10%',
    marginTop: scale(43),
    marginBottom: scale(28),
  },

  searchBar: {
    backgroundColor: CUSTOM_COLOR.GalleryApprox,
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    height: scale(60),
    alignSelf: 'center',
    borderRadius: 30,
  },

  mainSection: {
    flex: 5,
  },

  customCategory: {
    flexDirection: 'row',
    marginLeft: scale(75),
    justifyContent: 'space-between',
    height: '10%',
  },

  scrollMenu: {},

  iconSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  textHeadingMain: {
    fontSize: scale(17),
    opacity: 0.7,
    marginRight: 50,
    fontFamily: FONT_FAMILY.Black,
  },
  seeMore: {
    marginHorizontal: '10%',
  },
});
