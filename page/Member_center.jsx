import { Text,View,Alert,StyleSheet } from "react-native";
import { checkToken } from "../component/common.jsx";
import { useState } from "react";
// import Axios from "?"
export default function Member_Center(){
    /**
     *  會員中心畫面
     */
    const styled = StyleSheet.create({
        body:{
            paddingTop:"10px",
            paddingBottom:"10px"
        }
    })
    
    return(
        <View>
            <Text>會員中心</Text>
            <View style={styled}>
            </View>
        </View>
    )
}
