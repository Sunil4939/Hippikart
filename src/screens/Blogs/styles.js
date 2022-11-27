import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
    },
    

    row:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:height * .02,
        marginBottom: height * .02,
    },

    blogRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    blogTxt:{
        color: COLORS.black,
        fontFamily:'Poppins Regular 400',
        fontSize:16,
        marginBottom:-5,
        textAlign:'center',
    },
    blogBox:{
        width: width * .2,
        height: height * .02,
        backgroundColor: COLORS.yellow,
    },
    
   
 
})