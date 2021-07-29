import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const width = Dimensions.get('screen').width / 2 - 30;

const PlantsCard = ({plant, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {...plant})}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View
            style={{
              backgroundColor: plant.like
                ? 'rgba(245,42,42,0.2)'
                : 'rgba(0,0,0,0.42)',
              width: 30,
              alignSelf: 'flex-end',
              borderRadius: 15,
              paddingVertical: 4,
              marginRight: 15,
              marginTop: 10,
            }}>
            <Icon
              name="favorite"
              size={20}
              style={{alignSelf: 'center'}}
              color={plant.like ? COLORS.red : COLORS.black}
            />
          </View>
          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={plant.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 18, alignSelf: 'center'}}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 8,
              marginTop: 6,
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              {plant.price}
            </Text>
            <View
              style={{
                width: 25,
                height: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
              }}>
              <Icon
                name="add"
                size={18}
                style={{alignSelf: 'center'}}
                color={COLORS.white}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    width,
    height: 220,
    backgroundColor: COLORS.light,
    marginHorizontal: 2,
    borderRadius: 10,
  },
  icon: {
    alignSelf: 'flex-end',
  },
});

export default PlantsCard;
