import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        // paddingBottom:height * .04,
    },
    brandContainer: {
        flexDirection:'row',
        alignItems: 'center',
        marginTop: height * .03,
        marginBottom: height * .01,
        marginLeft: width * .03,
    },
   backArrow:{
    width: width * .03,
    height: height * .02,
   },
    brand: {
        width: width * .32,
        height: height * .039,
        marginLeft: width * .03,
    },
    mainContainer:{
    margin: width * .03,
   },
    blogRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    blogs: {
        width: width * .46,
        height: height * .25,
        alignItems: 'center',
        padding: width * .03,
        marginTop: width * .03,
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

    blogDate: {
        width: width * .2,
        textAlign: 'center',
        fontFamily: 'Poppins Regular 400',
        fontSize: 8,
        lineHeight: 12,
        color: 'rgba(35, 35, 35, 0.7)',
        marginTop: height * .01,
    },
    headTxt:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 15,
        lineHeight: 20,
        color: '#919191',
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    readBtn:{
        width: width * .42,
        height: height * .05,
        backgroundColor: COLORS.yellow,
        justifyContent:'center',
        alignItems:'center',
    },
    readTxt:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black2,
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 15,
        color: COLORS.black2,
        marginTop: height * .01,
        marginBottom: height * .01,
    },
    image:{
        width: width * .7,
        height: height * .5,
        marginTop: height * .02,
        marginBottom: height * .02,
        borderRadius: 7,
    },
    imageContainer:{
        alignItems:'center',
    },

})