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
        marginHorizontal: width * .03,
        marginVertical: height * .01,
        paddingHorizontal: width * .03,
        paddingVertical: height * .02,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    end:{
        alignItems:"flex-end",
    },

    input: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 16,
        color: COLORS.black,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: COLORS.orange1,
        backgroundColor: COLORS.white,
        paddingLeft: width * .02,
        height: height * .055,
        width: width* .35,
        marginBottom: height * .01,
        justifyContent:'center',
    },
    offer:{
        flexDirection:'row',
        backgroundColor:COLORS.black,
        borderRadius:5,
        marginTop: height * .01,
        paddingHorizontal: width * .03,
        paddingVertical: height * .005,
    },
    discount:{
        width: width * .042,
        height: height * .022,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * .03,
    },
    offerText:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.white,
    },
    label: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },
 
  
    btn:{
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: COLORS.orange1,
        width: width * .2,
        height: height * .04,
        alignItems:"center",
        justifyContent: 'center',
    },
    btnTxt:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color:'#A7A7A7',
    },
    text:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.black2,
        marginTop: height * .01,
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
    orderContent:{
        borderBottomColor:'#ADADAD',
        borderBottomWidth:1,
        paddingVertical: height * .02,
    }
})