import {Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function Index() {
    const [text, setText] = useState('');
    return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 5}}>
        <TextInput
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            style={{
                height: 40,
                padding: 5,
                marginHorizontal: 8,
                borderWidth: 1,
            }}
        />
        <Text>{text}</Text>
    </View>
  );
}
