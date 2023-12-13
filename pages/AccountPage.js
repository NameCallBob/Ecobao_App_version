import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, Linking } from 'react-native';
import AccountItem from '../components/account/AccountItem';
import { useNavigation } from '@react-navigation/native';


/**
 * 帳戶設定（個人資訊）
 */
function AccountPage() {
    const navigation = useNavigation();
    const [account, setAccount] = useState(null)
    const accountdata = { 
      id: 'C110156217', 
      name: '趙伯恩', 
      image: require('../images/test.png') 
    }
    useEffect(()=>{
      setAccount(accountdata)
    },[])
  return (
    <View style={styles.container}>
        {account && (
          <TouchableOpacity key={account.id} onPress={()=>{Alert.alert(account.name)}}>
            <View key={account.id} style={styles.accountView}>
                <Text style={styles.accountText}>{account.name}</Text>
                <Image source={account.image} style={styles.accountImage} />
            </View>
          </TouchableOpacity>
        )}

        <View
        style={{
            borderBottomColor: 'gray',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 25,
            marginBottom: 25,
        }}
        />
        <ScrollView>
        <AccountItem
          iconName="clipboard-list"
          text="我的訂單"
          onPress={() => navigation.navigate('我的訂單')}
        />
        <AccountItem
          iconName="user-plus"
          text="邀請親友"
          onPress={() => Alert.alert(
            '此功能尚未開放',
            '不用期待，沒時間做了ＱＱ'
          )}
        />
        <AccountItem
          iconName="tag"
          text="各式優惠"
          onPress={() => Alert.alert(
            '你沒優惠',
            '你真的沒優惠'
          )}
        />
        <AccountItem
          iconName="question"
          text="幫助"
          onPress={() => Linking.openURL('https://greeneattasty.my.canva.site/ecobaogreenisgreat')}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:5,
      paddingTop: '15%',
      backgroundColor: '#fff',
    },
    accountView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 5,
        marginBottom: 5,
      },
    accountText: {
      fontSize: 40,
      textAlign: 'left',
      fontWeight: 'bold',
    },
    accountImage: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
      borderRadius: 100,
    },
});

export default AccountPage