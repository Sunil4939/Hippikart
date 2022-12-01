import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { COLORS, dummyData, icons, images, } from "../../constants";
import DocumentPicker from 'react-native-document-picker';
import styles from "./styles";

const MyAccount = ({ navigation }) => {
    const [singleFile, setSingleFile] = useState(images.yourProfile);

    const selectFile = async () => {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });
        setSingleFile(res);
    };

    const checkScreen = (title) => {

        switch (title) {
            case 'Edit Profile':
                return 'SetAccount';
            case 'My Coupons':
                return 'CouponScreen';
            case 'Wallet':
                return 'WalletScreen';
            case 'Refer & Earn':
                return 'ReferScreen';
            case 'Help & FAQ':
                return 'Help FAQ';
            case 'About Us':
                return 'About Us';
            // case 'Logout':
            //     return 'ContactScreen';
            default:
                return 'AccountDetails';
        }

    }

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
                <Text style={styles.leftText}>My Account</Text>
                <View style={styles.profileBox}>
                    <View>
                        <Image source={singleFile} style={styles.userProfile} resizeMode='contain' />
                        <TouchableOpacity onPress={selectFile}>
                            <Image source={icons.Edit} style={styles.Edit} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>Andrew Forbes</Text>
                    <Text style={styles.text}>+91 9632587410</Text>
                </View>

                <View style={styles.btnContainer}>
                    {dummyData.AccountData.map((item) =>
                        <TouchableOpacity style={styles.BtnRow} onPress={() => navigation.navigate(checkScreen(item.title))} >
                            <View style={styles.row}>
                                <Image source={item.icon} style={styles.profileIcon} resizeMode="contain" />
                                <Text style={[styles.text, item.title == 'Logout' && { color: COLORS.yellow }]}>{item.title}</Text>
                            </View>
                            {item.title != 'Logout' && (
                                <Text style={styles.arrow}>&#62;</Text>
                            )}
                        </TouchableOpacity>
                    )}
                </View>

            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default MyAccount;