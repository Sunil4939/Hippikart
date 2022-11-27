
// import React, { useState, useRef } from 'react';
// import { SafeAreaView, FlatList, Image, View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
// import { images, COLORS } from '../../constants';
// const { width, height } = Dimensions.get('screen')

// const ProductSlider = ({ navigation }) => {
//     const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//     const ref = useRef(null);
//     const data = [
//         {
//             id: 1,
//             image: images.logo,
//         },
//         {
//             id: 2,
//             image: images.logo,
//         },
//         {
//             id: 3,
//             image: images.logo,
//         },
//     ];

//     const ProductSlides = ({ text, image }) => {

//         return (
//             <View style={[styles.container,]}>
//    <View style={styles.imageContainer}>
//                 <Image source={images.image11} style={styles.image} resizeMode="stretch" />
//             </View>

//                 <View style={styles.indicatorRow}>
//                     {data.map((_, index) =>
//                         <View
//                             key={index}
//                             style={[styles.indicator, currentSlideIndex == index && {
//                                 width: 15,
//                                 height: 15,
//                             }]} />
//                     )}
//                 </View>
//                 {currentSlideIndex != 2 && (
//                     <TouchableOpacity style={styles.nextBtn}
//                         onPress={goNextSlide}>
//                         <Text style={styles.nextTxt}>Next</Text>
//                     </TouchableOpacity>
//                 )}


//             </View>
//         )
//     }


//     const updateCurrentSlideIndex = (e) => {
//         const contentOffsetX = e.nativeEvent.contentOffset.x;
//         const currentIndex = Math.round(contentOffsetX / width);
//         setCurrentSlideIndex(currentIndex);
//     }

//     const goNextSlide = () => {
//         const nextSlideIndex = currentSlideIndex + 1;
//         if (nextSlideIndex != data.length) {
//             const offset = nextSlideIndex * width;
//             ref?.current?.scrollToOffset({ offset });
//             setCurrentSlideIndex(nextSlideIndex);
//         }

//     }


//     return (
//         <SafeAreaView >

//             <FlatList
//                 data={data}
//                 renderItem={({ item, }) => (
//                     <ProductSlides text={item.text}
//                         image={item.image} />
//                 )}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//                 keyExtractor={item => item.id}
//                 pagingEnabled
//                 bounces={false}
//                 onMomentumScrollEnd={updateCurrentSlideIndex}
//                 ref={ref}
//             />
//         </SafeAreaView>
//     );
// }



// export default ProductSlider;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: height,
//         width: width,
//     },

//     title: {
//         fontFamily: 'Helvetica Neue',
//         color: COLORS.black,
//         fontSize: 20,
//         marginTop: 20,
//         textAlign: 'center',
//         fontWeight: "700",
//     },
//     logoContainer: {
//         margin: width * .04,
//         marginTop: height * .06,
//         height: height * .5,
//         backgroundColor: COLORS.black,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: width * .04,
//     },
//     logoImg: {
//         width: width * .5,
//         height: height * .3,
//     },
//     txt: {
//         fontFamily: 'Helvetica Neue',
//         color: COLORS.white,
//         fontSize: 16,
//         textAlign: 'center',
//         fontWeight: "700",
//         margin: height * .04,
//     },
//     nextBtn: {
//         position: 'absolute',
//         width: 120,
//         height: 40,
//         backgroundColor: COLORS.orange,
//         right: 10,
//         bottom: height * .12,
//         justifyContent: 'center',
//         borderRadius: 20,
//     },
//     nextTxt: {
//         fontFamily: 'Helvetica Neue',
//         color: COLORS.white,
//         fontSize: 16,
//         textAlign: 'center',
//         fontWeight: "700",
//     },
//     indicatorRow: {
//         flexDirection: 'row',
//         marginTop: 20,
//         justifyContent: "center",
//         alignItems: 'center',

//     },
//     indicator: {
//         width: 10,
//         height: 10,
//         backgroundColor: COLORS.orange,
//         marginHorizontal: 5,
//         borderRadius: 10,
//         borderColor: 'white',
//         borderWidth: 1,
//     },
//     startBtn: {
//         marginTop: height * .13
//     },
    // image:{
    //     width: width * .7,
    //     height: height * .5,
    //     marginTop: height * .02,
    //     marginBottom: height * .02,
    //     borderRadius: 7,
    // },
    // imageContainer:{
    //     alignItems:'center',
    // },
// })


import React, { useState, useRef } from 'react';
import { View, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { dummyData, icons, COLORS, } from '../../constants';
// import Blogs from '../BlogComponent';
const { width, height } = Dimensions.get('window')

const Slides = ({ navigation, product}) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={product.image} style={styles.image} resizeMode="stretch" />
        </View>
        </View>

    )
}

const ProductSlider = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);
    const data = dummyData.ProductData;

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    }
    const goPrevSlide = () => {
        if(currentSlideIndex == 0){
            return
        }
        const nextSlideIndex = currentSlideIndex - 1;
        if (nextSlideIndex != data.length) {
            const offset = nextSlideIndex * width ;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    }

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != data.length) {
            const offset = nextSlideIndex * width ;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    }


    return (
        <View style={styles.container} >
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Slides navigation={navigation} product={item} />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                pagingEnabled
                bounces={false}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                ref={ref}
            />
            <View style={styles.BtnRow}>
                <TouchableOpacity
                    style={styles.Btn}
                    onPress={goPrevSlide} >
                    <Image source={icons.prev} style={styles.BtnIcons} resizeMode="contain" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Btn}
                    onPress={goNextSlide}>
                    <Image source={icons.next} style={styles.BtnIcons} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={styles.indicatorRow}>
          { data.map((data, index) =>
           
            <Image source={data.image}   style={[styles.indicator, currentSlideIndex == index && {
                borderWidth:2,
                borderColor:COLORS.black,
              }]}  resizeMode="contain" />
          )}
        </View>
        </View>
    );
}


export default ProductSlider;

const styles = StyleSheet.create({
    container: {
        width: width,
    },

    BtnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: width * .12,
        marginRight: width * .12,
    },

    Btn: {
        width: width * .06,
        height: height * .03,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * -.55,
    },
    BtnIcons: {
        width: width * .04,
        height: height * .03,
        tintColor: COLORS.yellow
    },

    image:{
        width: width * .8,
        height: height * .5,
        marginTop: height * .02,
        marginBottom: height * .02,
        borderRadius: 7,
    },
    imageContainer:{
        alignItems:'center',
    },
    indicatorRow:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:"center",
        alignItems:'center',
    },
    indicator:{
        width: width * .16,
        height: height * .08,
        marginHorizontal: width * .015,
        borderRadius:5,
    },
 
})

