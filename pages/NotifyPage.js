import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

/**
 *通知頁面
 */
function NotifyPage() {
    const data = [
        {
            id: 1,
            title: '餐點正在準備中',
            content: '啊啊啊啊啊$1450需不需要price?',
            from: '麥當勞',
            date: '11/24',
            time: '19:30',
        },
        {
            id: 2,
            title: '餐點正在準備中',
            content: '欸欸欸欸$163',
            from: '肯德基',
            date: '11/23',
            time: '19:30',
        },
    ]

    const renderItem = ({ item }) =>(
        <View>
            <View style={styles.dataview2}>
                <Text style={styles.dataTitle}>{item.title}</Text>
                <View style={{paddingTop: 15}}>
                    <Text style={styles.dataContent}>{item.content}</Text>
                    <Text style={styles.datafrom}>來自：{item.from}</Text>
                </View>
                <Text style={styles.dataTime}>{item.date} | {item.time}</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 25,
                    marginBottom: 25,
                }}
            />
        </View>
    )
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>通知中心</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        
        
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
    rowView: {
        flexDirection: 'row',
        marginTop: 15
    },
    dataview2:{
        marginLeft: 10
    },
    dataTitle:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    dataContent:{
        fontSize: 18
    },
    datafrom:{
        marginTop:15,
        fontSize: 15
    },
    dataTime:{
        marginTop: 5,
        fontSize: 15,
        color: '#535353'
    }
  });
export default NotifyPage