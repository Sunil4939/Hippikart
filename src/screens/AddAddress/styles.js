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
        marginLeft: width * .03,
        marginRight: width * .03,
        paddingLeft: width * .03,
        paddingRight: width * .03,
        paddingBottom: height * .02,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
    },
    input: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
        paddingLeft: width * .04,
        marginTop: height * .02,
    },
    label: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginTop: height * .03,
    },
    inputRow:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    BtnRow:{
        flexDirection: 'row',
        marginTop: height * .03,
        alignItems:'center',
    },
    btn:{
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#A7A7A7',
        width: width * .2,
        height: height * .06,
        alignItems:"center",
        justifyContent: 'center',
        marginRight: width * .02,
    },
    btnTxt:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color:'#A7A7A7',
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: '#A7A7A7',
    },
   addBtn:{
        height: height * .07,
        borderRadius:7,
        marginTop: height * .03,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: COLORS.orange1,
    },
   addBtnText:{
        fontFamily: 'Poppins SemiBold 600',
        color: COLORS.white,
        fontSize: 16,
        lineHeight: 21,
    },
})