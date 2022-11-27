import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from "react-native";
import { getFocusedRouteNameFromRoute, } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { COLORS, FONTS, icons } from '../../constants'


import { createDrawerNavigator } from "@react-navigation/drawer";
import Loading from "../../screens/loading";
import { SIZES } from "../../constants";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  return (
    <View>
      <View style={styles.head}>
        <Text style={[styles.title, FONTS.h4]}>More Options</Text>
        <TouchableOpacity style={styles.close} onPress={() => props.navigation.toggleDrawer()}>
          <Image style={styles.X} source={icons.X} />
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="men"
        labelStyle={styles.labels}
        activeTintColor={COLORS.yellow}
        style={styles.items}
        inactiveBackgroundColor={COLORS.yellow}
      /> */}
    </View>


  )
}


const DrawerNavigator = ({navigation}) => {
  return (

    <Drawer.Navigator navigation={navigation}

      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          marginTop: 100,
          width: SIZES.width,
          // height: SIZES.height * .93,
          borderRadius: 10,
          backgroundColor: "rgba(35, 35, 35, 0.64)",
        },
        drawerActiveTintColor: COLORS.yellow,
        drawerInactiveTintColor: COLORS.black2,
        drawerActiveBackgroundColor: COLORS.black2,
        drawerInactiveBackgroundColor: COLORS.yellow,
        drawerLabelStyle: styles.labels,
        drawerItemStyle: styles.items,
        drawerContentStyle: styles.drawerContent,
        drawerContentContainerStyle: styles.drawerContainer,
      }}

    >

      <Drawer.Screen name="Men" component={Loading}

      // options={({ route }) => ({

      //   headerShown: false,
      //   drawerStyle={styles.tabs}
      //   drawerIcon: ({ color }) => (
      //         <Ionicons name="md-chatbox-outline" size={25} color={color} />
      //   ),
      //   swipeEnabled: HideDrawer(route, route.name) 
      // })}
      />
      <Drawer.Screen name="Women" component={Loading} />
      <Drawer.Screen name="Children" component={Loading} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

const styles = StyleSheet.create({
  head: {
    height:50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    width: SIZES.width * .8,
    color: COLORS.white,
    textAlign: 'center',
  },
  X: {
    width: 10,
    height: 9,
  },
  close: {
    width: 20,
  },
  items: {
    width: 80,
    height: 80,
    borderRadius: 80,
   
    justifyContent:'center',
    // borderColor:'white',
    // borderWidth:2,

  },
  labels:{
    // textAlign:'center',
    fontFamily:'Poppins',
    fontWeight:'400',
    fontSize:12,
    lineHeight:16,
  },
  drawerContainer:{
    flexDirection:'row',
  },
  drawerContent:{
    color:'black',
  }
})  