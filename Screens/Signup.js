import React, { useState } from 'react';
import {View, Text,StyleSheet,TextInput, Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

            
const Signup = ({navigation}) => {
    const [firstName, enterFirstName] = useState("");
    const [lastName, enterLastName] = useState("");
    const [username, enterUser] = useState("");
    const [password, enterPass] = useState("");

    const [errorMsg, getErrorMsg] = useState("");

    function registerUser(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "first_name": firstName,
        "last_name": lastName,
        "email": username,
        "password": password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://fonder.edwardlin.ca/api/v1/users/signup.php", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.status){
                console.log("User created");
                navigation.navigate("Login");
            }
            else{
                getErrorMsg(result.message)
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
            <Text style={styles.label}>First Name</Text>
            <TextInput
                onChangeText={(username) => enterFirstName(username)}
                placeholder={'John'}
                style={styles.input}
            />
        </View>
        <View style={styles.formItem}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
                onChangeText={(username) => enterLastName(username)}
                placeholder={'Doe'}
                style={styles.input}
            />
        </View>
        <View style={styles.formItem}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                onChangeText={(username) => enterUser(username)}
                placeholder={'johndoe@fonder.ca'}
                style={styles.input}
            />
        </View>
        <View style={styles.formItem}>
            <Text style={styles.label}>Password</Text>
            <TextInput
                onChangeText={(username) => enterPass(username)}
                style={styles.input}
                placeholder={"***************"}
                secureTextEntry={true}
            />
        </View>
        <Text style={{alignSelf: 'center', fontSize:15, marginBottom: 5, color: '#7b0001', fontWeight: 'bold'}}>{errorMsg}</Text>
        <TouchableOpacity style={styles.btn} onPress={()=>registerUser()}>
            <Text style={styles.btnTxt}>SIGN-UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.registerText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
)}

export default Signup

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical: 50,
        display:'flex',
        alignItems:'center',
        backgroundColor:'#E66255'
  },
    bannerImg:{
        height: 350,
        width : '80%'
    },
    formItem:{
        marginBottom: 20
    },
    label:{
        fontSize: 22,
        color: '#fff',
        marginBottom: 8,
        fontWeight: 'bold'
    },
    input: {
        width: Dimensions.get("window").width * 0.85,
        height: 35,
        backgroundColor: '#FFFBF3',
        borderWidth: 0,
        padding: 10,
        borderRadius: 8,
        color: '#E66255',
    },
    passwordReset:{
        marginTop: 10,
        color: '#fff',
        fontSize: 12,
        alignSelf: 'center',
        marginBottom: 75
    },
    registerText:{
        marginTop: 10,
        fontSize: 12,
        color: '#fff',
        alignSelf: 'center'

    },
    btn: {
        backgroundColor: '#FFCB69',
        width: Dimensions.get("window").width * 0.7,
        height: 50,
        paddingVertical:5,
        marginVertical:5,
        borderRadius:40,
        alignSelf: 'center',
        justifyContent: 'center'
      },
      btnTxt: {
        color:'white',
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold'
        
      }
})