import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * .03,
        marginBottom: height * .01,
        marginLeft: width * .03,
    },
    backArrow: {
        width: width * .03,
        height: height * .02,
    },
    brand: {
        width: width * .32,
        height: height * .039,
        marginLeft: width * .03,
    },

    leftText: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: '#919191',
        marginLeft: width * .03,
        marginRight: width * .03,
        marginTop: height * .02,
        marginBottom: height * .02,
    },
    formContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: width * .03,
        marginVertical: height * .01,
        paddingHorizontal: width * .03,
        paddingVertical: height * .02,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },


    label: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },


    btn: {
        backgroundColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 10,
        width: width * .2,
        height: height * .04,
        alignItems: "center",
        justifyContent: 'center',
    },
    btnTxt: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.orange1,
    },
    text: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.black2,
        marginTop: height * .01,
    },
    addBtn: {
        width: width * .5,
        height: height * .07,
        borderRadius: 7,
        marginTop: height * .03,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.orange1,
    },
    addBtnText: {
        fontFamily: 'Poppins SemiBold 600',
        color: COLORS.white,
        fontSize: 16,
        lineHeight: 21,
    },
    centerBtn:{
        marginHorizontal: width * .22,
        marginVertical: height * .03,
    },
  
    addressBox:{
        width: width * .87,
        paddingHorizontal: width * .03,
        paddingVertical: height * .01,
        marginVertical: height * .02,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
    }
})