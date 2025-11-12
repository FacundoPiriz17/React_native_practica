import {ScrollView, Text, View, StyleSheet} from "react-native";
import {ListCard} from "@/app/ListCard";

export default function Index() {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            description: "Montañas al amanecer",
        },
        {
            url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
            description: "Bosque cubierto de niebla",
        },
        {
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            description: "Olas del mar al atardecer",
        },
        {
            url: "https://images.unsplash.com/photo-1526401485004-2fda9f6d2a08",
            description: "Ciudad iluminada de noche",
        },
        {
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            description: "Desierto dorado bajo el sol",
        },
        {
            url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            description: "Flores rosadas en primavera",
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {images.map((img, index) => (
                <ListCard key={index} url={img.url} description={img.description} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
    },
});