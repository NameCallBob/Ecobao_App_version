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
  
  const testdata = [
    { id: 1, name: '中式', image: require('../images/中式.jpg') ,value:'中式'},
    { id: 2, name: '炸物', image: require('../images/炸物.jpg') ,value:'炸物'},
    { id: 3, name: '日式', image: require('../images/日式.jpg') ,value:'日式'},
    { id: 4, name: '手搖飲', image: require('../images/手搖飲.png') ,value:'手搖飲'},
  ];
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const handlePress = (value) =>{
    navigation.navigate('類別輸出', {value:value})
  }

  const renderCategory = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={()=>handlePress(item.value)}>
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
          keyExtractor={(item) => item.value.toString()}
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
    justifyContent: 'space-around',
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
    width: 180,
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
