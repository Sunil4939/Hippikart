import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { COLORS, icons, } from "../../constants";
import CheckBox from '@react-native-community/checkbox';
import styles from "./styles";


const FilterPage = ({ navigation }) => {
    // const gender = [
    //     { label: 'Men', value: 'first' },
    //     { label: 'Women', value: 'second' },
    //     { label: 'Kids', value: 'third' },
    // ]

    const ButtonName = [
        { id: 1, name: 'Gender' },
        { id: 2, name: 'Categories' },
        { id: 3, name: 'Colour' },
        { id: 4, name: 'Brands' },
        { id: 5, name: 'Price' },
    ]

    const [gender, setGender] = useState([
        { label: 'Men', value: 'first', checked: false, },
        { label: 'Women', value: 'second', checked: false, },
        { label: 'Kids', value: 'third', checked: false, },
    ])
    // const [checked, setChecked] = useState();

    const checkboxHandler = (value, index) => {
        const newValue = gender.map((checkbox, i) => {
            if (i === index) {
                const item = {
                    ...checkbox,
                    checked: !checkbox.checked,
                }
                return item
            }
            return checkbox
        })
        setGender(newValue)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backArrow} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Filters</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.sideBar}>

                    {ButtonName.map((item) => (
                        <TouchableOpacity style={[styles.btn, item.name == 'Gender' && { backgroundColor: COLORS.yellow }]}>
                            <Text style={styles.btnTxt}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}

                </View>
                <View style={styles.rightBox}>

                    {gender.map((item, i) => (
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
                </View>
            </View>

        </View>

    )
}

export default FilterPage;