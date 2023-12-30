import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView , Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Axios from '../../component/axios';
import { putPic } from '../../component/common';
/**
 * 推薦店家列表
 * @returns 
 */
function Recommand() {
  const navigation = useNavigation();
  const [stores,setStores] = useState(null)
  useEffect(() => {
    Axios().get("store_sch/prefer/")
    .then((res) => {
      let response = res.data
      setStores(response)
    })
    .catch((err) => {
      let response = err.response
      if (response.status == 503){
        Alert("伺服器未開啟")
      }
      else if (response.status == 404){
        Alert("無")
      }
    })
  },[])
  
  const handlePress = (id) =>{
    navigation.navigate('店家', {"sid":id})
  }
  return (
    <View>
        <Text style={styles.heading}>精選店家</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stores && stores.map(store => (
          <TouchableOpacity key={store.sid} onPress={()=>handlePress(store.sid)}>
            <View key={store.upid} style={styles.storeCard}>
            <Image source={{url:putPic(store.pic)}} style={styles.storeImage} />
            <Text style={styles.storeName}>{store.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 16,
    },
    storeCard: {
      marginRight: 16,
    },
    storeImage: {
      width: 150,
      height: 150,
      borderRadius: 8,
    },
    storeName: {
      fontSize: 16,
      marginTop: 8,
    },
  });

export default Recommand