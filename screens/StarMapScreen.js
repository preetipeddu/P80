import React,  {Component} from 'react';
import { Text, View, TextInput, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import axios from "axios";

export default class StarMapScreen extends Component {
    constructor(){
        super();
        this.state = {
            longitude: {},
            latitude: {}
        }
    }

    componentDidMount(){
        this.getConstellation()
    }

    getConstellation = ()=>{
        axios
        .get("https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true")
        .then(response =>{
            this.setState({longitude: response.data, latitude: response.data})
        })
        .catch(error =>{
            Alert.alert(error.message)
        })
    }

    render(){
        return(
            <View style = {{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style = {{fontSize: 30}}>Star Map</Text>

                <WebView 
                    scalesPageToFit = {true}
                    source = "https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"
                    style = {{marginTop: 20, marginBottom: 20}}
                />

                <TextInput 
                    style = {{height: 40, width: 500, borderColor: 'black', borderWidth: 1, margin: 10}}
                    placeholder = "Enter your longitude here..."
                    placeholderTextColor = "#ffff#000000"
                    onChangeText = {(text)=>{
                        this.setState({longitude: text})
                    }}
                />

                <TextInput
                    style = {{height: 40, width: 500, borderColor: 'black', borderWidth: 1, margin: 10}}
                    placeholder = "Enter your latitude here..."
                    onChangeText = {(text)=>{
                        this.setState({latitude: text})
                    }}
                />
            </View>
        )
    }
}