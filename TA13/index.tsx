import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const [facing, setFacing] = useState<CameraType>("back");
    const [permission, requestPermission] = useCameraPermissions();
    const [foto, setFoto] = useState<string | null>(null);
    const camRef = useRef<CameraView>(null);

    if (!permission) return <View />;

    if (!permission.granted)
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );

    const toggleCameraFacing = () => {
        setFacing((current) => (current === "back" ? "front" : "back"));
    };

    const tomarFoto = async () => {
        if (camRef.current) {
            const photo = await camRef.current.takePictureAsync();
            setFoto(photo.uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {foto ? (
                <>
                    <Image source={{ uri: foto }} style={styles.preview} />
                    <Button title="Volver a tomar" onPress={() => setFoto(null)} />
                </>
            ) : (
                <>
                    <CameraView ref={camRef} style={styles.camera} facing={facing} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                            <Text style={styles.text}>Flip Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={tomarFoto}>
                            <Text style={styles.text}>Take Photo</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center" },
    message: { textAlign: "center", paddingBottom: 10 },
    camera: { flex: 1 },
    preview: { flex: 1, width: "100%", resizeMode: "contain" },
    buttonContainer: {
        position: "absolute",
        bottom: 64,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
    },
    button: { alignItems: "center" },
    text: { fontSize: 18, fontWeight: "bold", color: "white" },
});
