import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import Botao from './Botao';

export default function App() {

  console.disableYellowBox  = true;
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");


  const [stringCalculo, setStringCalculo] = useState("0");

  var numeros = [];

  for(var i = 0; i <= 9; i++){
      numeros.push(i);
  }

  function logicaCalculadora(n){
    if(sinal == ""){
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setStringCalculo(parseInt(firstNumber.toString() + n.toString()));
    }

    if((n == "/" || n == "*" || n == "+" || n == "-") && secondNumber == 0){
      setStringCalculo(firstNumber.toString()+ n );
      setSinal(n);
    }
    if(sinal != ""){
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setStringCalculo(firstNumber+sinal+parseInt(secondNumber.toString() + n.toString()))
    }
    if(n == "="){
      let resultado = 0;
      if(sinal == "+"){
         resultado=firstNumber + secondNumber;
      }else if(sinal == "-"){
         resultado = firstNumber - secondNumber;
      }else if(sinal == "*"){
         resultado = firstNumber * secondNumber;
      }else if(sinal == "/"){
         resultado=firstNumber / secondNumber;
      }
      setStringCalculo(resultado);
      setSinal("");
      setFirstNumber(resultado);
      setSecondNumber(0)
    }

  }
 
  return (
    <View style={styles.mainView}>
      <StatusBar hidden />
      <View style={styles.topo}><Text style={styles.text}>{stringCalculo}</Text></View>
      
      <View style={styles.viewButtom}>
        <TouchableOpacity onPress={()=>logicaCalculadora('+')} style={styles.botton}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>logicaCalculadora('-')} style={styles.botton}>
           <Text style={styles.text}>-</Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={()=>logicaCalculadora('/')} style={styles.botton}>
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>logicaCalculadora('*')} style={styles.botton}>
          <Text style={styles.text}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>logicaCalculadora('=')} style={styles.botton}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>

      </View>
      
      <View style={styles.viewNumbers}>
          {
            numeros.map(function(e){
            return (<Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>);
            })
          }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
      topo:{
        borderBottomWidth:2,
        backgroundColor:'rgb(20,20,20)',
        height:'16.6%',
        justifyContent:'center',
        paddingLeft:20,
      },
      mainView:{
        flex:1,
        backgroundColor:'black',
      },
      text:{
        fontSize:24,
        color:'white',
      },
      botton:{
        width:'20%',
        backgroundColor:'rgb(20,20,20)',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
      },
      viewButtom:{
        flexDirection:'row',
        height:'16.6%',
        alignItems:'center',
      },
      viewNumbers:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderTopColor:'black',
        borderTopWidth:2,
        height:'66.8%',
      }
});
