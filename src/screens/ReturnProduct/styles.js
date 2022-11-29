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

    historyContainer: {
        marginHorizontal: width * .03,
        marginVertical: height * .01,
        backgroundColor: COLORS.white,
    },
    historyCart:{
        borderWidth:1,
        borderRadius: 7,
        borderColor:'rgba(35, 35, 35, 0.2)',
        paddingVertical: height * .015,
        paddingHorizontal: width * .03,
        marginVertical: height * .01,
        backgroundColor: COLORS.white,
        flexDirection:'row',
    },
    cartImage:{
        width: width * .22,
        height: height * .14,
        borderRadius: 7,
        overflow:'hidden',
    },
    rightBox:{
        width: width * .62,
        marginLeft: width * .03,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    productName:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 21,
        color: COLORS.black2,
    },

    price: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 16,
        lineHeight: 28,
        color: COLORS.black2,
    },
   
    brandName: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.black2,
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 10,
        lineHeight: 15,
        color: COLORS.black2,
    },
    quantity:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 10,
        lineHeight: 15,
        color: COLORS.black2,
    },
    status:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 10,
        lineHeight: 15,
        color: '#57A608',
    },
    returnBtn:{
        width: width * .5,
        height: height * .06,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'rgba(35, 35, 35, 0.3)',
        borderRadius:7,
        marginHorizontal: width * .22,
        marginVertical: height * .02,
        backgroundColor:COLORS.white,
    },
   return:{
    width: width * .05,
    height: height * .02,
    marginRight: width * .04,
   },
   returnTxt:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.black2,
   },
   addressContainer:{
    borderWidth:1,
    borderRadius: 7,
    borderColor:'rgba(35, 35, 35, 0.2)',
    paddingVertical: height * .015,
    paddingHorizontal: width * .03,
    marginVertical: height * .01,
    backgroundColor: COLORS.white,

   },
   labels:{
    fontFamily: 'Poppins Medium 500',
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.black2,
   },
   addressBox:{
    width: width * .8,
    marginTop: height * .02,
   },
   address:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.black2,
    marginTop: height * .01,
   },
   phoneTxt:{
    fontFamily: 'Poppins Medium 500',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.black2,
    marginRight: width * .04,
    marginTop: height * .01,
   },
   phoneRow:{
    flexDirection:'row',
    alignItems:'center',
   },
   call:{
    width: width * .04,
    height: height * .02,
    bottom: height * -.005,
    marginRight: width * .06,
   },
   mail:{
    width: width * .06,
    height: height * .03,
    bottom: height * -.005,
    marginRight: width * .04,
   },
   row1:{
    width: width * .5,
    flexDirection:'row',
    alignItems:'center',
   },
   orderId:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 12,
    lineHeight: 18,
    color: '#656565',
   },
   reviewContainer:{
    marginTop: height * .02,
   },
   reviewBox:{
    borderRadius: 7,
    paddingVertical: height * .015,
    paddingHorizontal: width * .03,
    marginVertical: height * .01,
    backgroundColor: '#FEF6D3',
   },
   star:{
    width: width * .04,
    height: height * .02,
    marginHorizontal: width * .005,
   },
   rating:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 12,
    lineHeight: 18,
    color: '#989898',
    marginRight: width * .06,
   },
   ratingRow:{
    flexDirection:'row',
    marginTop: height * .01,
    justifyContent:'space-between',
    alignItems: 'center',
   },
   postBtn:{
    width: width * .2,
    height: height * .04,
    backgroundColor: COLORS.yellow,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
   },
   postBtnTxt:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.black,
   },
   inputTxt:{
    height: height * .06,
    fontFamily: 'Poppins Medium 500',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.black,
    marginLeft: width * -.01,
   },
   edit:{
    width: width * .08,
    height: height * .06,
    position:'absolute',
    top: height * .015,
    right: width * .03,
    alignItems:'center',
    justifyContent:'center',
   },
   editIcon:{
    width: width * .05,
    height: height * .03,
   },
})