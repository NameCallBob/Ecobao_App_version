import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import StoreList from '../../components/home/StoreList';
import { useRoute } from '@react-navigation/native';
import Axios from '../../component/axios';
/**
 * 點選類別跳轉至商品查詢結果！
 */
const TypeStoreOutputPage = () => {
    const route = useRoute()
    const {value} = route.params;

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
    Axios().get("store_sch/type/",{params:{'type':value}})
    .then((res) => {
        console.log(res.data)
        setData(res.data)
    })  
    .catch((err) => {
        console.log(err)
    })
  },[])

  return (
    <View style={styles.container}>
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
      <View>
        <Text style={styles.heading}>一般店家</Text>
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

export default TypeStoreOutputPage;