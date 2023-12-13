import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import GoodInfo from './GoodInfo';

function Menu() {
    const products = [
        { id: 1, name: '商品1', price: 100, image: require('../../images/test.png') },
        { id: 2, name: '商品2', price: 150, image: require('../../images/test.png') },
        { id: 3, name: '商品3', price: 200, image: require('../../images/test.png') },
        { id: 4, name: '商品4', price: 250, image: require('../../images/test.png') },
        { id: 5, name: '商品5', price: 300, image: require('../../images/test.png') },
    ];
    
    const [modalVisible, setModalVisible] = useState(false)
    const [selectGood, setSelectGood] = useState(null)
    const renderMenuItem = ({ item }) => (
        <TouchableOpacity 
        style={styles.mealItem}
        onPress={()=>{
          setModalVisible(true)
          setSelectGood(item)
        }}
        >
            <View>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemPrice}>NT${item.price}</Text>
            </View>
            <Image source={item.image} style={styles.itemImage} />
        </TouchableOpacity>
    )
  return (
    <View>
        <Text style={styles.heading}>本店餐點</Text>
        <FlatList
        data={products}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id.toString()}
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