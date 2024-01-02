import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon2 from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import AccountPage from './pages/AccountPage';
import BrowsePage from './pages/BrowsePage';
import NotifyPage from './pages/NotifyPage';
import CartPage from './pages/cart/CartPage';
import OrderPages from './pages/OrderPages';
import LoginPage from './components/account/Login';
import TypeStoreOutputPage from './pages/type/Type_Brower';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  const HomeScreen = () => {return <HomePage/>}
  const StoreScreen = () => {return <StorePage/>}
  const AccountScreen = () => {return <AccountPage/>}
  const BrowseScreen = () => {return <BrowsePage/>}
  const NotifyScreen = () => {return <NotifyPage/>}
  const CartScreen = () => {return <CartPage/>}
  const OrderScreen = () => {return <OrderPages/>}
  const LoginSreen = () => {return <LoginPage/>}
  const TypeOutputScreen = () => {return <TypeStoreOutputPage />}
  const BottomTabs = () =>{
    return(
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          activeTintColor: 'green',
        }}
      >
        <Tab.Screen name="首頁" component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FoundationIcon name="home" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name="瀏覽" component={BrowseScreen} 
          options={{
            tabBarIcon: ({ color, size })=>(
              <FontAwesomeIcon name="search" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name="購物車" component={CartScreen} 
          options={{
            tabBarIcon: ({ color, size })=>(
              <FontAwesomeIcon2 name="shopping-cart" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name="我的訂單" component={OrderScreen} 
          options={{
            tabBarIcon: ({ color, size })=>(
              <FontAwesomeIcon name="list-ul" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name="通知" component={NotifyScreen} 
          options={{
            tabBarIcon: ({ color, size })=>(
              <FontAwesomeIcon name="bell" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name="個人頁面" component={AccountScreen} 
          options={{
            tabBarIcon: ({ color, size })=>(
              <MaterialIcon name="person" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'black',
        }}
      >
        {/* Stack 必須加全部的 Screen，Tab則是若要將Screen顯示在導覽列才需添加 */}
        <Stack.Screen
          name='首頁'
          component={BottomTabs}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = '類別輸出'
          component={TypeOutputScreen}
        />
        <Stack.Screen
          name = '店家'
          component={StoreScreen}
        />
        <Stack.Screen
          name = '個人頁面'
          component={AccountScreen}
        />
        <Stack.Screen
          name = '瀏覽'
          component={BrowseScreen}
        />
        <Stack.Screen
          name='通知'
          component={NotifyScreen}
        />
        <Stack.Screen
          name='購物車'
          component={CartScreen}
        />
        <Stack.Screen
          name='我的訂單'
          component={OrderScreen}
        />
        <Stack.Screen
          name="登入"
          component={LoginSreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


