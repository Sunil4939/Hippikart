import React from "react";
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from "react-native";
import Blogs from "../../component/BlogComponent";
import Header from "../../component/Header";
import { images, icons, COLORS, dummyData } from "../../constants";
import styles from "./styles";

const BlogPage = ({navigation}) => {
    return( 
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

                <Header navigation={navigation} />
            <View>
                <View style={styles.row}>
                    <View style={styles.blogBox}></View>
                    <Text style={styles.blogTxt}>Blog List</Text>
                    <View style={[styles.blogBox, { backgroundColor: '#DB195F' }]}></View>
                </View>
                <View style={styles.blogRow}>
                {dummyData.BlogData.map((items)=>(
                <Blogs navigation={navigation} />
                ))}
                </View>
                
            </View>
           

           

           
        </View>

    </ScrollView >
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default BlogPage;