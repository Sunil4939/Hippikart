import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../constants";
import { Bubbles } from 'react-native-loader';



const Loading = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.loadingContainer}>
                <Text style={styles.title}>Sorry for the interruption </Text>
                <Text style={styles.text}>Loading</Text>
                <Bubbles size={10} color="#000000" />
                {/* <View>
                </View> */}

            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingContainer: {
        alignItems: 'center',
    },
    title: {
        color: COLORS.black2,
        fontWeight: '700',
        marginBottom: 20,
        letterSpacing: .3,
    },
    text: {
        color: COLORS.black2,
        fontWeight: '400',
        marginBottom: 20,
        letterSpacing: .3,
    },
})