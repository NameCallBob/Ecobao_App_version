import Axios from "../component/axios.jsx";
import {Alert} from "react-native"
// import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 檢查是否登入
 */
 function checkToken(){
    var status = true
    Axios().post('api/token/verify/',
    JSON.stringify({"token": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA0MDQ1ODc5LCJpYXQiOjE3MDQwNDIyNzksImp0aSI6IjA4MWQwZDc0OGZjODQ1YmQ4MzNmMTUzZDNhOWVlMzJkIiwidXNlcl9pZCI6ImFkbWluMDEiLCJ1aWQiOiJhZG1pbjAxIiwiYWNjb3VudCI6ImJvYiJ9.FhPYm_VFB91JWnNWBfJ31fuBPAs9ReIFK2-iPeZ5VLE'})
    )
    .then((res) => {
        let response = res
        if (response.status == 200){
            status = true
        }
    })
    .catch((err) => {
        let status = err.response.status
        if (status == 404){
            Alert.alert(
                "尚未登入","請先登入查看更多資訊，一起環飽！"
            )        
        }
        else if (status == 400){
            Alert.alert(
                "尚未登入","請先登入查看更多資訊，一起環飽！"
            )
        }
        else if (status == 500){
            console.log('系統出現問題')
        }
        else if (status == 503){
            console.log('系統關閉或維護中！')
        }
        console.log(err)
        status = false
        
    })
    return status
}


function putPic(name){

    let url = "https://217a-1-174-129-90.ngrok-free.app/";
  
    return url + name
  
}

export {checkToken , putPic}