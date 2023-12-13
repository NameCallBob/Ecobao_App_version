import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'


/**
 * 搜尋商品input
 * @returns 
 */
function Search() {
  const [value, setValue] = useState("")
  console.log(value)

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>查詢美食</Text>
        <View style={styles.searchContainer}>
        <TextInput
            style={styles.searchInput}
            placeholder="搜尋商品..."
            placeholderTextColor="#888"
            onChangeText={(text)=>setValue(text)}
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