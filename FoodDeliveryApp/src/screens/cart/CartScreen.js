import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  ViewBase,
} from 'react-native';
import React, {useState} from 'react';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import CustomOrderedItem from './components/CustomOrderedItem';
import {IMG_Chicken, IMG_Egg, IMG_Veggie_tomato_mix} from '../../assets/images';
import {IC_Swipe} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';
import CustomHeaderGoBack from '../../components/CustomHeaderGoBack';
import { SwipeListView } from 'react-native-swipe-list-view';
const CartScreen = props => {
  const [listCart,setListCart]=useState([    
    {
      key: '1',
      img:IMG_Veggie_tomato_mix,
      name:"Veggie tomato mix...",
      price:"1900",
    },
    {
      key: '2',
      img:IMG_Egg,
      name:"Egg and cucumber...",
      price:"1900",
    },
    {
      key: '3',
      img:IMG_Chicken,
      name:"Fried chicken m...",
      price:"1900",
    },
    {
      key: '4',
      img:IMG_Veggie_tomato_mix,
      name:"Fish with mix orange...",
      price:"1900",
    },
  ]);
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listCart];
    const prevIndex = listCart.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListCart(newData);
  };
  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };
  const onLeftActionStatusChange = rowKey => {
    console.log('onLeftActionStatusChange', rowKey);
  };
  const onRightActionStatusChange = rowKey => {
    console.log('onRightActionStatusChange', rowKey);
  };
  const onRightAction = rowKey => {
    console.log('onRightAction', rowKey);
  };
  const onLeftAction = rowKey => {
    console.log('onLeftAction', rowKey);
  };
  const VisibleItem = props => {
    const {
      data,
      rowHeightAnimatedValue,
      removeRow,
      leftActionState,
      rightActionState,
    } = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }

    return (
      <Animated.View
        style={[styles.rowFront, {height: rowHeightAnimatedValue,marginVertical: scale(14)}]}>
        <CustomOrderedItem
          img={data.item.img}
          text={data.item.name}
          price={data.item.price}
          
        />
      </Animated.View>
    );
  };
  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(102);

    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };
  const HiddenItemWithActions = props => {
    const {
      swipeAnimatedValue,
      leftActionActivated,
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onClose,
      onDelete,
    } = props;

    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false
      }).start();
    }

    return (
      <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
        <Text>Left</Text>
        <View style={[styles.backRightBtn, styles.backRightBtnLeftContainer]}>
        {!leftActionActivated && (
          <TouchableOpacity
            style={styles.backRightBtnLeft}
            onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        )}
        </View>

        {!leftActionActivated && (
          <Animated.View
            style={[
              styles.backRightBtn,
              styles.backRightBtnRightContainer,
              {
                flex: 1,
                width: rowActionAnimatedValue,
              },
            ]}>
            <View style={[styles.backRightBtn, styles.backRightBtnRightContainer]}>
            <TouchableOpacity
              style={styles.backRightBtnRight}
              onPress={onDelete}>
              <Animated.View
                style={[
                  styles.trash,
                  {
                    transform: [
                      {
                        scale: swipeAnimatedValue.interpolate({
                          inputRange: [-90, -45],
                          outputRange: [1, 0],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}>
                <Text>Delete</Text>
              </Animated.View>
            </TouchableOpacity>
            </View>
            
          </Animated.View>
        )}
      </Animated.View>
    );
  };
  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, width: '80%'}}>
        <View style={styles.header}>
          <CustomHeaderGoBack
            title="Cart"
            leftOnPress={() => props.navigation.goBack()}
          />
        </View>
        <View style={styles.center}>
          <View style={styles.center.guide}>
            <Image source={IC_Swipe} />
            <Text>swipe on an item to delete</Text>
          </View>
          <View style={styles.center.main}>
            <SwipeListView
              data={listCart} 
              renderItem={renderItem}
              renderHiddenItem={renderHiddenItem}
              leftOpenValue={75}
              rightOpenValue={-150}
              disableRightSwipe
              onRowDidOpen={onRowDidOpen}
              leftActivationValue={100}
              rightActivationValue={-200}
              leftActionValue={0}
              rightActionValue={-500}
              onLeftAction={onLeftAction}
              onRightAction={onRightAction}
              onLeftActionStatusChange={onLeftActionStatusChange}
              onRightActionStatusChange={onRightActionStatusChange}
            />
          </View>
        </View>
        <View style={styles.button}>
          <CustomButton
            type={'secondary'}
            text={'Complete order'}
            onPress={() => {
              props.navigation.navigate('Delivery');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    alignItems: 'center',
  },
  backTextWhite: {
    color: '#FFF',
  },
  header: {
    flex: 1,
  },

  center: {
    flex: 8,
    guide: {
      height: '5%',
      fontFamily: FONT_FAMILY.Light,
      fonSize: scale(10),
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    main: {
      flex: 1,
    },
  },

  button: {
    flex: 1,
    bottom: 15,
  },

  listItem: {
    alignItems: 'center',
  },
  rowBack: {
    alignItems: 'center',
    //backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: scale(15),
    alignItems:'center',

    //marginVertical:'center'
  },
  backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: scale(75),
  },
  backRightBtnLeftContainer: {
    right: scale(75),
    alignItems:'center',
},
  backRightBtnLeft: {
      backgroundColor: 'red',
      //right: 75,
      width:scale(60),
      height:scale(60),
      borderRadius: scale(60),
      alignItems:'center',
      justifyContent:'center',
  },
  backRightBtnRightContainer: {
    //backgroundColor: 'black',
    right: 0,
    alignItems:'center',
  },
  backRightBtnRight: {
      backgroundColor: 'red',
      right: 0,
      width:scale(60),
      height:scale(60),
      borderRadius: scale(60),
      alignItems:'center',
      justifyContent:'center',
  },
});
