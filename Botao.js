import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Botao(props){

        return (
        <View style={styles.view}>
        <TouchableOpacity onPress={()=>props.logicaCalculadora(props.numero)} style={styles.buttom} 
        ><Text style={styles.text}>{props.numero}</Text>
        </TouchableOpacity>
        </View>
        );
}

const styles=StyleSheet.create({
        view:{
                backgroundColor:'#000000',
                borderColor:'white',
                borderWidth:1,width:'33.3%',
                height:'25%',
        },
        buttom:{
                width:'100%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
        },
        text:{
                fontSize:24,color:'#FFFFFF' 
        }
})