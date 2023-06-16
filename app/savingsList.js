import { useState } from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;


let savingsList = () => {
    
    const [savings, setSavings] = useState([
        {
            title: "Para sa kotse",
            percentage: 50,
            id: "1"
        },
        {
            title: "Foods",
            percentage: 50,
            id: "2"
        },
        {
            title: "Travel travel",
            percentage: 50,
            id: "3"
        },
        {
            title: "Para sa kotse",
            percentage: 50,
            id: "1"
        },
        {
            title: "Foods",
            percentage: 50,
            id: "2"
        },
        {
            title: "Travel travel",
            percentage: 50,
            id: "3"
        },
        {
            title: "Para sa kotse",
            percentage: 50,
            id: "1"
        },
        {
            title: "Foods",
            percentage: 50,
            id: "2"
        },
        {
            title: "Travel travel",
            percentage: 50,
            id: "3"
        } 
    ])

    return(
        <ScrollView style={styles.container}>

            <View>
                <ImageBackground source={require("./images/background.png")} style={styles.backgroundImage}>
                    <Text style={styles.text}>Ipon List</Text>
                </ImageBackground>
            </View>
            <View style={styles.savingsContainer}>

                {
                    savings.map((saving, index) => {
                        return(
                            <Link href={`/${saving.id}`} style={styles.link}> 
                                <View style={styles.savingsItem} key={index}>
                                        <Text style={styles.savingsTitle}>{saving.title}</Text>
                                        <Text style={styles.savingsStatus}>{saving.percentage}%</Text>
                                </View>
                            </Link>

                        )
                            
                    })
                }
           
            </View>
           
        </ScrollView>
      
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
      alignSelf: 'center'
    },
    savingsContainer:{
        marginTop: 106
    },

    link: {
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },

    savingsItem:{
        width: "100%",
        justifyContent: "space-between",
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: "center",
        flexDirection: "row",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: screenWidth * 0.9 
    },

    savingsTitle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
    },
    savingsStatus:{
    }
  });
  

export default savingsList;