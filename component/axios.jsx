import axios from "axios";
import { retrieveToken,saveToken } from "./common";
import * as SecureStore from 'expo-secure-store';
/**
 * 串連前後端用
 * @returns axios func
 */
export default function Axios() {
  const gettoken = async() => {
    let tmp 
    let token = await SecureStore.getItemAsync('token').then(token =>{ return token})
    tmp = JSON.stringify(token)
    console.log(tmp)
    return tmp
}    
let ax = axios.create({
      baseURL: "https://217a-1-174-129-90.ngrok-free.app/",
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': "123",
        'Authorization': `Bearer  `+JSON.parse(JSON.stringify(gettoken())).toString() 
      },
  });
    
  
 
  

  return ax;
}



