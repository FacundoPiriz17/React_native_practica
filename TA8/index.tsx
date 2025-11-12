import {Text, View, Dimensions, useWindowDimensions, StyleSheet} from "react-native";
import {useEffect, useState} from "react";

export default function Index() {

    const {height, width} = useWindowDimensions();
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        setIsLargeScreen(width > 600);
    }, [width, height]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isLargeScreen ? "#e0f7fa" : "#fff3e0",
        },
        text: {
            fontSize: isLargeScreen ? 28 : 18,
            color: isLargeScreen ? "#00796b" : "#e65100",
            textAlign: "center",
            padding: 20,
        },
        box: {
            width: isLargeScreen ? 300 : 150,
            height: isLargeScreen ? 300 : 150,
            backgroundColor: isLargeScreen ? "#80deea" : "#ffcc80",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {isLargeScreen
                    ? "Pantalla grande detectada 📱💻"
                    : "Pantalla pequeña detectada 📱"}
            </Text>
            <View style={styles.box}>
                <Text style={styles.text}>
                    {isLargeScreen ? "Tablet/Desktop" : "Teléfono"}
                </Text>
            </View>
        </View>
    );
}
