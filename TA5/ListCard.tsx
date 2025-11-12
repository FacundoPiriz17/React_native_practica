import { View, Text, StyleSheet } from "react-native";
import {Image} from "expo-image";

export function ListCard({ url, description }: { url: string; description?: string }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: url }} style={styles.image} contentFit="cover" />
            <Text style={styles.text}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 10,
        marginBottom: 15,
        padding: 8,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 8,
    },
    text: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: "500",
    },
});