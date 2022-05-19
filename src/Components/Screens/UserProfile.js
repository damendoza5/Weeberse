import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as st from 'firebase/storage';
import { getAuth } from "firebase/auth";
import { ActivityIndicator } from 'react-native-paper';
import theme from '../../Theme';

const deviceHeight = Dimensions.get("screen").height;

const UserProfile = () => {
    const auth = getAuth();
    const userInfo = auth.currentUser;
    const uid = userInfo.uid;
    const [imageURL, setImageURL] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const storage = st.getStorage();
    const reference = st.ref(storage, `UserProfiles/${uid}/profile.jpg`);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.cancelled) {
            const img = await fetch(result.uri);
            const bytes = await img.blob();
            await st.uploadBytes(reference, bytes);
            await st.getDownloadURL(reference).then((x)=>{
                setImageURL(x);
            })
        }
    };

    const deleteImage = async () => {
        st.deleteObject(reference).then(()=>{
            setImageURL();
            console.log("deleted");
        }).catch((error)=>{
            console.log("oops");
        })
    }

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
        
        const getImage = async () => {
            try {
                if (imageURL == undefined) { 
                    await st.getDownloadURL(reference).then((x)=>{
                        setImageURL(x);
                    })
                };
            } catch (err) {
                console.log(err);
            }
        }

        getImage();
    }, []);

    return (
        <View style={styles.container}>
            {imageURL ? (
                <View style={styles.ppContainer}>
                    <Image source={{uri: imageURL}} style={styles.profileImage}/>
                </View>
            ): ( 
                <View style={styles.container}>
                    <Image source={require("../../../assets/user-profile.png")} style={styles.profileImage}></Image>
                    { isLoading ? (
                        <ActivityIndicator animating={true} color={theme.colors.acento}/>
                    ) : null}
                </View>
            )}
            <TouchableOpacity onPress={pickImage}>
                <Text style={styles.selectImage}>Select image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteImage}>
                <Text style={styles.selectImage}>Delete image</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: theme.colors.background
    },
    selectImage: {
        color: theme.colors.white
    },
    ppContainer: {
        alignItems: 'center'
    },
    profileImage: {
        width: 100, 
        height: 100, 
        borderRadius: 50,
    }
})

export default UserProfile;