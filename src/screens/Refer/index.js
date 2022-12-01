import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { COLORS, icons, images } from "../../constants";
import styles from "./styles";


const Refer = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backArrow} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Refer & Earn</Text>
            </View>
            <View style={styles.imageBox}>
                <Image source={images.ReferImage} style={styles.image} resizeMode="contain" />
            </View>

        </View>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Refer;