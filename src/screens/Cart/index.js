import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from "react-native";
import { QuantityCart } from "../../component/CardsComponent";
import { COLORS, dummyData, icons, images, } from "../../constants";
import styles from "./styles";

const AddedCarts = ({ navigation }) => {
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
            <View style={styles.header}>
                <Text style={styles.leftText}>Cart</Text>
                <View style={styles.header1}>
                    <TouchableOpacity>
                        <Text style={styles.rightText}>Move to Cart</Text>
                    </TouchableOpacity>
                     <Text style={styles.rightText}> | </Text>
                    <TouchableOpacity>
                        <Text style={styles.rightText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardContainer}>
                {dummyData.FavouriteCard.map(() => (
                    <QuantityCart 
                    onPress={()=>navigation.navigate('AddressScreen')}
                    navigation={navigation} />
                ))}
            </View>
        </View>
       </ScrollView>
    )
}

export default AddedCarts;