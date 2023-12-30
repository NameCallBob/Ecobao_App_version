import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import Search from '../components/home/Search';
import Recommand from '../components/home/Recommand';
import StoreList from '../components/home/StoreList';
import Axios from "../component/axios.jsx"
// import { checkToken } from '../component/common.jsx';
/**
 * 首頁
 */
const HomePage = () => {
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  // 串接
  
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
    Axios().get("store_sch/all/")
    .then((res) => {
      let resp = res.data
      console.log(resp)
      setData(resp)
    })
    .catch((err) => {
      console.log(err)
    })
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
