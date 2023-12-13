import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import Search from '../components/home/Search';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoadingScreen from '../components/LoadingScreen';

/**
 * 家
 */
const BrowsePage = () => {
  const navigation = useNavigation();
  // test data
  const testdata = [
    { id: 1, name: '商店1', image: require('../images/store.jpg'), rating:3.2 },
    { id: 2, name: '商店2', image: require('../images/store.jpg'), rating:4.9 },
    { id: 3, name: '商店3', image: require('../images/store.jpg'), rating:5.0 },
    { id: 4, name: '商店4', image: require('../images/store.jpg'), rating:4.5 },
    { id: 5, name: '商店5', image: require('../images/store.jpg'), rating:4.4 },
    { id: 6, name: '商店6', image: require('../images/store.jpg'), rating:3.2 },
    { id: 7, name: '商店7', image: require('../images/store.jpg'), rating:4.9 },
    { id: 8, name: '商店8', image: require('../images/store.jpg'), rating:5.0 },
    { id: 9, name: '商店9', image: require('../images/store.jpg'), rating:4.5 },
    { id: 10, name: '商店10', image: require('../images/store.jpg'), rating:4.4 },
  ];
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const handlePress = (id) =>{
    navigation.navigate('店家', {id})
  }

  const renderCategory = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={()=>handlePress(item.id)}>
      <View style={styles.categoryItem}>
        <Image source={item.image} style={styles.categoryImage} resizeMode='center' />
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );


    // 模擬API請求延遲（我這次有記得寫loading哈哈）
    useEffect(() => {
      setTimeout(() => {
          setData(testdata);
          setLoading(false);
      }, 2000); // 模擬2秒延遲
    }, []);

  return (
    <View style={styles.container}>
      {loading ? 
      <LoadingScreen/>
      :
      (
      <View>
        {/* 搜尋欄 */}
        <Search />
        <Text style={styles.heading}>熱門類別</Text>
        <FlatList
          data={data}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    paddingTop: '15%',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  categoryItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderStyle: 'sold',
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: 'gray',
    
  },
  categoryImage: {
    width: 200,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  categoryText:{
    fontSize: 20,
    fontWeight: 'bold'
  }

});

export default BrowsePage;
