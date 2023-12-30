import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function InfoModal({modalVisible, setModalVisible, data}) {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
        }}
    >
        <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalTitle}>{data.name}</Text>
                <Text style={styles.modalType}>{data.type}</Text>
                <Text style={styles.modalText}><Icon name="map-marker" size={25}/>    {data.address}</Text>
                <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 25,
                    marginBottom: 25,
                }}
                />
                <Text style={styles.modalText}><Icon name="clock-outline" size={25}/>    打烊時間：00:00{data.closingTime}</Text>
                <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 25,
                    marginBottom: 25,
                }}
                />
                <Text style={styles.modalText}><Icon name="star" size={25}/>    {data.rating}({data.score}+評分)</Text>
                <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 25,
                    marginBottom: 25,
                }}
                />
                <Text>[本店開立紙本發票]本商店肉品原產地資訊標示於餐點描述中，本平台借鑑Uber Eat，稍有相似，純屬巧合。</Text>
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
        marginBottom: 30
    },
    modalText: {
        fontSize: 25,
    }
});
export default InfoModal