import {Button, FlatList, Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function Index() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    const eliminarTarea = () => {
        if (text.trim() === "") return;

        setList([...list.filter(task => task != text)]);
        setText("");
    };

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
            <Button title={"Agregar Tarea"} onPress={() => setList([...list, text])}></Button>
            <FlatList
                data={list}
                renderItem={({item}) => (
                    <View style={{flexDirection: "row", alignItems: "center",}}>
                        <Text>{item}</Text>
                        <Button title={"Eliminar tarea"} onPress={eliminarTarea}></Button>
                    </View>
                )
            }
            />
        </View>
  );
}
