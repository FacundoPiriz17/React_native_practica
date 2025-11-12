import {Button, Text, View} from "react-native";
import { useState } from "react";

export default function Index() {
    const [value, setValue] = useState<number>(0);

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", gap: 5}}>
      <Text>{value}</Text>
      <Button title={"Incrementar"} onPress={() => setValue(value + 1)}></Button>
      <Button title={"Decrementar"} onPress={() => setValue(value - 1)}></Button>
    </View>
  );
}
