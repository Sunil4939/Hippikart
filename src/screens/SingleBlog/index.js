import React from "react";
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity, ImageBackground } from "react-native";
import { images, icons, COLORS } from "../../constants";
import styles from "./styles";

const SingleBlog = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Image style={styles.brand} source={images.brand} />
                </View>
                <View style={styles.mainContainer}>
                    <Text style={styles.headTxt}>Blogs</Text>
                    <View style={styles.row}>
                        <ImageBackground source={images.blogContainer} style={styles.blogs}>
                            <Image source={images.blogImg} style={styles.blogImage} />
                            <Text style={styles.title}>Formal Combinations</Text>
                            <Text style={styles.blogDate}>Published on 28 July 2022</Text>
                        </ImageBackground>
                        <View style={styles.readBtn}>
                            <Text style={styles.readTxt}>You’re Reading</Text>
                        </View>
                    </View>
                        <Text style={styles.text}>
                            If you’ve come here thinking this session might magically change your life because this might be an actual session with a therapist, you might want to find a real therapist. On another note, this session is close to a therapeutic massage for the mind.

                           {' \n \n'}According to most experts, men’s emotional intelligence has a higher score in terms of assertiveness, stress tolerance, and self-regard (self-confidence) and has almost zero skills related to empathy or interpersonal skills. Men as little boys are hardwired to society norms by learning to be more assertive, decisive, competitive, and even aggressive. These direct and indirect teachings rarely give space for empathy or interpersonal skills.

                           {' \n \n'} It’s not that men don’t want to be empathetic, they are just wired with different expectations and norms. And although this might look like the lighter side of things, being assertive can have its ups and downs in most personal and work relationships.

                           {' \n \n'}It’s not that men don’t want to be empathetic, they are just wired with different expectations and norms. And although this might look like the lighter side of things, being assertive can have its ups and downs in most personal and work relationships.
                        </Text>
                            <View style={styles.imageContainer}>
                                <Image source={images.image11} style={styles.image} resizeMode="stretch" />
                                <Image source={images.image11} style={styles.image} />
                            </View>
                        <Text style={styles.text}>
                            If you’ve come here thinking this session might magically change your life because this might be an actual session with a therapist, you might want to find a real therapist. On another note, this session is close to a therapeutic massage for the mind.

                           {' \n \n'}According to most experts, men’s emotional intelligence has a higher score in terms of assertiveness, stress tolerance, and self-regard (self-confidence) and has almost zero skills related to empathy or interpersonal skills. Men as little boys are hardwired to society norms by learning to be more assertive, decisive, competitive, and even aggressive. These direct and indirect teachings rarely give space for empathy or interpersonal skills.

                           {' \n \n'} It’s not that men don’t want to be empathetic, they are just wired with different expectations and norms. And although this might look like the lighter side of things, being assertive can have its ups and downs in most personal and work relationships.

                           {' \n \n'}It’s not that men don’t want to be empathetic, they are just wired with different expectations and norms. And although this might look like the lighter side of things, being assertive can have its ups and downs in most personal and work relationships.
                        </Text>
                </View>

            </View>

        </ScrollView >
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default SingleBlog;