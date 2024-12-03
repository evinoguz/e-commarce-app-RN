import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../themes/Colors';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Entypo
          name="shopping-bag"
          style={{
            fontSize: 18,
            color: Colors.grayMedium,
            backgroundColor: Colors.grayLight,
            padding: 16,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
        <MaterialCommunityIcons
          name="cart"
          style={{
            fontSize: 18,
            color: Colors.grayMedium,
            backgroundColor: Colors.grayLight,
            padding: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: Colors.grayLight,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default Header;
