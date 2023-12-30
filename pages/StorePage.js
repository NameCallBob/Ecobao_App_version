import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import RecommendGoods from '../components/storeGoods/RecommendGoods';
import InfoModal from '../components/storeGoods/InfoModal';
import Menu from '../components/storeGoods/Menu';
import LoadingScreen from '../components/LoadingScreen';
import Axios from '../component/axios';import { putPic } from '../component/common';
/**
 *餐廳頁面
 */
function StorePage() {
    const route = useRoute()
    const {sid} = route.params;
    const [modalVisible, setModalVisible] = useState(false)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            Axios().get("store_sch/id/",{params:{sid:sid}})
            .then((res) => {
                let resp = res.data
                console.log(resp)
                setData(resp)
                console.log(data)
                
            })
            .catch((err) => {
                console.log(err)
                alert("error occur")
            })
            
            setLoading(false);
        }, 2000); // 模擬2秒延遲
    }, []);

  return (
    <ScrollView>
        {data && data.map((data) =>(
        <View>
        <View style={styles.storeImageContainer}>
            <Image source={{url:putPic(data.pic)}} style={styles.storeImage}/>
        </View>
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
                <View style={styles.storeInfo}>
                        <Text style={styles.storeName}>{data.name}</Text>
                        <Text style={styles.storeBasic}>
                            ★{data.rating}
                            <Text> ({data.score}+評分)·{data.type}</Text>
                        </Text>
                </View>
            </TouchableOpacity>
            <InfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} data={data}/>
            <RecommendGoods/>
            <Menu sid ={sid} />
        </View>
        </View>
        ))}
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
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
    storeImageContainer: {
        alignItems: 'center',
        marginBottom: 5,
    },
    storeImage: {
        width: '100%',
        height: 210,
        resizeMode: 'cover',
    },
    storeName: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    storeBasic: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10
    },
  });
export default StorePage