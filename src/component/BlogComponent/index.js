import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { images, COLORS, dummyData } from "../../constants";
const { width, height } = Dimensions.get('window')

const Blogs = ({ navigation }) => {
    const blog = dummyData.BlogData[0];
    return (
        <ImageBackground source={images.blogContainer} style={styles.blogs}>
        <Image source={blog.blogImage} style={styles.blogImage} />
        <Text style={styles.title}>{blog.title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SingleBlogScreen')}>
            <Text style={styles.btnTxt}>Read More  &#62;</Text>
        </TouchableOpacity>
        <Text style={styles.blogDate}>{blog.date}</Text>
        </ImageBackground>
    )
}

export default Blogs;
const styles = StyleSheet.create({
   
    blogs: {
        width: width * .46,
        height: height * .25,
        alignItems: 'center',
        padding: width * .03,
        margin: width * .02,
        marginTop: height * .01,
        // borderRadius: width * .5,
        // borderColor: COLORS.yellow,
        // borderWidth:1,
        // shadowColor: "transparent",
        // shadowOpacity: 1,
        // elevation: 20, 
    },
    blogImage: {
        width: width * .2,
        height: height * .1,
        borderRadius: 50,
    },
    title: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 10,
        lineHeight: 15,
        color: COLORS.black2,
        marginTop: height * .01,
    },
    btnTxt: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 10,
        lineHeight: 15,
        color: COLORS.red,
        marginTop: height * .01,
    },
    blogDate: {
        width: width * .2,
        textAlign: 'center',
        fontFamily: 'Poppins Regular 400',
        fontSize: 8,
        lineHeight: 12,
        color: 'rgba(35, 35, 35, 0.7)',
        marginTop: height * .01,
    }

})