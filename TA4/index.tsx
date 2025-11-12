import {Button, Text, View} from "react-native";
import {Image} from "expo-image";
import {useState} from "react"

export default function Index() {
    const [img, setImg] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQt57CRP5Ajk6tfQE_iucE9GNMOiJqhAnfIO6oDHRP30XX6ERZ87BKSr5cfNy-xC8S5o&usqp=CAU');
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 5}}>
      <Image style={
          {
            width: 200,
            height: 200,
          }} source={{uri: img}}/>
        <Button title={"Cambiar la imagen"} onPress={() => setImg("https://i.redd.it/which-outfit-do-you-prefer-for-kaiba-v0-uwlb18pbbhpe1.png?width=1000&format=png&auto=webp&s=219703a0d15a38d21b0ab3b8e437735ce68c5e9a")}/>
    </View>
  );
}
