import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { View, Text,  StyleSheet, Dimensions, } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')


const FirstRoute = () => (
    <View style={styles} >
        <Text style={styles.tabTxt}>Model's height is 6.2 ft with chest size 38'' is wearing size M for a snug fit.</Text>
    </View>
);

const SecondRoute = () => (
    <View  >
        <Text style={styles.tabTxt}>Intensely soft</Text>
        <Text style={styles.tabTxt}>No-fade classy shades</Text>
        <Text style={styles.tabTxt}>Intensely soft</Text>
        <Text style={styles.tabTxt}>No-fade classy shades</Text>
    </View>
);

const renderScene = SceneMap({
    size: FirstRoute,
    details: SecondRoute,
    care: SecondRoute,
});
const renderTabBar = props => {
    // console.log("props", props)
   return <TabBar
        {...props}
        renderLabel={({ focused, route }) => {
            return (
              <Text
                style={[styles.label, focused ? { opacity:1 }: {opacity: 0.5 }]}
                >
                {route.title}
              </Text>
            );
          }}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        tabStyle={styles.tab}
    />
    
};

const Tabs = () => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'size', title: 'Model Size & Fit' },
        { key: 'details', title: 'PRODUCT DETAILS ' },
        { key: 'care', title: 'PRODUCT CARE' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            style={{ height: height * .2, marginTop: height * .02, }}
            pagerStyle={{ marginTop: height * .02, }}
        />
    )
}

export default Tabs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 11,
        lineHeight: 18,
        color: COLORS.black,
        opacity: 0.5,
        textAlign: 'center',
    },
    tabTxt: {
        fontFamily: 'Poppins Regular 400',
        color: COLORS.black2,
        fontSize: 12,
        lineHeight: 15,
    },
    tabBar:{
        backgroundColor: COLORS.white, 
        // elevation:0,
    },
    indicator:{
        backgroundColor: COLORS.black,
        height:0,
    },
    tab:{
        padding:0,
    },
});