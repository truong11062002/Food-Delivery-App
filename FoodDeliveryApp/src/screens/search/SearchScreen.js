import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import React, {useState} from 'react';
import scale from '../../constants/responsive';
import CustomList from '../home/components/CustomList';
import {IMG_Chicken, IMG_Egg, IMG_Veggie_tomato_mix} from '../../assets/images';
import CUSTOM_COLOR from '../../constants/colors';

const data = [
  {id: 1, name: 'Veggie tomato mix', price: 'N1,900'},
  {id: 2, name: 'Egg and cucmber...', price: 'N1,900'},
  {id: 3, name: 'Fried chicken m.', price: 'N1,900'},
  {id: 4, name: 'Moi-moi and ekpa.', price: 'N1,900'},
];

const SearchScreen = () => {
  const [dataFromState, setData] = useState(data);

  const item = ({item}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: '50%',
            alignItems: 'center',
          }}>
          <View>
            <CustomList
              source={IMG_Chicken}
              name={item.name}
              price={item.price}
            />

            <CustomList source={IMG_Egg} name={item.name} price={item.price} />
            <CustomList
              source={IMG_Veggie_tomato_mix}
              name={item.name}
              price={item.price}
            />
          </View>
        </View>

        <View
          style={{
            width: '50%',
            marginTop: scale(30),
            alignItems: 'center',
          }}>
          <View>
            <CustomList
              source={IMG_Chicken}
              name={item.name}
              price={item.price}
            />
          </View>
        </View>
      </View>
    );
  };

  const searchName = input => {
    let data = dataFromState;
    let searchData = data.filter(item => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setData(searchData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={{
            flex: 1,
            width: '100%',
            fontSize: scale(17),
            backgroundColor: CUSTOM_COLOR.Silver,
          }}
          placeholder="Search..."
          onChangeText={input => {
            searchName(input);
          }}
        />
      </View>

      <View style={styles.main}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: scale(28)}}>Found 6 results</Text>
        </View>
        <FlatList
          data={dataFromState}
          renderItem={item}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Silver,
  },
  header: {
    flex: 1,
  },
  main: {
    flex: 9,
    backgroundColor: CUSTOM_COLOR.AthensGray,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
