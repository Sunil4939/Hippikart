import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions, ImageBackground } from "react-native";
import { COLORS, icons, images, } from "../../constants";
import CheckBox from '@react-native-community/checkbox';
import styles from "./styles";

const ReasonOfReturn = ({ navigation }) => {
    const [reason, setReason] = useState([
        { label: 'I got it somewhere else more cheaper.', value: 'first', checked: false, },
        { label: 'Dosen’t fits me.', value: 'second', checked: false, },
        { label: 'Not same as shown.', value: 'third', checked: false, },
        { label: 'Got a wrong product.', value: 'forth', checked: false, },
    ])

    const checkboxHandler = (value, index) => {
        const newValue = reason.map((checkbox, i) => {
            if (i === index) {
                const item = {
                    ...checkbox,
                    checked: !checkbox.checked,
                }
                return item
            }
            return checkbox
        })
        setReason(newValue)
    }
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
                <View style={styles.imageContainer}>
                    <Image source={images.sadMood} style={styles.sadMood}  resizeMode='contain' />
                </View>
                <View style={styles.reasonContainer}>
                    <Text style={styles.title}>Choose a reason for returning this order</Text>
                    <View style={styles.rightBox}>

                        {reason.map((item, i) => (
                            <View style={styles.row1}>
                                <CheckBox
                                    disabled={false}
                                    value={item.checked}
                                    tintColors={{ true: '#FF931E', false: '#FF931E' }}
                                    onValueChange={(value) => checkboxHandler(value, i)}
                                    style={styles.checkBox}
                                />
                                <Text style={styles.label}>{item.label}</Text>
                            </View>
                        ))}
                        <View style={styles.btnRow}>
                        
                            <TouchableOpacity style={styles.bottomBtn} >
                                <Text style={styles.bottomBtnTxt}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default ReasonOfReturn;