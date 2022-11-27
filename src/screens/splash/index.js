import React from "react";
import { View, Image, StyleSheet, Dimensions, StatusBar } from "react-native";
import { images, COLORS } from "../../constants";

const { width, height } = Dimensions.get("window");

const SplashScreen = () => {
    return (
            <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.yellow} barStyle="dark-content" />
                <Image style={styles.logo} source={images.logo} />
            </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.yellow,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: width * .51,
        height: width * .49,
    }
})