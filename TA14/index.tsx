import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
    const [input, setInput] = useState("");
    const [storedValue, setStoredValue] = useState<string | null>(null);

    const STORAGE_KEY = "@mi_informacion";

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const valor = await AsyncStorage.getItem(STORAGE_KEY);
                if (valor !== null) setStoredValue(valor);
            } catch (e) {
                Alert.alert("Error", "No se pudo cargar la información");
            }
        };
        cargarDatos();
    }, []);

    const guardarDatos = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, input);
            setStoredValue(input);
            setInput("");
        } catch (e) {
            Alert.alert("Error", "No se pudo guardar la información");
        }
    };

    const limpiarDatos = async () => {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            setStoredValue(null);
            setInput("");
        } catch (e) {
            Alert.alert("Error", "No se pudo limpiar la información");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Guardar Información con AsyncStorage</Text>

            <TextInput
                style={styles.input}
                placeholder="Escribe algo aquí..."
                value={input}
                onChangeText={setInput}
            />

            <View style={styles.buttonContainer}>
                <Button title="Guardar" onPress={guardarDatos} />
                <Button title="Limpiar" onPress={limpiarDatos} color="red" />
            </View>

            <View style={styles.displayContainer}>
                <Text style={styles.label}>Información guardada:</Text>
                {storedValue ? (
                    <Text style={styles.value}>{storedValue}</Text>
                ) : (
                    <Text style={styles.value}>No hay información guardada</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 60,
        flexGrow: 1,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        backgroundColor: "white",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 30,
    },
    displayContainer: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 8,
    },
    label: {
        fontWeight: "bold",
        marginBottom: 8,
    },
    value: {
        fontSize: 16,
        color: "#333",
    },
});