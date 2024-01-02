import React, { useState ,useRef} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Axios from '../../component/axios';


/**
 * 搜尋商品input
 * @returns 
 */
function Search({search,SetSearch,data,setData}) {
  const inputRef = useRef(null)
  const handleSearch = () => {
    Axios().get("store_sch/search/",{'params':{'name':search}})
    .then((res) => {
      let resp = res.data
      setData(resp)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <View style={styles.constainer}>
        <Text style={styles.heading}>查詢美食</Text>
        <View style={styles.searchContainer}>
        <TextInput
            ref={inputRef}
            style={styles.searchInput}
            placeholder="搜尋商品..."
            placeholderTextColor="#888"
            value={search}
            onChangeText={(text)=>SetSearch(text)}
            onSubmitEditing={handleSearch}
            clearButtonMode='always'
        />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    constainer: {
      paddingRight: 5,
      paddingLeft: 5,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    searchContainer: {
      marginTop: 1,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 100,
      padding: 15,
      marginBottom: 16,
    },
    searchInput: {
      fontSize: 16,
      color: '#333',
    },
  });
export default Search