import React, {Component} from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View style = {{flex: 1}}>

            <SafeAreaView style = {styles.droidSafeArea}/>
            
            <ImageBackground source = {require("../assets/stars.gif")} style = {styles.backgroundImage}>

                <View style = {styles.titleBar}>
                    <Text style = {styles.titleText}>Stellar</Text>
                </View>

                <TouchableOpacity style = {styles.routeCard} onPress = {()=>
                    this.props.navigation.navigate("SpaceCraftsScreen")
                }>
                    <Text style = {styles.routeText}>Space Crafts</Text>
                    <Text style = {styles.bgDigit}>1</Text>
                    <Image source = {require("../assets/space_crafts.png")} style = {styles.iconImage}></Image>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.routeCard} onPress = {()=>
                    this.props.navigation.navigate("StarMapScreen")
                }>
                    <Text style = {styles.routeText}>Star Map</Text>
                    <Text style = {styles.bgDigit}>2</Text>
                    <Image source = {require("../assets/star_map.png")} style = {styles.iconImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.routeCard} onPress = {()=>
                    this.props.navigation.navigate("DailyPicScreen")
                }>
                    <Text style = {styles.routeText}>Daily Pictures</Text>
                    <Text style = {styles.bgDigit}>3</Text>
                    <Image source = {require("../assets/daily_pictures.png")} style = {styles.iconImage}></Image>
                </TouchableOpacity>

            </ImageBackground>

        </View>
        )
    }
}

    const styles = StyleSheet.create({
        droidSafeArea: {
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        backgroundColor: {
            resizeMode: 'cover',
            flex: 1
        },
        titleBar: {
            flex: 0.15,
            justifyContent: 'center',
            alignItems: 'center'
        },
        titleText: {
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        routeCard: {
            flex: 0.25,
            marginTop: 50,
            marginLeft: 50,
            marginRight: 50,
            borderRadius: 30,
            backgroundColor: 'white',
            padding: 20
        },
        routeText: {
            fontSize: 35, 
            fontWeight: 'bold',
            color: 'black'
        },
        bgDigit: {
            position: 'absolute',
            color: 'yellow',
            fontSize: 150,
            right: 20,
            bottom: -15,
            zIndex: 1
        },
        iconImage: {
            position: 'absolute',
            height: 200,
            width: 200,
            resizeMode: "contained",
            right: 20,
            top: -80
        }
    })