import {Button, View, StyleSheet, Text, Image} from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker"

export default function Index() {
    const [image, setImage] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [permiso, setPermiso] = useState<boolean | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permiso denegado para acceder a la cámara.");
                setPermiso(false);
            } else {
                setPermiso(true);
            }
        })();
    }, []);

    const takePhoto = async () => {

        if (!permiso) {
            setErrorMsg("Permiso denegado para acceder a la galería.");
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
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
            <Button title="Tomar foto" onPress={takePhoto} />

            {errorMsg ? (
                <Text style={styles.errorText}>{errorMsg}</Text>
            ) : (
                image && <Image source={{ uri: image }} style={styles.image} />
            )}
        </View>
    );
}
