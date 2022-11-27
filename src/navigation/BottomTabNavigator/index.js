import React from "react";
import { Image,  View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute, } from '@react-navigation/native';
import Loading from "../../screens/loading";
import { COLORS, icons,  } from "../../constants";
import styles from "./styles";
import { HomeStack, FavouriteStack, AddedCartStack } from "../StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
  
    <Tab.Navigator initialRouteName='Cart'
     screenOptions={() => ({
      tabBarActiveTintColor: COLORS.yellow,
      tabBarInactiveTintColor: COLORS.black2,
      tabBarStyle:styles.tabBarStyle,
    })} >
      
      <Tab.Screen name="Home" component={HomeStack}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => <Image style={[styles.home,]} source={icons.home} />
        })}
      />
          <Tab.Screen name="Favourites" component={FavouriteStack} 
      options={() => ({
        headerShown: false,
        tabBarIcon: () => <Image style={[styles.heart,]} source={icons.heart} />
      })}
       />
      <Tab.Screen name="MyOrders" component={Loading} 
      options={() => ({
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: () =><View style={styles.circle} >
          <Image style={[styles.bag,]} source={icons.bag} />
          <Text style={styles.txt}>My Orders</Text>
      </View>
      })}
     />
     <Tab.Screen name="Notification" component={Loading}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => <View>
            <Image style={[styles.well,]} source={icons.notification} />
            <View source={icons.redCircle} style={styles.notifications} >
              <Text style={styles.text}>10</Text>
            </View>
          </View>
         
        })}
      />
  
      <Tab.Screen name="Cart" component={AddedCartStack} 
      options={() => ({
        headerShown: false,
        tabBarIcon: () => <Image style={[styles.buy,]} source={icons.buy} />
       
      })}
      />
    </Tab.Navigator>
  )
}


export default TabNavigator;

