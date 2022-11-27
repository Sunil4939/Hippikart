
import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar, ImageBackground, ScrollView, TextInput,  } from "react-native";
import ClothesCard from "../../component/ClothesCard";
import { images, icons, COLORS, dummyData } from "../../constants";
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";
import Carousel from "../../component/carousel";
import Header from "../../component/Header";
import Footer from "../../component/Footer";


const HomeScreen = ({ navigation }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                
                <Header navigation={navigation} HolderName={"My Account"} />

                <View style={styles.head}>
                    <View style={styles.leftBox}>
                        <Text style={styles.headTitle}>FREE SHIPPING OVER ₹399</Text>
                        <Text style={styles.txt}>Plus, two-day delivery on thousands of items.</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.rightBox}>
                        <Text style={styles.headTitle}>AMAZING VALUE EVERY DAY</Text>
                        <Text style={styles.txt}>Items you love at prices that fit your budget.</Text>
                    </View>
                </View>

                <View style={styles.imgRow}>
                    <ImageBackground source={images.image1} style={styles.imgBox}>
                        <TouchableOpacity style={styles.imgBtn}>
                            <Text style={[styles.imgBtnText, { color: '#A45949', }]}>For Her </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <ImageBackground source={images.image2} style={[styles.imgBox, styles.rightImgBox]}>
                        <TouchableOpacity style={[styles.imgBtn,]} onPress={()=> navigation.navigate('SingleProductScreen')}>
                            <Text style={styles.imgBtnText}>For Him </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.imgTxtContainer}>
                        <Text style={styles.imgBoxTitle}>Trendy New Clothes</Text>
                        <Text style={styles.imgBoxSubTitle}>so soft feels like second skin</Text>
                    </View>
                </View>

                <View style={styles.discountRow}>
                    <ImageBackground source={images.rectangle1} style={styles.discountBox}>
                        <Text style={styles.discountBoxTxt}>10% OFF</Text>
                    </ImageBackground>
                    <ImageBackground source={images.rectangle2} style={styles.discountBox}>
                        <Text style={styles.discountBoxTxt}>20% OFF</Text>
                    </ImageBackground>
                    <ImageBackground source={images.rectangle3} style={styles.discountBox}>
                        <Text style={styles.discountBoxTxt}>50% OFF</Text>
                    </ImageBackground>
                </View>

                <View>
                    <View style={styles.row}>
                        <View style={styles.categoryBox}></View>
                        <Text style={styles.categoryTxt}>Categories</Text>
                        <View style={[styles.categoryBox, { backgroundColor: '#DB195F' }]}></View>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity>
                            <Image source={images.image3} style={styles.categoryImg}></Image>
                            <Text style={styles.categoryTxt}>Women</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SizeScreen')}>
                            <Image source={images.image4} style={styles.categoryImg}></Image>
                            <Text style={styles.categoryTxt}>men</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={images.image5} style={styles.categoryImg}></Image>
                            <Text style={styles.categoryTxt}>Child</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View style={styles.row}>
                        <View style={styles.categoryBox}></View>
                        <Text style={styles.categoryTxt}>New Arrivals</Text>
                        <View style={[styles.categoryBox, { backgroundColor: '#DB195F' }]}></View>
                    </View>
                    <ImageBackground source={images.image6} style={styles.arrivalsImg}>
                        <View>
                            <Text style={styles.imgBoxTitle}>Grab The Fresh Collection</Text>
                            <Text style={styles.imgBoxSubTitle}>so soft feels like second skin</Text>
                        </View>
                        <TouchableOpacity style={styles.shopNowBtn}>
                            <Text style={styles.shopNowTxt}>Shop Now &#62; </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.rowCategory}>
                        <TouchableOpacity style={styles.categoryName}>
                            <Text style={styles.categoryNameTxt}>Catergory Name</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryName}>
                            <Text style={styles.categoryNameTxt}>Catergory Name</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles.viewAllTxt}>View All &#62; </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView horizontal={true}>
                    {dummyData.CardCart.map((item) => (
                        <ClothesCard />
                    ))}
                </ScrollView>
                <ScrollView horizontal={true}>
                    {dummyData.CardCart.map((item) => (
                        <ClothesCard />
                    ))}
                </ScrollView>

                <View>
                    <View style={styles.row}>
                        <View style={styles.categoryBox}></View>
                        <Text style={styles.categoryTxt}>Trending Now</Text>
                        <View style={[styles.categoryBox, { backgroundColor: '#DB195F' }]}></View>
                    </View>
                    <ImageBackground source={images.image7} style={[styles.arrivalsImg, styles.trending]}>
                        <View>
                            <Text style={[styles.imgBoxTitle, { textAlign: 'left' }]}>Trendy New Clothes</Text>
                            <Text style={[styles.imgBoxSubTitle, { textAlign: 'left' }]}>Treding Now.</Text>
                        </View>
                        <TouchableOpacity style={styles.grabNowBtn}>
                            <Text style={styles.grabNowTxt}>Grab Now  &#62; </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.rowCategory}>
                        <TouchableOpacity style={styles.categoryName}>
                            <Text style={styles.categoryNameTxt}>Catergory Name</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryName}>
                            <Text style={styles.categoryNameTxt}>Catergory Name</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles.viewAllTxt}>View All &#62; </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView horizontal={true} >
                    {dummyData.CardCart.map((item) => (
                        <ClothesCard />
                    ))}
                </ScrollView>
                <ScrollView horizontal={true} >
                    {dummyData.CardCart.map((item) => (
                        <ClothesCard />
                    ))}
                </ScrollView>

                <View>
                    <View style={styles.row}>
                        <View style={styles.categoryBox}></View>
                        <Text style={styles.categoryTxt}>A Little More</Text>
                        <View style={[styles.categoryBox, { backgroundColor: '#DB195F' }]}></View>
                    </View>
                    <View>
                        <View style={styles.littleImgRow}>
                            <Image style={styles.littleImg} source={images.image8} />
                            <View style={styles.littleImgTxtBox}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.littleTitle}>Soft </Text>
                                    <Text style={[styles.littleTitle, { color: COLORS.yellow }]}>Material</Text>
                                </View>
                                <Text style={styles.littleSubtitle}>Wear it eveyday, quailty at its best.</Text>
                                <TouchableOpacity style={styles.littleBtn}>
                                    <Text style={styles.grabNowTxt}>Shop Now  &#62; </Text>
                                </TouchableOpacity>
                            </View>
                            <Image style={styles.vector} source={images.vector5} />
                        </View>
                        <View style={[styles.littleImgRow, { justifyContent: 'flex-end' }]}>
                            <View style={[styles.littleImgTxtBox, styles.littleLeftTxt]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styles.littleTitle, { color: '#DB195F' }]}>Vibrant</Text>
                                    <Text style={styles.littleTitle}> Colours </Text>
                                </View>
                                <Text style={styles.littleSubtitle}>So many color range in every product.</Text>
                                <TouchableOpacity style={[styles.littleBtn, { right: -50 }]}>
                                    <Text style={styles.grabNowTxt}>Shop Now  &#62; </Text>
                                </TouchableOpacity>
                            </View>
                            <Image style={styles.littleImg} source={images.image9} />
                            <Image style={[styles.vector, styles.rightVector]} source={images.vector6} />
                        </View>
                        <View style={styles.littleImgRow}>
                            <Image style={styles.littleImg} source={images.image10} />
                            <View style={styles.littleImgTxtBox}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.littleTitle}>Cute </Text>
                                    <Text style={[styles.littleTitle, { color: '#6684A6' }]}>Collection </Text>
                                </View>
                                <Text style={styles.littleSubtitle}>Coming soon...</Text>
                                <TouchableOpacity style={styles.littleBtn}>
                                    <Text style={styles.grabNowTxt}>Shop Now  &#62; </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
               <View style={styles.linearRow}>
              <View>
              <LinearGradient
                    colors={[COLORS.yellow, COLORS.white]}
                    style={styles.linearGradient1}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }} />
                <LinearGradient
                    colors={[COLORS.yellow, COLORS.white]}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                >
                    <View style={styles.linearTxtContainer}>
                        <TouchableOpacity>
                            <Text style={styles.linearTxt}>Form</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('BlogScreen')}>
                            <Text style={styles.linearTxt}>Blogs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.linearTxt}>Collection</Text>
                        </TouchableOpacity>
                        
                    </View>
                </LinearGradient>
                <LinearGradient
                    colors={[COLORS.yellow, COLORS.white]}
                    style={styles.linearGradient1}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }} />
              </View>
                    <Carousel navigation={navigation} />
               </View>

                <Footer navigation={navigation} />
            </View>

        </ScrollView >
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default HomeScreen;

