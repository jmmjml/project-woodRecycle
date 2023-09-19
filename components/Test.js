import { Pressable, StyleSheet, Text, View } from "react-native";
function ButtonNav(props) {
  return (
    <Pressable
      onPress={() => {
        props.navigation.navigate(props.children);
      }}
    >
      <Text>{props.children}</Text>
    </Pressable>
  );
}
export default function Test({ navigation }) {
  let foo = "Banana";
  return (
    <View>
      <Text style={styles.paragraf}>Hello World!!!</Text>
      <Text>{foo}</Text>
      <ButtonNav navigation={navigation}>About</ButtonNav>
      <ButtonNav navigation={navigation}>Home</ButtonNav>
    </View>
  );
}

const styles = new StyleSheet.create({
  paragraf: {
    fontSize: 79,
    fontFamily: "Ubuntu",
  },
});
