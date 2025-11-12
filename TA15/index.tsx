import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//npx expo install react-native-safe-area-context


export default function Index() {
    return (
        <>
            <StatusBar barStyle="dark-content" />

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.box}>
                    <Text style={styles.text}>Con SafeAreaView</Text>
                </View>
            </SafeAreaView>

            <View style={styles.box}>
                <Text style={styles.text}>Sin SafeAreaView</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#e0f7fa",
    },
    box: {
        height: 100,
        margin: 16,
        backgroundColor: "#4dd0e1",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});
