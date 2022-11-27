import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, TextInput } from "react-native";
import { images, icons, COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

const Footer = ({ navigation }) => {
    return (
        <View style={styles.footer}>
            <View style={styles.footerRows} >
                <View style={styles.footerLeft}>
                    <Text style={styles.footerTitle}>Categories</Text>
                    <View style={styles.footerRows}>
                        <View>
                            <Text style={styles.footerTitle}>Women</Text>
                            <Text style={styles.footerTitle}>Men</Text>
                            <Text style={styles.footerTitle}>Children</Text>
                        </View>
                        <View>
                            <Text style={styles.footerTxt}>Tops l T-shirt l Shirt l Jeans</Text>
                            <Text style={styles.footerTxt}>Tops l T-shirt l Shirt l Jeans</Text>
                            <Text style={styles.footerTxt}>Comming soon</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.footerRight}>
                    <Text style={styles.footerTitle}>Newsletter</Text>
                    <TextInput placeholder="trhguf@gmail.com" placeholderTextColor={'rgba(35, 35, 35, 0.5)'} style={styles.footerInput} />
                    <TouchableOpacity style={styles.footerBtn}>
                        <Text style={styles.grabNowTxt}> Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footerRows}>
                <Text style={styles.footerTitle}>Connect us on</Text>
                <View style={styles.footerRows} >
                    <TouchableOpacity>
                        <Image source={icons.instagram} style={styles.footerIcons} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={icons.facebook} style={styles.footerIcons} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={icons.twitter} style={styles.footerIcons} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footerRows}>
                <Text style={styles.footerTitle}>Contact us</Text>
                <Text style={styles.footerTxt}>+91-8965231470 | hippikart@gmail.com</Text>
            </View>
        </View>
    )
}


export default Footer;

const styles = StyleSheet.create({
    footer: {
        backgroundColor: COLORS.black2,
        padding: width * .03,
    },
    footerTitle: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        lineHeight: 15,
        color: COLORS.yellow,
        marginTop: height * .02,
    },
    footerRows: {
        flexDirection: 'row',
        marginTop: height * .02,
        alignItems: 'center',
    },
    footerTxt: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 9,
        lineHeight: 15,
        color: COLORS.white,
        marginTop: height * .02,
        marginLeft: width * .03,
    },
    footerIcons: {
        width: width * .08,
        height: height * .04,
        marginLeft: width * .03,
    },
    footerLeft: {
        width: width * .54,
    },
    footerRight: {
        width: width * .4,
    },
    footerBtn: {
        width: width * .2,
        height: height * .04,
        backgroundColor: COLORS.yellow,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: height * .02,
    },
    footerInput: {
        width: width * .4,
        height: height * .052,
        borderRadius: 8,
        marginTop: height * .02,
        backgroundColor: COLORS.white,
    }
})