import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    head: {
        width: width,
        height: height * .15,
        backgroundColor: COLORS.yellow2,
        marginTop: height * .01,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    leftBox: {
        width: width * .45,
        height: height * .12,
        justifyContent: 'center',
    },
    rightBox: {
        width: width * .45,
        height: height * .12,
        justifyContent: 'center',
    },
    line: {
        width: width * .005,
        height: height * .12,
        backgroundColor: COLORS.black2,
    },
    headTitle: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 11.5,
        color: COLORS.black2,
    },
    txt: {
        fontFamily: 'Poppins Regular 400',
        color: COLORS.black2,
        fontSize: 10,
        marginTop: 5,
    },
    imgRow: {
        flexDirection: 'row',
        marginTop: height * .03,
        marginBottom: height * .03,
        width: width,
        height: height * .25,
    },
    imgBox: {
        width: width * .5,
        justifyContent: 'center',
    },
    rightImgBox: {
        alignItems: 'flex-end',
        paddingRight: width * .03,
    },
    imgBtn: {
        width: width * .17,
        height: height * .04,
        backgroundColor: 'rgba(255, 255, 255, 0.27)',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: width * .02,

    },
    imgBtnText: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 10,
        lineHeight: 12,
        color: COLORS.black2,
    },
    imgTxtContainer: {
        width: width,
        height: height * .25,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: width * .08,
    },
    imgBoxTitle: {
        fontFamily: 'Poppins Bold 700',
        fontSize: 20,
        lineHeight: 30,
        color: COLORS.white,
        textAlign: 'center',
    },
    imgBoxSubTitle: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.white,
        textAlign: 'center',
    },
    discountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: width * .03,
    },
    discountBox: {
        width: width * .28,
        height: height * .05,
    },
    discountBoxTxt: {
        fontFamily: 'Poppins Bold 700',
        fontSize: 20,
        lineHeight: 30,
        marginTop: width * -.014,
        color: COLORS.black,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: height * .02,
        marginBottom: height * .02,
    },
    categoryTxt: {
        color: COLORS.black,
        fontFamily: 'Poppins Regular 400',
        fontSize: 16,
        marginBottom: -5,
        textAlign: 'center',
    },
    categoryBox: {
        width: width * .2,
        height: height * .02,
        backgroundColor: COLORS.yellow,
    },
    categoryImg: {
        width: width * .28,
        height: height * .15,
    },
    arrivalsImg: {
        width: width,
        height: height * .07,
        height: height * .25,
        paddingBottom: height * .03,
        marginTop: height * .02,
        marginBottom: height * .02,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    shopNowBtn: {
        width: width * .34,
        height: height * .05,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 33,
        marginTop: height * .012,
    },
    shopNowTxt: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.yellow,
    },
    categoryName: {
        width: width * .22,
        height: height * .026,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderRadius: 31,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: width * .005,
        marginRight: width * .005,
    },
    categoryNameTxt: {
        color: COLORS.black,
        fontFamily: 'Poppins Regular 400',
        fontSize: 8,
        marginBottom: -1,
        textAlign: 'center',
    },
    rowCategory: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: width * .02,
    },
    viewAllTxt: {
        color: COLORS.black,
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        marginBottom: -3,
        textAlign: 'center',
    },
    trending: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: width * .03,
        paddingRight: width * .03,
    },
    grabNowBtn: {
        width: width * .34,
        height: height * .06,
        backgroundColor: 'rgba(35, 35, 35, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 33,
        marginTop: height * .012,
    },
    grabNowTxt: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.white,
    },
    littleImgRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    littleImg: {
        width: width * .42,
        height: height * .22,
        marginLeft: width * .03,

    },
    littleTitle: {
        fontFamily: 'Poppins Bold 700',
        fontSize: 20,
        lineHeight: 30,
        color: 'rgba(35, 35, 35, 0.55)',
    },
    littleImgTxtBox: {
        marginLeft: width * -.1,
    },
    littleSubtitle: {
        fontFamily: 'Poppins Regular 400',
        color: COLORS.black,
        fontSize: 12,
        lineHeight: 15,
    },
    littleLeftTxt: {
        position: 'absolute',
        zIndex: 1,
        right: width * .29,
        alignItems: 'flex-end',
    },
    vector: {
        position: 'absolute',
        width: width * .6,
        height: height * .068,
        top: height * .17,
        left: width * .22,
        transform: [{ rotate: "35deg" }]
    },
    rightVector: {
        left: width * .24,
        transform: [{ rotate: "-30deg", }]
    },
    littleBtn: {
        width: width * .3,
        height: height * .05,
        backgroundColor: 'rgba(35, 35, 35, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: height * .012,
        zIndex: 1,
    },
    linearGradient: {
        width: width * .5,

    },
    linearGradient1: {
        width: width * .5,
        height: height * .04,
        marginTop: height * .02,
        marginBottom: height * .02,
    },
    linearRow: {
        flexDirection: 'row',
    },
    linearTxtContainer: {
        marginLeft: width * .03,
        marginTop: height * .02,
        marginBottom: height * .02,
    },
    linearTxt: {
        fontFamily: 'Poppins Bold 700',
        fontSize: 20,
        lineHeight: 30,
        color: COLORS.white,
    },

})