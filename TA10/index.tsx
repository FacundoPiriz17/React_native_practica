import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as Location from "expo-location";

export default function Index() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permiso denegado para acceder a la ubicación.");
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        })();
    }, []);

    return (
        <View style={styles.container}>
            {errorMsg ? (
                <Text style={styles.errorText}>{errorMsg}</Text>
            ) : location ? (
                <>
                    <Text style={styles.text}>Latitud: {location.coords.latitude}</Text>
                    <Text style={styles.text}>Longitud: {location.coords.longitude}</Text>
                    <Text style={styles.text}>Altitud: {location.coords.altitude ?? "No disponible"}</Text>
                </>
            ) : (
                <ActivityIndicator size="large" color="#007AFF" />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f0f0f0",
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
    errorText: {
        fontSize: 18,
        color: "red",
        textAlign: "center",
    },
});
