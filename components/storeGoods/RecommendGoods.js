import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import GoodInfo from './GoodInfo';



function RecommendGoods() {
    // const products = [
    //     { id: 1, name: '商品1', price: 100, image: require('../../images/test.png') },
    //     { id: 2, name: '商品2', price: 150, image: require('../../images/test.png') },
    //     { id: 3, name: '商品3', price: 200, image: require('../../images/test.png') },
    //     { id: 4, name: '商品4', price: 150, image: require('../../images/test.png') },
    //     { id: 5, name: '商品5', price: 300, image: require('../../images/test.png') },
    // ];

    const [modalVisible, setModalVisible] = useState(false)
    const [selectGood, setSelectGood] = useState(null)

    const renderRecommendItem = ({ item }) => (
      <View>
        <TouchableOpacity 
          key={item.id} 
          style={styles.productCard} 
          onPress={()=>{
            setModalVisible(true)
            setSelectGood(item)
          }}
        >
          <Image source={item.image} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>NT${item.price}</Text>
        </TouchableOpacity>
      </View>
    )
    console.log(selectGood)
  return (
    <View>
        {/* <Text style={styles.heading}>精選商品</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderRecommendItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
        <GoodInfo modalVisible={modalVisible} setModalVisible={setModalVisible} data={selectGood}/> */}
        <Text>功能尚未開啟</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 16,
    },
    productCard: {
      marginRight: 16,
    },
    productImage: {
      width: 150,
      height: 150,
      borderRadius: 8,
    },
    productName: {
      fontSize: 16,
      marginTop: 8,
    },
    productPrice: {
      fontSize: 14,
      color: 'green',
      marginTop: 4,
    },
  });
export default RecommendGoods