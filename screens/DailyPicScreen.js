import React, {Component} from 'react';
import { Alert, Text, View, SafeAreaView, Platform, StatusBar, Image, ImageBackground, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import axios from "axios";

export default class DailyPicScreen extends Component {
    constructor(){
        super();
        this.state = {
            apod: {}
        }
    }

    getAPOD = ()=>{
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=27XonnizlrSjAKVVJkWTTd6wFxCsZ76gzCoQSgqa")
            .then(response=>{
                this.setState({apod: response.data})
            })
            .catch(error=>{
                Alert.alert(error.message)
            })
    }

    componentDidMount(){
        this.getAPOD();
    }

    render(){
        if(Object.keys(this.state.apod).length === 0){
            return(
                <View style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Loading...</Text>
                </View>
            )
        } else {
            return(
                <View style = {styles.container}>
                    <SafeAreaView style = {styles.droidSafeArea}/>
                    <ImageBackground
                        source = {require('../assets/space.gif')}>
                        <Text style = {styles.routeText}>Astronomy Picture of the Day</Text>
                        <Text style = {styles.titleText}>{this.state.apod.title}</Text>
                        <TouchableOpacity style = {styles.listContainer}
                        onPress = {()=> Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page.", err))}>
                          <View style = {styles.iconContainer}>
                            <Image source = {require('../assets/play-video.png')} style = {{width: 50, height: 50}}></Image>    
                          </View>  
                        </TouchableOpacity>

                            <Text style = {styles.explanationText}>{this.state.apod.explanation}</Text>

                        </ImageBackground>
             
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      },
      droidSafeArea: {
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
      routeText: {
          fontSize: 35,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center'
      },
      titleText: {
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white'
      },
      listContainer: {
        margin: 100,
        flex: 0.2,
        width: 200,
        height: 150
      },
      iconContainer: {
        height: 150,
        width: 200
      },
      explanationText: {
          fontSize: 15,
          color: "white",
          fontWeight: "bold"
      }
})