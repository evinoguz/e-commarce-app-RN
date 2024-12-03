import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Cart = ({data, product, setProduct, getDataFromDB, getTotal}) => {
  const navigation = useNavigation();
  const removeItemFromCart = async id => {
    let itemsArray = await AsyncStorage.getItem('cartItems');
    itemsArray = JSON.parse(itemsArray);
    if (itemsArray) {
      let array = itemsArray.filter(item => item !== id);
      await AsyncStorage.setItem('cartItems', JSON.stringify(array));
      getDataFromDB();
    }
  };

  const updateQuantity = async (id, type) => {
    let updateProducts = product.map(item => {
      if (item.id === id) {
        let newQuantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1;
        item.quantity = newQuantity > 0 ? newQuantity : removeItemFromCart(id);
      }
      return item;
    });
    setProduct(updateProducts);
    getTotal(updateProducts);
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
      style={styles.touchable}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={data.productImage} />
      </View>
      <View style={styles.productDetail}>
        <View>
          <Text>{data.productName}</Text>
          <View style={styles.quantityView}>
            <Text style={styles.quantityText}>
              {data.productPrice * data.quantity}₺
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: Colors.red,
                textDecorationLine: 'line-through',
              }}>
              {data.productPrice * data.quantity +
                (data.productPrice * data.quantity) / 20}
              ₺ {/* ₺ eski fiyat */}
            </Text>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonGroupView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => updateQuantity(data.id, 'decrease')}>
              <MaterialCommunityIcons name="minus" size={16} />
            </TouchableOpacity>
            <Text>{data.quantity}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => updateQuantity(data.id, 'increase')}>
              <MaterialCommunityIcons name="plus" size={16} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => removeItemFromCart(data.id)}>
            <MaterialCommunityIcons name="delete-outline" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '30%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundLight,
    marginRight: 22,
    borderRadius: 10,
  },
  touchable: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
    marginTop: 4,
  },
  quantityText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '500',
    marginRight: 4,
    maxWidth: '85%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productDetail: {
    flex: 1,

    height: '100%',
    justifyContent: 'space-around',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonGroupView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: Colors.backgroundLight,
    padding: 4,
    borderRadius: 100,
    borderWidth: 0.4,
    opacity: 0.5,
  },
  deleteButton: {
    backgroundColor: Colors.backgroundMedium,
    color: Colors.backgroundLight,
    padding: 8,
    borderRadius: 100,
    opacity: 0.5,
  },
});

export default Cart;
