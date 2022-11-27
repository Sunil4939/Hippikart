import React from "react";
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions, TextInput } from "react-native";
import ClothesCard from "../../component/ClothesCard";
import Footer from "../../component/Footer";
import ProductSlider from "../../component/ProductSlider";
import { images, icons, COLORS, dummyData } from "../../constants";
import { TabView, SceneMap } from 'react-native-tab-view';
import styles from "./styles";
const { width, height } = Dimensions.get('window')


const FirstRoute = () => (
    <View style={styles} >
        <Text style={styles.tabTxt}>Model's height is 6.2 ft with chest size 38'' is wearing size M for a snug fit.</Text>
        </View>
  );
  
  const SecondRoute = () => (
    <View style={styles} >
        <Text style={styles.tabTxt}>Intensely soft</Text>
        <Text style={styles.tabTxt}>No-fade classy shades</Text>
        <Text style={styles.tabTxt}>Intensely soft</Text>
        <Text style={styles.tabTxt}>No-fade classy shades</Text>
        </View>
  );
  
  const renderScene = SceneMap({
    size: FirstRoute,
    details: SecondRoute,
    care: SecondRoute,
  });

  
const SingleProduct = ({ navigation }) => {
    // const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'size', title: 'Model Size & Fit' },
      { key: 'details', title: 'PRODUCT DETAILS ' },
      { key: 'care', title: 'PRODUCT CARE' },
    ]);
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

                <View>
                    <ProductSlider />
                    <View style={styles.productTxtBox}>
                        <View style={styles.productTitileRow}>
                            <Text style={styles.productTitile}>Product Name Product Name</Text>
                            <TouchableOpacity>
                                <Image source={icons.heart1} style={styles.heart1} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.productBrandName}>Brand  Name </Text>
                        <View style={styles.priceRow}>
                            <Text style={styles.productPrice}>₹2490</Text>
                            <Text style={[styles.productPrice, { color: '#B1B1B1' }]}>MRP ₹2490</Text>
                            <Text style={[styles.productPrice, { color: '#E00000' }]}>(10% Off)</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.material}>Material -</Text>
                            <Text style={styles.materialName}> Cotton</Text>
                        </View>
                        <View style={styles.colorRow}>
                            <Text style={styles.material}>Colour</Text>
                            <View style={styles.productTitileRow}>
                                {dummyData.ProductSize.map((item) => (
                                    <TouchableOpacity style={styles.colorContainer}>
                                        <View style={[styles.colorBox, { backgroundColor: item.color }]}></View>
                                        <Text style={styles.colorName}>{item.colorName}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <View style={styles.colorRow}>
                            <Text style={styles.material}>Size</Text>
                            <View style={styles.productTitileRow}>
                                {dummyData.ProductSize.map((item) => (
                                    <TouchableOpacity style={styles.colorContainer}>
                                        <Text style={styles.colorName}>{item.size}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <Text style={styles.rightTxt}>Size Chart</Text>
                        <TouchableOpacity style={styles.productBtn}>
                            <Text style={styles.productBtnText}>Add To Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.productBtn, { backgroundColor: COLORS.orange1 }]}>
                            <Text style={[styles.productBtnText, { color: COLORS.white }]}>Buy Now</Text>
                        </TouchableOpacity>
                        <View>
                            <View style={styles.deliveryContainer}>
                                <View style={styles.deliveryRow}>
                                    <Image source={icons.truck} style={styles.truck} />
                                    <Text style={styles.material}>DELIVERY OPTIONS </Text>
                                </View>
                                <View style={styles.pinCodeRow}>
                                    <TextInput style={styles.input} placeholder="Enter Pincode" placeholderTextColor={'#B7B7B7'}></TextInput>
                                    <TouchableOpacity style={styles.checkBtn}>
                                        <Text style={styles.checkBtnTxt}>Check</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.text}>Please enter PIN code to check delivery time & Pay on Delivery Availability</Text>
                        </View>
                        <View>
                            <Text style={styles.tabTitle}>SPECIFICATIONS</Text>
                            <TabView
                                navigationState={{ index, routes }}
                                renderScene={renderScene}
                                onIndexChange={setIndex}
                                initialLayout={{ width: width,}}
                                style={{height: height * .25, marginTop: height * .02,}}
                                pagerStyle={{marginTop: height * .02,}}
                                
                                // indicatorStyle={{ backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.row}>
                        <View style={styles.aboutBox}></View>
                        <Text style={styles.aboutTxt}>More About Us</Text>
                        <View style={[styles.aboutBox, { backgroundColor: '#DB195F' }]}></View>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.aboutImgBox}>
                            <Image source={images.about1} style={styles.aboutImg} resizeMode="contain" ></Image>
                            <Text style={styles.aboutImgTxt}>Warm And Comertable</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.aboutImgBox}>
                            <Image source={images.about2} style={styles.aboutImg} resizeMode="contain" ></Image>
                            <Text style={styles.aboutImgTxt}>Soft And Smooth</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.aboutImgBox}>
                            <Image source={images.about3} style={styles.aboutImg} resizeMode="contain" ></Image>
                            <Text style={styles.aboutImgTxt}>Colourful And Vibrant</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.ratingRow} >
                    <View style={styles.ratingContainer}>
                        <View>
                            <Text style={styles.ratingTxt}>Ratings & Reviews</Text>
                            <View style={styles.starRow}>
                                <Image style={styles.star} source={icons.star} />
                                <Image style={styles.star} source={icons.star} />
                                <Image style={styles.star} source={icons.star} />
                                <Image style={styles.star} source={icons.star} />
                                <Image style={styles.star} source={icons.star1} />
                            </View>
                            <Text style={styles.ratingTxt}>4.2  I  8,234</Text>
                        </View>
                    </View>
                    <ScrollView horizontal={true}>
                        {dummyData.BlogCartData.map((item) => (
                            <View style={styles.blogs}>
                                <Image source={item.blogImage} style={styles.blogImage} />
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('SingleBlogScreen')}>
                                    <Text style={styles.btnTxt}>{item.review}</Text>
                                </TouchableOpacity>
                                <Text style={styles.blogDate}>{item.date}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View>
                    <View style={styles.row}>
                        <View style={styles.aboutBox}></View>
                        <Text style={styles.aboutTxt}>View Similar</Text>
                        <View style={[styles.aboutBox, { backgroundColor: '#DB195F' }]}></View>
                    </View>
                    <ScrollView horizontal={true}>
                        {dummyData.CardCart.map((item) => (
                            <ClothesCard />
                        ))}
                    </ScrollView>
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

export default SingleProduct;