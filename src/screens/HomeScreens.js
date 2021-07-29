import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import COLORS from '../consts/colors';
import plants from '../consts/plants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CategoryList from '../components/CategoryList';
import PlantsCard from '../components/PlantsCard';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 24}}>Welcome To</Text>
          <Text style={{color: COLORS.green, fontSize: 32, fontWeight: 'bold'}}>
            Plant Shop
          </Text>
        </View>
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={24} />
          <TextInput style={styles.input} placeholder="search your plants" />
        </View>
        <Icon name="sort" size={40} color={COLORS.green} />
      </View>

      <View style={styles.categoryContainer}>
        <CategoryList />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        data={plants}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PlantsCard plant={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: COLORS.light,
    paddingHorizontal: 5,
    flex: 1,
  },
  input: {
    fontSize: 18,
  },
});

export default HomeScreen;
