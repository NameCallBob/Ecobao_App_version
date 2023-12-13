import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


/**
 * 這裡面有 數量按鈕、加入購物車按鈕
 * @returns 
 */
function QuantityButton({ modalVisible, setModalVisible }) {
    const [quantity, setQuantity] = useState(1)
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }
    
      const decreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1)
        }
    }
      const addCart = () =>{
        console.log("商品已加入購物車，數量為：", quantity)
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