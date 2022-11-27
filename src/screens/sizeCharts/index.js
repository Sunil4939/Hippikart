import React from "react";
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "../../component/Header";
import { images, icons, COLORS } from "../../constants";
import styles from "./styles";

const SizeChart = ({navigation}) => {
    return( 
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
           
           <Header navigation={navigation} />

            <View>
                <View style={styles.row}>
                    <View style={styles.blogBox}></View>
                    <Text style={styles.blogTxt}>Size Chart</Text>
                    <View style={[styles.blogBox, { backgroundColor: '#DB195F' }]}></View>
                </View>
                <Image source={images.sizeChart1} style={styles.charts} />
                <Image source={images.sizeChart2} style={styles.charts} />
                <Image source={images.sizeChart1} style={styles.charts} />
            </View>
          
        </View>

    </ScrollView >
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default SizeChart;