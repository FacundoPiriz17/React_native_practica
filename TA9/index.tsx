import { Text, View, StyleSheet, Platform } from "react-native";

export default function Index() {
    const isIOS = Platform.OS === "ios";
    const isAndroid = Platform.OS === "android";
    const isWeb = Platform.OS === "web";

    // Estilos dinámicos según plataforma
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isIOS ? "#e0f7fa" : isAndroid ? "#fff3e0" : "#f3e5f5",
        },
        text: {
            fontSize: 20,
            color: isIOS ? "#007aff" : isAndroid ? "#ff6f00" : "#6a1b9a",
            textAlign: "center",
            padding: 20,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {isIOS && "Estás en iOS 🍎"}
                {isAndroid && "Estás en Android 🤖"}
                {isWeb && "Estás en Web 🌐"}
            </Text>
        </View>
    );
}
