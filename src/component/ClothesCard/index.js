import React from "react";
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { images, icons, COLORS, dummyData } from "../../constants";
const { width, height } = Dimensions.get('window')

const ClothesCard = ({ }) => {
    const item = dummyData.CardCart[0];
    return (
      
        <View style={styles.cart}>
            <TouchableOpacity
            //  onPress={()=> navigation.navigate('Login')}
            >
                <ImageBackground source={item.cartImg} style={styles.cartImage} resizeMode="stretch">
                    <TouchableOpacity>
                        <Image source={icons.heart1} style={styles.heart1} resizeMode='contain' />
                    </TouchableOpacity>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartBtn} >
                <Image source={icons.buy} style={styles.buy1} />
                <Text style={styles.cartBtnTxt}>Add to Cart</Text>
            </TouchableOpacity>
            <View>
                <View style={styles.row1}>
                    <Text style={styles.cartBrand}>{item.brandName}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.productName}>{item.productName}</Text>
                    <View style={styles.row1}>
                        <View style={styles.dots}></View>
                        <View style={[styles.dots, { backgroundColor: '#DB195F' }]}></View>
                        <View style={[styles.dots, { backgroundColor: '#C87F6C' }]}></View>
                    </View>
                </View>
            </View>
        </View>
   
    )
}

export default ClothesCard;
const styles = StyleSheet.create({
    cartsRow: {
        flexDirection: 'row',
        marginTop: height * .02,
    },
    cart: {
        // width: width * .51,
        margin: 10,
        width: width * .5,
        // height: height * .29,
    },
    cartImage: {
        width: width * .5,
        height: height * .29,

    },
    heart1: {
        position: 'absolute',
        right: width * .02,
        top: height * .01,
        width: width * .08,
        height: height * .04,
    },
    buy1: {
        width: width * .04,
        height: height * .02,
        tintColor: COLORS.white,
        marginRight: width * .02,

    },
    cartBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * .06,
        borderWidth: 2,
        borderColor: COLORS.white,
        backgroundColor: COLORS.black,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    cartBtnTxt: {
        color: COLORS.white,
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        marginBottom: -3,
        textAlign: 'center',
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: width * .01,
    },
    cartBrand: {
        color: COLORS.black,
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        marginBottom: -3,
    },
    price: {
        color: COLORS.black,
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 10,
        marginBottom: -3,
    },
    dots: {
        width: width * .02,
        height: height * .01,
        backgroundColor: COLORS.yellow,
        borderRadius: 50,
        marginLeft: width * .01,
    },
    productName: {
        color: COLORS.black2,
        fontFamily: 'Poppins Regular 400',
        fontSize: 10,
        marginBottom: -1,
        textAlign: 'center',
    }
})