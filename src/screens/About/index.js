import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { COLORS, icons, } from "../../constants";
import CheckBox from '@react-native-community/checkbox';
import styles from "./styles";


const AboutUs = ({ navigation }) => {
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
                <Text style={styles.pageTitle}>About us</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>What is your Returns/Exchange policy What is your Returns/Exchange
                     policy What is your Returns/Exchange policy What is your Returns/Exchange 
                     policyWhat is your Returns/Exchange policy What is your Returns/Exchange policy
                      What is your Returns/Exchange policy What is your Returns/Exchange policy What 
                      is your Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your 
                      Returns/Exchange policy What is your Returns/Exchange policy What is your 
                      Returns/Exchange policy What is your Returns/Exchange policyWhat is your 
                      Returns/Exchange policyWhat is your Returns/Exchange policy What is your 
                      Returns/Exchange policy What is your Returns/Exchange policy What is your
                       Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your 
                       Returns/Exchange policy What is your Returns/Exchange policy What is your
                        Returns/Exchange policy What is your Returns/Exchange policyWhat is your 
                        Returns/Exchange policyWhat is your Returns/Exchange policy What is your
                         Returns/Exchange policy What is your Returns/Exchange policy What is your
                          Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your
                           Returns/Exchange policy What is your Returns/Exchange policy What is your
                            Returns/Exchange policy What is your Returns/Exchange policyWhat is your
                             Returns/Exchange policyWhat is your Returns/Exchange policy What is your
                              Returns/Exchange policy What is your Returns/Exchange policy What is your
                           Returns/Exchange policyWhat is your Returns/Exchange policy</Text>
            </View>

        </View>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default AboutUs;