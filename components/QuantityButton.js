import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { checkToken } from '../component/common';
import Axios from '../component/axios';
import { useNavigation } from '@react-navigation/native';

/**
 * 這裡面有 數量按鈕、加入購物車按鈕
 * @returns 
 */
function QuantityButton({ gid,modalVisible, setModalVisible }) {
    const [quantity, setQuantity] = useState(1)
    const navg = useNavigation()
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }
    
      const decreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1)
        }
    }
      const addCart = () =>{
        // console.log("商品已加入購物車，數量為：", quantity)
        if (checkToken(navg)){
            Axios().post("cart/add/",JSON.stringify(
                {
                    "gid": gid,
                    "quantity":quantity
                }
            ))
            .then((res) => {
                alert(" 加入成功！")
                navg.navigate("購物車")
                
            })
            .catch((err) => {
                console.log(err)
                alert("發生問題：（，請選購其他剩食")
            })
        }
        else{
            // alert("要先登入喔！")
            navg.navigate("登入")
        }
        setModalVisible(false)
    }  

  return (
    <View>
    <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity}>
            <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
    </View>
        <TouchableOpacity onPress={() => addCart()} style={styles.button}>
            <Text style={styles.buttonText}>加入購物車</Text>
        </TouchableOpacity>
    </View>

  )
}
const styles = StyleSheet.create({
    quantityContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginEnd: '60%',
        backgroundColor: '#e6e6e6',
        borderRadius: 50,
        paddingVertical: 5, // 調整上下內邊距
    },
    quantityButton: {
        fontSize: 30,
        paddingHorizontal: 20,
    },
    quantity: {
        fontSize: 20,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 40,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default QuantityButton