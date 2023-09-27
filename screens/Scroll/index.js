import { View, Text, Image, ImageBackground ,Pressable } from "react-native";
import styles from "./styles"
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        // source={!sexo ? imagem1 : imagem2} 
        resizeMode="cover" 
        style={{width: '100%', height: "100%"}}
       >
        <View style={styles.content}>
        <Pressable
            style={{
              backgroundColor: '#b1deef',
              width: 140,
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}
            onPress={() => navigation.navigate('about')}>
            <Text
              style={{ color: '#044e8f', fontWeight: 'bold', fontSize: 20 }}>
              Sobre
            </Text>
          </Pressable>
        </View>  
      </ImageBackground>    
    </View>
  );
}
