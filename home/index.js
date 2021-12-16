import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Home({ navigation }) {
    return(
        <View style={style.pag}>
            <Text style={ style.texto1}>Who are you?</Text>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Image style={style.icone} source={require('../../assets/alomotoboy.png')}/>
                <Text style={{margin:12,fontSize:20,fontWeight:'bold'}}>Roberval</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Image style={style.icone} source={require('../../assets/alomotoboy.png')}/>
                <Text style={{margin:12,fontSize:20,fontWeight:'bold'}}>Ricardo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Image style={style.icone} source={require('../../assets/alomotoboy.png')}/>
                <Text style={{margin:12,fontSize:20,fontWeight:'bold'}}>Manuel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Image style={style.icone} source={require('../../assets/alomotoboy.png')}/>
                <Text style={{margin:12,fontSize:20,fontWeight:'bold'}}>José</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Image style={style.icone} source={require('../../assets/alomotoboy.png')}/>
                <Text style={{margin:12,fontSize:20,fontWeight:'bold'}}>Rosângela</Text>
            </TouchableOpacity>
            <Image style={style.img} source={{uri:'https://www.teclasap.com.br/wp-content/uploads/2014/04/lanchonete-1.jpg'}}/>
        </View>
    )
}