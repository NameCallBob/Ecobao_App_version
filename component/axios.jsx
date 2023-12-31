import axios from "axios";
import { retrieveToken,saveToken } from "./common";
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 串連前後端用
 * @returns axios func
 */
export default function Axios() {
    
    let ax = axios.create({
      baseURL: "https://217a-1-174-129-90.ngrok-free.app/",
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': "123",
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA0MDQ1ODc5LCJpYXQiOjE3MDQwNDIyNzksImp0aSI6IjA4MWQwZDc0OGZjODQ1YmQ4MzNmMTUzZDNhOWVlMzJkIiwidXNlcl9pZCI6ImFkbWluMDEiLCJ1aWQiOiJhZG1pbjAxIiwiYWNjb3VudCI6ImJvYiJ9.FhPYm_VFB91JWnNWBfJ31fuBPAs9ReIFK2-iPeZ5VLE`
      },
  });
    
  
 
  

  return ax;
}



