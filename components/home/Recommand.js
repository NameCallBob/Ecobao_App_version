import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * 推薦店家列表
 * @returns 
 */
function Recommand() {
  const navigation = useNavigation();
  const stores = [
    { id: 1, name: '商店1', image: require('../../images/store.jpg'), rating:3.2 },
    { id: 2, name: '商店2', image: require('../../images/store.jpg'), rating:4.9 },
    { id: 3, name: '商店3', image: require('../../images/store.jpg'), rating:5.0 },
    { id: 4, name: '商店4', image: require('../../images/store.jpg'), rating:4.5 },
    { id: 5, name: '商店5', image: require('../../images/store.jpg'), rating:4.4 },
      ];
  const handlePress = (id) =>{
    navigation.navigate('店家', {id})
  }
  return (
    <View>
        <Text style={styles.heading}>精選店家</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stores.map(store => (
          <TouchableOpacity key={store.id} onPress={()=>handlePress(store.id)}>
            <View key={store.id} style={styles.storeCard}>
            <Image source={store.image} style={styles.storeImage} />
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