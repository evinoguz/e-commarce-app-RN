import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import {Colors} from '../themes/Colors';
import ProductCard from '../components/ProductCard';
import {Items} from '../database/Database';
import Section from '../components/Section';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];

    for (let i = 0; i < Items.length; i++) {
      if (Items[i].category === 'product') {
        productList.push(Items[i]);
      } else {
        accessoryList.push(Items[i]);
      }
    }
    setProducts(productList);
    setAccessory(accessoryList);
  };
  useEffect(() => {
    getDataFromDB();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={{marginBottom: 10, padding: 16}}>
          <Text style={styles.titleName}>Hi-Fi Shop &amp; Service</Text>
          <Text style={styles.descName}>
            Audio shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <Section title="Products" data={products} bool={true} />
        <Section title="Accessories" data={accessory} bool={true} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%',
  },
  titleName: {
    fontSize: 26,
    color: Colors.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  descName: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1,
    lineHeight: 24,
  },
});

export default Home;
