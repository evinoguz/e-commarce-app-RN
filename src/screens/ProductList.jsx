import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../themes/Colors';
import Section from '../components/Section';
import Entypo from 'react-native-vector-icons/Entypo';
const ProductList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route?.params?.data;
  const title = route?.params?.title;
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          paddingTop: 16,
          paddingLeft: 16,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack('Home')}>
          <Entypo
            name="chevron-left"
            style={{
              fontSize: 18,
              color: Colors.backgroundDark,
              backgroundColor: Colors.white,
              padding: 12,
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
      </View>
      <Section title={title} data={data} bool={false} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 16,
  },
});
export default ProductList;
