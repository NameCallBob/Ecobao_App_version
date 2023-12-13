import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import Search from '../components/home/Search';
import Recommand from '../components/home/Recommand';
import StoreList from '../components/home/StoreList';

/**
 * 家
 */
const HomePage = () => {
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
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleEndReached = () =>{
    if(!loadingMore){
      setLoadingMore(true);
      // 實現上拉加載的邏輯，例如獲取更多數據追加到現有數據中
      setLoadingMore(false)
    }
  }

  const handleRefresh = () =>{
    setRefreshing(true);
    // 實現下拉刷新的邏輯，例如重新從數據源獲取數據
    setRefreshing(false);
  }

  useEffect(()=>{
    setData(testdata)
  },[])

  return (
    <View style={styles.container}>
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
      {/* 搜尋美食 */}
      <Search />
      {/* 推薦店家 */}
      <Recommand />
      {/* 查看店家 */}
      <View>
        <Text style={styles.heading}>查看店家</Text>
        <StoreList data={data} handleEndReached={handleEndReached} />
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: '15%',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  storeContainer: {
    margin: 10
  },
  
});

export default HomePage;
