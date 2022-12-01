import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions, ImageBackground } from "react-native";
import { COLORS, dummyData, icons, images, } from "../../constants";
import styles from "./styles";
const { width, height } = Dimensions.get('window')



const ProductReturn = ({ navigation }) => {

    const item = dummyData.HistoryCart[0];

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
                <Text style={styles.leftText}>Order History</Text>
                <View style={styles.historyContainer}>
                    <View style={styles.historyCart}>
                        <Image source={item.cartImg} style={styles.cartImage} resizeMode="stretch" />
                        <View style={styles.rightBox}>
                            <Text style={styles.productName}>{item.productName}</Text>
                            <Text style={styles.brandName}>{item.brandName}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.text}>Size - {item.size}</Text>
                            <View style={styles.row}>
                                <Text style={styles.text}>Quantity <Text style={styles.quantity}> {item.quantity}</Text></Text>
                                <Text style={styles.text}>Status <Text style={[styles.status, item.id == 2 && { color: '#6684A6' }]}> {item.status}</Text></Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.returnBtn} onPress={() => navigation.navigate('ReasonReturnProduct')}>
                        <Image source={icons.return1} style={styles.return} />
                        <Text style={styles.returnTxt}>Return</Text>
                    </TouchableOpacity>
                    <View style={styles.addressContainer}>
                        <Text style={styles.labels}>Delivery Address</Text>
                        <View style={styles.addressBox}>
                            <Text style={styles.labels}>Saurabh Singh</Text>
                            <Text style={styles.address}>2/1 ICICI Bank in front of railway colony Near DRM office, BHOPAL - 462024, Madhya Pradesh</Text>
                        </View>
                        <View style={styles.phoneRow}>
                            <Text style={styles.phoneTxt}>Phone number</Text>
                            <Text style={styles.address}>9341458995</Text>
                        </View>
                        <Text style={styles.address}>Download Invoice</Text>
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.labels}>Updates sent to</Text>

                        <View style={styles.row1}>
                            <Image source={icons.call} style={styles.call} />
                            <Text style={styles.address}>9341458995</Text>
                        </View>
                        <View style={styles.row1}>
                            <Image source={icons.mail} style={styles.mail} />
                            <Text style={styles.address}>raviraut19@icloud.com</Text>
                        </View>
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.orderId}>Order ID # 1217298 03370800584001</Text>
                    </View>
                    <View style={styles.reviewContainer}>
                        <Text style={styles.labels}>Ratings & Review </Text>
                        <View style={styles.reviewBox}>
                            <TextInput placeholder="Write Review" placeholderTextColor={'#989898'}
                            // value='Very Nice Quality'
                             style={styles.inputTxt} />
                            <TouchableOpacity style={styles.edit}>
                            <Image source={icons.editText} style={styles.editIcon} />
                            </TouchableOpacity>
                            <View style={styles.ratingRow}>
                               <View style={styles.phoneRow}>
                               <Text style={styles.rating}>Rate</Text>
                                <View style={styles.phoneRow}>
                                    {dummyData.HistoryReview.map((item) =>
                                        <Image source={item.starIcon} style={styles.star} />
                                    )}
                                </View>
                               </View>
                                <TouchableOpacity style={styles.postBtn}  >
                                    <Text style={styles.postBtnTxt}>Post</Text>
                                </TouchableOpacity>
                            </View>
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

export default ProductReturn;