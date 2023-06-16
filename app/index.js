import { Link } from 'expo-router';
import { useState } from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

export default function App() {

  const [text, setText] = useState("teste");

  return (
   
    <View style={styles.container}>
      <View >
          <ImageBackground source={require("./images/background.png")} style={styles.backgroundImage}>
            <Text style={styles.text}>Track my ipon</Text>
          </ImageBackground>
      </View>
      <View style={styles.passCodeContainer}>
        <Text style={styles.passcode}>Passcode</Text>

        <TextInput style={styles.inputText} 
          value={text}
          onChangeText={setText}
        />
        
       
            {/* <Pressable style={styles.button} onPress={() => setText("pressed")}>
              <Link href="/profile" style={styles.link}> 
                  <Text style={styles.buttonText}>{">"}</Text>
              </Link>

            </Pressable> */}

            <Link href="/savingsList" style={styles.button}> 
                <Text style={styles.buttonText}>{">"}</Text>
            </Link>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover', // or 'contain' to adjust the image size
    paddingBottom: 75
  },

  container: {
    flex: 1,
    width: '100%' 
  },
  text: {
    color: '#fff',
    marginTop: 100,
    textAlign: 'center',
    backgroundColor: 'black',
    width: 200,
    fontSize: 20,
    textTransform: 'uppercase', 
    fontWeight: 'bold', 
    padding: 6 ,
    alignSelf: 'center', 
    marginTop: 185
  },
  passCodeContainer:{
    paddingTop: 88,
    
  },
  passcode: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: "bold"

  },
  inputText: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    maxWidth: 227,
    alignSelf: 'center',
    width: "100%"
  },

  link:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    maxWidth: 137,
    alignSelf: "center",
    width: "100%",
    marginTop: 30

  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    maxWidth: 137,
    alignSelf: "center",
    width: "100%",
    marginTop: 30
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});
