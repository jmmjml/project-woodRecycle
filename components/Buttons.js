import { Pressable, Text, Image, View, StyleSheet } from "react-native";

export function ButtonNav(props) {
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
const buttonStyle = new StyleSheet.create({})