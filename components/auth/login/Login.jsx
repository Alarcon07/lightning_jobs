import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import LoginImage from '../../../assets/misc/login.jpg';
import styles from "./login.style";

const Login = () => {
  return (
    <View style={styles.container}>
        <View style ={styles.logoContainer}>
            <LoginImage style ={styles.logoImage} />
        </View>
        <View>
          <Text style={styles.loginHeader}>Login</Text>
          <View style={styles.containerTextInputs}>
            <TextInput placeholder='Username' style ={styles.inputBackground}></TextInput>
          </View>
          <View style={styles.containerTextInputs}>
            <TextInput placeholder='Password' style ={styles.inputBackground}></TextInput>
            <TouchableOpacity onPress={()=>{}} style = {styles.loginBtn}>
              <Text style={{textAlign: 'center', fontWeight:'700', fontSize:16}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>New to the app?</Text>
            <TouchableOpacity onPress={()=>{}} >
            <Text style={{textAlign: 'center', fontWeight:'700'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

export default Login;