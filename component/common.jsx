import Axios from "../component/axios.jsx";
import {Alert} from "react-native"
import * as SecureStore from 'expo-secure-store';

/**
 * 檢查是否登入
 */
 function checkToken(){
    // var status = true
    const check = async() => {
        let token = await SecureStore.getItemAsync('token').then((token) => {
        Axios().post('api/token/verify/',
        JSON.stringify({"token": token })
        )
        .then((res) => {
            let response = res
            if (response.status == 200){
                return true
            }
        })
        .catch((err) => {
            let status = err.response.status
            if (status == 404){
                Alert.alert(
                    "尚未登入","請先登入查看更多資訊，一起環飽！"
                )        
            }
            else if (status == 400 | status == 401){
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
            return false
        })

        })
    }
    
    return check
}


function putPic(name){

    let url = "https://217a-1-174-129-90.ngrok-free.app/";
  
    return url + name
  
}

export {checkToken , putPic}