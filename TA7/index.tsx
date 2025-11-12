import { Button, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { Image } from "expo-image";

export default function Index() {
    const [actualMovie, setActualmovie] = useState("");
    const [text, setText] = useState("");
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const req = await fetch(`https://www.omdbapi.com/?t=${actualMovie}&apikey=ff32e30d`);
                if (req.ok) {
                    const data = await req.json();
                    setMovie(data);
                } else {
                    console.error("Error en la respuesta:", req.status);
                }
            } catch (err) {
                console.error("Error al conectar con el backend:", err);
            }
        }

        if (actualMovie) fetchMovie();
    }, [actualMovie]);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TextInput
                onChangeText={setText}
                placeholder="Ingrese el título de una película"
                style={{ borderWidth: 1, padding: 8, width: "80%", marginBottom: 10 }}
            />
            <Button onPress={() => setActualmovie(text.trim())} title="Buscar" />

            {movie && movie.Response === "True" && (
                <View key={movie.Title} style={{ marginTop: 20, alignItems: "center" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>{movie.Title}</Text>
                    <Text>{movie.Plot}</Text>
                    <Image source={{ uri: movie.Poster }} style={{ width: 200, height: 300, marginTop: 10 }} />
                </View>
            )}
        </View>
    );
}
