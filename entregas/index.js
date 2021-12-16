import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Listar({ navigation }) {

    const [lista, setlista] = useState([
        {
            "endereco": "Não foi possível carregar dados"
        }
    ])
    
    useEffect(()=>{
        fetch("http://10.87.202.131:3000/entregas/entregadores/", {
            "method": "GET",
            "headers": {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            return resp.json()
        }).then(data => {
            setlista(data)
        }).catch(err => {
        })
    },[lista])

    return (
        <View style={style.pag}>
            {lista.map((item, index) => 
                <TouchableOpacity key={index} style={style.item} onPress={() => { navigation.navigate('Detalhes', item) }}>
                    <Text>Rua José Fernandes, 136, Jaguariúna</Text>
                    <Image style={style.icone} source={require('../../assets/alomotoboy.png')} />
                </TouchableOpacity>
            )}
        </View>
    )
}