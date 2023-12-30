import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import GoodInfo from './GoodInfo';
import Axios from '../../component/axios';
import { putPic } from '../../component/common';

function Menu({sid}) {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectGood, setSelectGood] = useState(null)
    const [Store_good,setStoreGood] = useState(null)
    useEffect(() => {
      
      Axios().get("Goods/store/",{params:{"sid":sid}})
      .then((res) => {
        let resp = res.data
        console.log(resp)
        setStoreGood(resp)
      })
      .catch((err) => {
        console.log(err)
      })
    },[])

    const renderMenuItem = ({ item }) => (
        <TouchableOpacity 
        style={styles.mealItem}
        onPress={()=>{
          setModalVisible(true)
          setSelectGood(item.gid)
        }}
        >
            <View>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>數量：{item.quantity}</Text>
                <Text style={styles.itemPrice}>NT${item.price}</Text>
            </View>
            <Image source={{url:putPic(item.food_pic)}} style={styles.itemImage} />
        </TouchableOpacity>
    )
  return (
    <View>
        <Text style={styles.heading}>本店餐點</Text>
        <FlatList
        data={Store_good}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.gid.toString()}
        onEndReachedThreshold={0.1}
        />
        <GoodInfo modalVisible={modalVisible} setModalVisible={setModalVisible} data={selectGood}/>
        
    </View>
  )
}
const styles = StyleSheet.create({
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 16,
    },
    mealItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      itemText: {
        fontSize: 18,
        textAlign: 'left',
      },
      itemPrice: {
        color: 'green'
      },
      itemImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
        resizeMode: 'cover',
        borderRadius: 5,
      },
})
export default Menu