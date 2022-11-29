import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions, ImageBackground } from "react-native";
import { COLORS, dummyData, icons, images, } from "../../constants";
import styles from "./styles";
const { width, height } = Dimensions.get('window')



const PaymentGateway = ({ navigation }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Image style={styles.brand} source={images.brand} />
                </View>
                <Text style={styles.leftText}>Payment</Text>
                {dummyData.PaymentMethod.map((item)=>
                <TouchableOpacity style={styles.paymentBtn}>
                    <Text style={styles.paymentBtnTxt}>{item.method}</Text>
                </TouchableOpacity>
                )}

            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default PaymentGateway;