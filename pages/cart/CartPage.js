import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import { checkToken } from '../../component/common';
import Axios from '../../component/axios';

function NonGoodsPage({navigation}) {
    return (
        <View style={styles.noncontainer}>
            <Image source={require('../../images/noncart.jpg')} style={styles.nonImage} resizeMode='cotain'/>
            <Text style={styles.nonHeading}>新增商品以啟用購物車</Text>
            <Text style={styles.nonText}>新增餐廳或商店中的商品後，您的購物車即會在這裡顯示。</Text>
            <Button
              title="開始選購"
              onPress={()=> navigation.navigate('瀏覽')}
            />
        </View>
    )
}


function CartPage() {
    const navigation = useNavigation();
    const [data, setData] = useState(null)
    const [cart_list , setcart] = useState([])
    const renderCartItem = ({ item }) =>{
        const rightSwipeActions = () => (
            <TouchableOpacity
              style={styles.deleteContainer}
              onPress={() => deleteItem(item.cart_id)}
            >
              <Text style={styles.deleteText}>刪除</Text>
            </TouchableOpacity>
        )
        return(
            <Swipeable renderRightActions={rightSwipeActions}>
                <View style={styles.cartContainer}>
                    <Image source={item.image} style={styles.cartImage} resizeMode='cover'/>
                    <View style={styles.cartTextView}>
                        <Text style={styles.cartStore}>{item.store_name}</Text>
                        <Text style={styles.cartContent}>{item.goods_name}・${item.price}</Text>
                        <Text style={styles.cartQuantity}>數量：{item.quantity}</Text>
                    </View>
                </View>
            </Swipeable>
        )
    }
    const checkhandler = () =>{
        if (data && data.length > 0) {
            // 歐對了這有可能要加一下按下送出訂單後，會傳送通知
            Alert.alert(
                '確認結帳',
                '確定要送出訂單嗎？',
                [
                    {
                        text: '取消',
                        style: 'cancel',
                    },
                    {
                        text: '確定',
                        onPress: () => {
                            // 這裡放送出訂單的相關程式碼
                            Axios().post("order/add/",JSON.stringify({cart_list:cart_list,payment_method:"到店取付"}))
                            .then((res) => {
                                console.log(res.data)
                                alert("訂單送出摟，請留意訊息")
                            })
                            .catch((err) => {
                                console.log(err)
                                alert("出現意外問題")
                            })
                            // 清空購物車
                            setData([]);
                        },
                    },
                ],
                { cancelable: false }
            )
        } 
        else {
            console.log('購物車是空的');
        }
    }

    const deleteItem = (id) => {
        // 左滑刪除選項
        const newData = data.filter((item) => item.id !== id)
        setData(newData)
    }
    useEffect(()=>{
        if(checkToken()){
            Axios().get('cart/get/')
            .then((res) => {
                let resp = res.data
                console.log(resp)
                setData(resp)
                let tmp = []
                for(let i = 0;i<resp.length;i++){
                    tmp.push(resp[i].cart_id)
                }
                setcart(tmp)
            })
            .catch((err) => {
                console.log(err)
                // alert("出現意外問題")
                // navigation.navigate("首頁")
            })
        }
        else{
            navigation.navigate("登入")
        }
    },[])
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>購物車</Text>
        {data && data.length > 0 ?
            <FlatList
            data={data}
            keyExtractor={(item)=>item.cart_id.toString()}
            renderItem={renderCartItem}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            />
        :
        <NonGoodsPage navigation={navigation} />
        }
        {data && data.length > 0 && (
        <View style={styles.fixedButtonContainer}>
            <TouchableOpacity style={styles.button} onPress={checkhandler}>
            <Text style={styles.buttonText}>結帳</Text>
            </TouchableOpacity>
        </View>
        )}
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
export default CartPage