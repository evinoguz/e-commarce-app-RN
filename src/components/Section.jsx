import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ProductCard from './ProductCard';
import {useNavigation} from '@react-navigation/native';

const Section = ({title, data, bool}) => {
  const navigation = useNavigation();
  const dataAccess = bool ? data.slice(0, 2) : data;
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <View style={styles.titleCount}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.count}>({data?.length || 0})</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductList', {data, title})}>
          <Text style={styles.button}>{bool ? 'See All' : ''}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        {data === 'products'
          ? data?.map(data => <ProductCard key={data.id} data={data} />)
          : dataAccess?.map(data => <ProductCard key={data.id} data={data} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black,
    letterSpacing: 1,
  },
  count: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black,
    opacity: 0.5,
    marginLeft: 5,
  },
  button: {
    fontSize: 14,
    color: Colors.blue,
    fontWeight: '400',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
export default Section;
