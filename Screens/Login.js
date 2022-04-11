import React, { useState } from 'react';
import {View, Text,StyleSheet, Image, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as TokenAction from '../store/actions/user';
import { useDispatch } from 'react-redux';

const Login = ({navigation}) => {

    const dispatch = useDispatch();
    const [username, enterUser] = useState("");
    const [password, enterPass] = useState("");
    const [errorMsg, getErrorMsg] = useState("");



    function loginUser(){

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": username,
        "password": password.password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://fonder.edwardlin.ca/api/v1/users/login.php", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.status){
                    dispatch(TokenAction.addUser(result.userId));
                    navigation.navigate("Home");
                    console.log("logging user in");


            }
            else{
                console.log(result);
                getErrorMsg(result.message);
            }
        
        
        })
        .catch(error => console.log('error', error));
    }
    return(
    <View style={styles.container}>
        <Image
        style={styles.bannerImg}
        source={require('../assets/img/login-girl.png')}
      />
      <View>
          <View style={styles.formItem}>
        <Text style={styles.label}>Email</Text>
        <TextInput
            onChangeText={(username) => enterUser(username)}
            placeholder={'Email'}
            style={styles.input}
        />
        </View>
        <View style={styles.formItem}>
            <Text style={styles.label}>Password</Text>
            <TextInput
                onChangeText={(password) => enterPass({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />
            <Text style={styles.passwordReset}>Forgot password?</Text>
        </View>

        <Text style={{alignSelf: 'center', fontSize:15, marginBottom: 5, color: '#7b0001', fontWeight: 'bold'}}>{errorMsg}</Text>
        
        <TouchableOpacity style={styles.btn} onPress={()=>loginUser()}>
            <Text style={styles.btnTxt}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
            <Text style={styles.registerText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
)}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical: 50,
        display:'flex',
        alignItems:'stretch',
        backgroundColor:'#E66255',
        paddingHorizontal:20
  },
    bannerImg:{
        height: 350,
        width : '80%',
        resizeMode:'contain',
        alignSelf:'center'
    },
    formItem:{
        marginBottom: 20,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    label:{
        fontSize: 22,
        color: '#fff',
        marginBottom: 8,
        fontWeight: 'bold',
        alignSelf:'flex-start'
    },
    input: {
        height: 35,
        backgroundColor: '#FFFBF3',
        borderWidth: 0,
        padding: 10,
        borderRadius: 8,
        width:'100%',
        color: '#E66255',
    },
    passwordReset:{
        marginTop: 10,
        color: '#fff',
        fontSize: 12,
        alignSelf: 'center',
        marginBottom: 10
    },
    registerText:{
        marginTop: 10,
        fontSize: 12,
        color: '#fff',
        alignSelf: 'center'

    },
    btn: {
        backgroundColor: '#FFCB69',
        height: 50,
        paddingVertical:5,
        marginVertical:5,
        borderRadius:40,
        alignSelf: 'center',
        width:'80%',
        justifyContent: 'center'
      },
      btnTxt: {
        color:'white',
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold'
        
      }
})
