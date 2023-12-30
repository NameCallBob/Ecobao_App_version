import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Axios from '../component/axios';


function NonGoodsPage({navigation}) {
    return (
        <View style={styles.noncontainer}>
            <Image source={require('../images/noncart.jpg')} style={styles.nonImage} resizeMode='cotain'/>
            <Text style={styles.nonHeading}>新增訂單以啟用我的訂單</Text>
            <Text style={styles.nonText}>新增訂單後後，您的訂單即會在這裡顯示。</Text>
            <Button
              title="開始選購"
              onPress={()=> navigation.navigate('瀏覽')}
            />
        </View>
    )
}


function OrderPages() {
    const navigation = useNavigation();
    const [data, setData] = useState(null)
    const renderCartItem = ({ item }) =>{
        return(
            <View style={styles.cartContainer}>
                {/* <Image source={item.image} style={styles.cartImage} resizeMode='cover'/> */}
                <View style={styles.cartTextView}>
                    <Text>{item.order_time}</Text>
                    <Text style={styles.cartStore}>{item.orderfoods[0].store_name}</Text>
                    <Text style={styles.cartContent}>價格：{item.total}</Text> 
                    <Text style={styles.cartContent}>訂單狀態：{item.status}</Text> 
                </View>
            </View>
        )
    }
    useEffect(()=>{
        // 串接資料
        Axios().get("orderv/all/",{params:{status:"未接單"}})
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
        <Text style={styles.heading}>我的訂單</Text>
        {data && data.length > 0 ?
            <FlatList
            data={data}
            keyExtractor={(item)=>item.oid.toString()}
            renderItem={renderCartItem}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            />
        :
        <NonGoodsPage navigation={navigation} />
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        paddingTop: '15%',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 16,
        marginLeft: 10,
    },
    noncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    nonImage: {
        width: 250,
        height: 250,
    },
    nonHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    nonText: {
        fontSize: 18,
        marginVertical: 16,
        marginLeft: 30,
        marginRight: 30,
        color: '#606060',
        textAlign: 'center',
    },
    cartContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#e2e2e2',
        margin: 5,
        padding: 10,
    },
    cartImage:{
        width: 90,
        height: 90,
        borderRadius: 100
    },
    cartTextView:{
        flexDirection: 'column'
    },
    cartStore:{
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    cartName:{
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    cartContent:{
        fontSize: 18,
        marginHorizontal: 10,
        marginTop: 5,
        fontWeight: 'bold'
    },
    cartQuantity:{
        fontSize: 18,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 40,
        alignItems: 'center',
        marginBottom: 10,
        
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    deleteContainer: {
        backgroundColor: 'red',
        borderRadius: '10',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        margin: 5,
        padding: 10,
    },
      deleteText: {
        color: 'white',
        fontWeight: 'bold',
    },
  });
export default OrderPages