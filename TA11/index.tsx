import {Button, View, StyleSheet, Text, Image} from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker"

export default function Index() {
    const [image, setImage] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [permiso, setPermiso] = useState<boolean | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            console.log(status);
            if (status !== "granted") {
                setErrorMsg("Permiso denegado para acceder a la galería.");
            }
            setPermiso(status === 'granted');
        })();
    }, []);

    const pickImage = async () => {

        if (!permiso) {
            setErrorMsg("Permiso denegado para acceder a la galería.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: 200,
            height: 200,
        },
        errorText: {
            fontSize: 18,
            color: "red",
            textAlign: "center",
        },
    });

    return (
            <View style={styles.container}>
                <Button title="Pick an image from camera roll" onPress={pickImage}/>
                {errorMsg ? (
                    <Text style={styles.errorText}>{errorMsg}</Text>
                ) : (
                    <>
                        {image && <Image source={{uri: image}} style={styles.image}/>}
                    </>
                )}
            </View>
        );
    }
