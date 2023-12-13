import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity, Button, Image } from 'react-native';
import QuantityButton from '../QuantityButton';


/**
 * 點擊商品後會從下方跳出一個modal，此時可以選擇是否要將該商品加入cart
 * @param {boolean} modalVisible - modal狀態
 * @param {boolean} setModalVisible - set modal 狀態
 * @param {object} data - 傳送good information
 * @returns 
 */
function GoodInfo({ modalVisible, setModalVisible, data}) {
    if(!data){return null}

    const addCart = () =>{
        console.log("商品已加入購物車")
        setModalVisible(false)
    }


    return(
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>{data.name}</Text>
                    <Text style={styles.modalType}>NT${data.price}</Text>
                    <QuantityButton modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                </View>  
            </View>
          </TouchableWithoutFeedback>
        </Modal>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        width: '100%',
        height: '60%',
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    modalType: {
        fontSize: 20,
        marginTop:5,
        marginBottom: 30,
        fontWeight: 'bold',
    },
    modalText: {
        fontSize: 25,
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
    }
});
export default GoodInfo