import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import COLORS from '../consts/colors';

const categories = ['Popular', 'Organic', 'Synthetic', 'Indoors'];

const CategoryList = props => {
  const [selectCategory, setSelectedCategory] = useState(0);
  return (
    <View style={styles.container}>
      {categories.map((cat, k) => (
        <TouchableOpacity key={k} onPress={() => setSelectedCategory(k)}>
          <Text
            style={[
              styles.text,
              selectCategory === k && styles.selectTextCategory,
            ]}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.green,
  },
  selectTextCategory: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 20,
    borderBottomColor: COLORS.green,
    borderBottomWidth: 3,
  },
});

export default CategoryList;
