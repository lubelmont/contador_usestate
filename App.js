
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ContadorBtn from './components/contadorBtn';

export default function App() {


 const [contador, setContador] = useState(10);



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador App</Text>
      <Text style={styles.numeracion}> {contador} </Text>
      <ContadorBtn 
        label="+ 1" 
        position="izquierda" 
        onPressProp={() => setContador(contador + 1)} 
        onLongPressProp={() => setContador(0)}
        />

      <ContadorBtn 
        label="- 1" 
        position="derecha" 
        onPressProp={() => setContador(contador - 1)} 
        onLongPressProp={() => setContador(0)}
        />

      <StatusBar style="light" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    position: 'absolute',
    top: 60,
    fontSize: 32,
    color: '#1e90ff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  numeracion: {
    fontSize: 240,
    color: '#ffffff',
    fontWeight: 'bold',
  },

});
