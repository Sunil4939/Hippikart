import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions, ImageBackground } from "react-native";
import { COLORS, dummyData, icons, images, } from "../../constants";
import styles from "./styles";
const { width, height } = Dimensions.get('window')

const PlaceOrder = ({ navigation }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Image style={styles.brand} source={images.brand} />
                </View>
                <Text style={styles.leftText}>Checkout</Text>
                <View style={[styles.formContainer, styles.row]}>
                    <Text style={styles.text}>Check delivery time & service</Text>
                    <View style={styles.end}>
                        <TextInput style={styles.input} placeholder="Enter Pincode" placeholderTextColor={'#A7A7A7'} keyboardType="numeric" />
                        <TouchableOpacity style={[styles.btn, { backgroundColor: COLORS.orange1 }]} onPress={() => navigation.navigate('PaymentScreen')}>
                            <Text style={[styles.btnTxt, { color: COLORS.white }]}>Check</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.formContainer,]}>
                    <View style={styles.row}>
                        <Text style={styles.text}>Coupons</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OrderPlaced')}>
                            <Text style={[styles.btnTxt, { color: COLORS.orange1 }]}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.offer}>
                        <ImageBackground source={images.discount} style={styles.discount}>
                            <Text style={[styles.offerText, { color: COLORS.orange1 }]}>%</Text>
                        </ImageBackground>
                        <Text style={styles.offerText}>20% off on 2 more purchase </Text>
                    </View>
                </View>
                <View style={styles.formContainer}>

                    <Text style={styles.label}>Order details</Text>
                    <View style={styles.orderContent}>
                        <Text style={styles.text}>1 Coupon applied</Text>
                        <View style={styles.row}>
                            <Text style={styles.text}>You saved additional ₹200</Text>
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OrderPlaced')} >
                                <Text style={[styles.btnTxt, { color: COLORS.orange1 }]}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.orderContent}>
                        <Text style={styles.text}>2 item selected from your cart</Text>
                        <View style={styles.row}>
                            <Text style={styles.text}>Total MRP</Text>
                            <Text style={styles.text}>₹20000</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Discount on MRP</Text>
                            <Text style={[styles.text, {color:'#488A07'}]}>-₹200</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Coupon Discount</Text>
                            <Text style={[styles.text, {color:'#488A07'}]}>-₹200</Text>
                        </View>
                    </View>
                    <View style={[styles.row, {marginTop: height * .02,}]}>
                            <Text style={styles.label}>Total Amount</Text>
                            <Text style={styles.label}>₹16400</Text>
                        </View>
                    <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddressScreen')}>
                        <Text style={styles.addBtnText}>Place Order</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default PlaceOrder;