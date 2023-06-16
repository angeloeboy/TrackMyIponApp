import { useRouter, useSearchParams } from "expo-router"
import {ImageBackground, StyleSheet, Text, View, Button, Pressable } from 'react-native';


let savingsID = () => {
    const { savingsID} = useSearchParams();
    const router = useRouter();
    return(
        <View style={styles.container}>

            <View>
                <ImageBackground source={require("./images/background.png")} style={styles.backgroundImage}>
                    <Text style={styles.text}>{savingsID}</Text>
                </ImageBackground>
                <Button title={"button"} onPress={() => router.back()}/> 
            </View>
        
       
        </View>
        
    )
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
      alignSelf: 'center'
    },
    savingsContainer:{
        marginTop: 106
    },

    savingsItem:{
        width: "90%",
        maxWidth: 404,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 25,
        paddingBottom: 25,
        alignSelf: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1
    },
    savingsTitle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
    },
    savingsStatus:{

    }
  });


export default savingsID;