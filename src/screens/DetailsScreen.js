import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const DetailsScreen = ({navigation, route}) => {
  const plant = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack('Details')}
        />
        <Icon name="shopping-cart" size={24} />
      </View>
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <Image source={plant.img} style={{flex: 1, resizeMode: 'contain'}} />
      </View>
      <View style={styles.details}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 5}}>
            Best Choice
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.text}>{plant.name}</Text>
          <View style={styles.price}>
            <Text
              style={{
                fontWeight: '700',
                color: COLORS.white,
                alignSelf: 'center',
              }}>
              {plant.price}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>About</Text>
          <Text style={styles.desc}>{plant.about}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.btnIcon}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>-</Text>
          </View>
          <Text style={{fontSize: 24, marginHorizontal: 10}}>1</Text>
          <View style={[styles.btnIcon, {marginRight: 'auto'}]}>
            <Text
              style={{fontSize: 32, fontWeight: 'bold', alignSelf: 'center'}}>
              +
            </Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={{fontWeight: 'bold', color: COLORS.white}}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
  },
  details: {
    flex: 0.5,
    borderRadius: 15,
    backgroundColor: COLORS.light,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    width: 70,
    paddingVertical: 10,
    backgroundColor: COLORS.green,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  desc: {
    lineHeight: 25,
    marginTop: 5,
  },
  btnIcon: {
    borderWidth: 2,
    width: 60,
    alignItems: 'center',
  },
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
});

export default DetailsScreen;
