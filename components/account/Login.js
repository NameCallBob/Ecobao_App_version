
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Axios from "../../component/axios";
import { saveToken } from '../../component/common';
import AsyncStorage from '@react-native-async-storage/async-storage';

//   登入頁面
export default function LoginPage(){
  const navigation = useNavigation();
  const [username, setUsername] = useState('bob');
  const [password, setPassword] = useState('bob')

  const handleLogin =  () => {
      Axios().post("api/token/obtain/",JSON.stringify({
        account:username,
        password:password,
      }))
      .then((res) => {
        alert("登入成功")
        navigation.navigate('首頁');
        AsyncStorage.setItem('JWTtoken',res.data.access)
        
      })
      .catch((err) => {
        alert("帳號密碼錯誤")
      })
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    heading: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '70%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 100,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    button: {
      backgroundColor: 'black',
      paddingVertical: 12,
      paddingHorizontal: 60,
      borderRadius: 100,
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>EcoBǎo</Text>
      <Text style={styles.heading}>登入</Text>
      <TextInput
        style={styles.input}
        placeholder="帳號"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="密碼"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry // 密碼輸入鍵盤
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
    
  );


};


